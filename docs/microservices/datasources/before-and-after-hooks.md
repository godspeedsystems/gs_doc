---
sidebar_position: 3
title: 8.2 Before and after hooks to datasource calls
---

### 8.2.1 Adding before and after hooks

You can execute custom workflows `before_method_hook` and `after_method_hook` any datasource call. this applies to all kinds of datasources you integrate in a godspeed project, whether of type api,redis, kafka etc


- `before_method_hook` this hook will trigger a [workflow](../workflows) before executing the [workflow](../workflows) where the datasource is defined.  

`src/datasource/test_datasource.yaml`
```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>    
before_method_hook: com.jfs.audit_log_workflow
```

- `after_method_hook` this hook will trigger a [workflow](../workflows), after executing the [workflow](../workflows) where the datasource is defined. 

`src/datasource/test_datasource.yaml`
```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>    
after_method_hook: com.jfs.audit_log_workflow
```