---
sidebar_position: 6
title: Authentication & Authorization
---

## 10.1 Authentication
The framework provides [JWT authentication](https://jwt.io/introduction) for securely transmitting information among microservices. 
The user agent should send the JWT in the Authorization header using the Bearer schema. The content of the header should look like the following:
```
Authorization: Bearer <token>
```

### 10.1.1 JWT Configuration
You can do JWT configuration in [configuration](./setup/configuration/static-vars.md/#defaultyaml). For example, this is the sample static configuration:
```
jwt:
  issuer: ms.sample.com
  audience: sample.com
  secretOrKey: sampleKey
```
You can also configure the same in [environment variables](./setup/configuration/env-vars.md/#custom-environment-variablesyaml)

### 10.1.2 Event spec
Add `authn: true` in the event DSL to enable authentication for any event.
```
/v1/loan-application/:lender_loan_application_id/kyc/ckyc/initiate.http.post: 
  authn: true
  fn: com.biz.kyc.ckyc.ckyc_initiate
  on_validation_error: com.jfs.handle_validation_error
  data:
    schema:
      body: 
        required: true
        content:
          application/json:
            schema:
              type: 'object'
              required: []
              properties:
                dob:  { type : 'string', format : 'date', pattern : "[0-9]{4}-[0-9]{2}-[0-9]{2}" }
                meta:
                  type: 'object'
      params: 
      - name: lender_loan_application_id
        in: params
        required: true
        allow_empty_value: false
        schema:
          type: string
  responses: #Output data defined as per the OpenAPI spec
    200:
      schema:
        data: 
          required: # default value is false
          content:
            application/json:
              schema: 
                type: object
                properties:
                  application_id: 
                    type: string
                additionalProperties: false
                required: [application_id]
```

### 10.1.3 Generate JWT
Generally, you will get JWT from your authentication service. For testing purposes, you can generate JWT at [https://jwt.io/](https://jwt.io/) by providing the `iss`, `aud` and `secretOrKey` to verify signature. Use the encoded token as JWT authentication token. For example,
![JWT](/img/JWT.png)

In the above case, the Authorization header should look like:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtcy5zYW1wbGUuY29tIiwiYXVkIjoic2FtcGxlLmNvbSJ9._1fpM6VYq1rfKdTEqi8BcPTm8KIm4cNP8VhX0kQOEts
```

### 10.1.4 Datasource authentication
You can add authentication at datasource level on [API datasource](./datasources/api.md). You can define an authn workflow at datasource level which requests to any authentication service for token/authentication then this workflow can return headers, params or statusCodes to the main workflow. 

Here is the sample spec:  
**Datasource**
```yaml
type: api
base_url: <% config.httpbin.base_url %>
authn: com.jfs.httpbin_auth
```
Here, `com.jfs.httpbin_auth` is the authentication workflow which gets called for the authentication of any request to this datasource.

**Sample workflow using the above datasource**
```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: Hit http bin with some dummy data. It will send back same as response
      fn: com.gs.http
      args:
        datasource: httpbin
        data: <% inputs.body %>
        config:
          url : /anything
          method: post

```

**Sample authentication workflow `com.jfs.httpbin_auth`**
```yaml
summary: Auth workflow
tasks:
    - id: auth_step1
      description: Hit the authn request
      fn: com.gs.http
      args:
        datasource: authapi
        data: <% inputs.query.username %>
        config: 
          url: /authenticate
          method: post
    - id: auth_step2
      description: Transform the response received from authn api
      fn: com.gs.transform
      args:
        headers:
          Authorization: <% 'Bearer ' + outputs.auth_step1.auth.token %>
        params:
          queryid: <% outputs.auth_step1.params.queryid %>
        statusCodes: <% outputs.auth_step1.status_code %>          
```

The authentication workflow should return response in this format:
```yaml
headers: 
  header1: val1
params:
  param1: val1
statusCodes: [401, 403, ....]
```

:::note
The authentication workflow gets called when any request returns the specified `statusCodes`. 
:::

## 10.2 Authorization
The framework provides authorization, to verify if any event/model is authorized to access specific information or is allowed to execute certain actions.

### 10.2.1 Workflow DSL
You can add authorization workflow at the task level in any workflow. The authorization workflow should return allow/deny output to the main worklfow.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: Call an API
tasks:
    - id: httpbin_step1
      description: Hit http bin with some dummy data. It will send back same as response
      authz:
        fn: com.jfs.authz
        args: <% inputs %>
      fn: com.gs.http
      args:
        datasource: httpbin
        data: <% inputs %>
        config:
          url : /anything
          method: post
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: com.gs.http
    args: 
      datasource: authz
      data: <% inputs.body.user %>
      config:
        url : /authorize
        method: post
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data: true
        } else {
            success: false
            data: false
        } %>
```

The authorization workflow should return response in this format to allow/deny:
```yaml
success: true/false
data: true/false
```

> When data is returned as false i.e. deny then the framework will send `403 Unauthorized` response.
