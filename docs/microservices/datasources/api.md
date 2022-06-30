---
sidebar_position: 3
title: API datasource
---

# API datasource

The API datasource acts as a wrapper around third party APIs. It helps interact with third party APIs or own microservices. It takes OpenAPI schema as its setting, and the datasource can be used in `com.gs.http` calls out of the box. Following functionality is provided by the framework based on the schema of the datasource
- Authentication and authorization as per the spec
- Validation of the input to the http method (must be compliant to the API spec)
- Validation of the response from the API (must be compliant to the API spec)

## Example spec

### API datasource schema defined externally
If the OpenAPI spec of the API to consume/connect with is available at a URL, then one can simply refer the url here itself.

```yaml
idfc:
  schema: https://raw.githubusercontent.com/Kong/swagger-ui-kong-theme/main/demo/public/specs/httpbin.yaml
```

### API datasource schema defined within the yaml file
If there is no OpenAPI spec available for an API, then developer needs to provide details of the API schema in the .yaml file for that datasource.

```yaml
type: api
schema:
base_url: <% config.growthsource.base_url %>
security:
  - ApiKey: plpinelabs
  - ApiToken: <% config.growthsource.api_token %>

securitySchemes:
  ApiKey:
    type: apiKey
    in: header
    name: x-api-key

  ApiToken:
    type: apiKey
    in: header
    name: Authorization
```

### Headers defined at datasource level
Headers defined at datasource level are applicable for all the workflows, which are using this datasource. For example, in below datasource, headers 'name' and 'title' are sent in each workflow which is using this datasource.

```
type: api
base_url: <% config.httpbin.base_url %>

headers:
  name: godspeed
  title: <% inputs.headers['title'] %>
```

### Headers defined at workflow level
Headers defined at workflow level are applicable for a single workflow only. You can find the [example usage here](../workflows#the-tasks-within-workflows)

### Example usage
You can find the [example usage here](../workflows#comgshttp)