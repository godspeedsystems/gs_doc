---
sidebar_position: 6
title: Authentication & Authorization
---

## Authentication
The framework provides [JWT authentication](https://jwt.io/introduction) for securely transmitting information among microservices. 
The user agent should send the JWT in the Authorization header using the Bearer schema. The content of the header should look like the following:
```
Authorization: Bearer <token>
```

### JWT Configuration
You can do JWT configuration in [configuration](./setup/configuration/static-vars.md/#defaultyaml). For example, this is the sample static configuration:
```
jwt:
  issuer: ms.sample.com
  audience: sample.com
  secretOrKey: sampleKey
```
You can also configure the same in [environment variables](./setup/configuration/env-vars.md/#custom-environment-variablesyaml)

### Event spec
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

### Generate JWT
Generally, you will get JWT from your authentication service. For testing purposes, you can generate JWT at [https://jwt.io/](https://jwt.io/) by providing the `iss`, `aud` and `secretOrKey` to verify signature. Use the encoded token as JWT authentication token. For example,
![JWT](/img/JWT.png)

In the above case, the Authorization header should look like:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtcy5zYW1wbGUuY29tIiwiYXVkIjoic2FtcGxlLmNvbSJ9._1fpM6VYq1rfKdTEqi8BcPTm8KIm4cNP8VhX0kQOEts
```
