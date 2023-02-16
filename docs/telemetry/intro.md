---
sidebar_position: 1
title: Observability
toc_min_heading_level: 2
toc_max_heading_level: 4
---

## 12.1 Introduction

For observability, the framework supports Application Performance Monitoring(APM) abd Business Performance Monitoring(BPM) out of the box. This includes distributed trace context propagation across sync and async channels, logging and basic metrics.

For the same, we are leveraging the [OpenTelemetry standard](http://opentelemetry.io) and its supporting tech ecosystem. 

> Not even a single request must go untracked!

### 12.1.1 Architecture
![arch](/img/otel_arch.png)

- Both **Traces** and **Metrics** are sent to OTEL Collector directly. **Tempo** is used as tracing backend for traces and **Prometheus** is used for metrics with **Mimir** as its backend.
- For **Logs**, a fluent bit daemonset is running on node, which collects logs from various applications on the node. **Loki** is used as logs aggregation solution.

## 12.2 Goals

### Auto application performance monitoring

No code APM across microservices, integrable with standard APM tools and logging backends, without any dev effort.

### Backend agnostic

Numerous open source and commercial softwares for Observability support OpenTelemetry out of the box, allowing one to switch between them if needed.

### Complete debuggability

Collect, correlate and debug signals across logs (events), traces and metrics, based on the request id and the attributes defined for the organization. For example, app version, function, DB query, K8s pod, domain, microservice etc.

## 12.3 Configuration
### 12.3.1 OTEL exporter endpoint
Specify the IP address of your OTEL collector as env variable. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
$ export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
For example,
```
export OTEL_EXPORTER_OTLP_ENDPOINT=http://172.17.0.1:4317
```

### 12.3.2 OTEL service name
Specify the service name by which you want to setup observability and set it as env variable. 
```
$ export OTEL_SERVICE_NAME=sample_proj1
```

Let's assume you have setup SigNoz as the exporter then you will see something like this: 
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png)

> In case you have any questions, please reach out to us on our [Discord channel](https://discord.com/channels/983323669809999882/983323669809999885).

### 12.3.3 Logging
#### 12.3.3.1 Log level
The minimum level set to log above this level. Please refer [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options) for more information. Set `log_level` in [Static variables](../microservices/setup/configuration/static-vars.md#defaultyaml)

#### 12.3.3.2 Log fields masking
If you want to hide sensitive information in logs then define the fields which need to be hidden in `redact` feature in [Static variables](../microservices/setup/configuration/static-vars.md#defaultyaml). Please refer [Pino redaction paths](https://github.com/pinojs/pino/blob/master/docs/redaction.md#paths) for more information.

#### 12.3.3.3 Log format in dev environment
By default, the logs are dumped in [OTEL Logging format](https://opentelemetry.io/docs/reference/specification/logs/data-model/) when you deploy your service anywhere (UAT, Prod, K8s, etc.) except inside the vscode remote containers/dev containers. 
```
{"Body":"adding body schema for /upload_doc.http.post","Timestamp":"1676463125324000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"content_schema {\"type\":\"object\",\"properties\":{\"document_type\":{\"type\":\"string\"},\"document_category\":{\"type\":\"string\"},\"loan_code\":{\"type\":\"string\"}}}","Timestamp":"1676463125324000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"adding body schema for /upload_multiple_docs.http.post","Timestamp":"1676463125324000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"content_schema {\"type\":\"object\",\"properties\":{\"document_type\":{\"type\":\"string\"},\"document_category\":{\"type\":\"string\"},\"loan_code\":{\"type\":\"string\"}}}","Timestamp":"1676463125324000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"adding body schema for /upload_s3.http.post","Timestamp":"1676463125324000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"content_schema {\"type\":\"object\"}","Timestamp":"1676463125324000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"registering http handler /another_workflow post","Timestamp":"1676463125324000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"registering http handler /create/:entity_type post","Timestamp":"1676463125325000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
{"Body":"registering http handler /document post","Timestamp":"1676463125325000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"a02c8d519aca","process.pid":6116},"Attributes":{}}
```

Please note that the default logging format inside vscode dev container on your local machine is `dev format` as given in the below sample.
  
```
06/02/23, 11:28:26 am [INFO]     adding param schema for /helloworld.http.get
06/02/23, 11:28:26 am [DEBUG]     param schema: {"type":"object","required":[],"properties":{"status":{"type":"string"}}}
06/02/23, 11:28:26 am [INFO]     adding body schema for /anything.http.post
06/02/23, 11:28:26 am [DEBUG]     content_schema {"type":"object","properties":{"Gender":{"type":"string"}},"required":["Gender"]}
06/02/23, 11:28:26 am [INFO]     adding param schema for /anything.http.post
06/02/23, 11:28:26 am [DEBUG]     param schema: {"type":"object","required":["bank_id"],"properties":{"bank_id":{"type":"string"}}}
06/02/23, 11:28:26 am [INFO]     registering http handler /notify post
06/02/23, 11:28:26 am [INFO]     registering http handler /validate post
06/02/23, 11:28:26 am [INFO]     registering http handler /van/:id get
```
:::note
If you want to change the OTEL format to `dev format`, then set the environment variable `NODE_ENV` to `dev` in your environment.   
:::

```
export NODE_ENV=dev
```

#### 12.3.3.4 Add custom identifiers in logs
You can add any custom identifier in the logging whenever any event is triggered on your service. The value for the custom identifier will be picked up from event body, params, query, or headers.   

To enable this feature ,you need to specify two things:   
- `log_attributes` variable as [environment variable](../microservices/setup/configuration/env-vars.md)/[static variable](../microservices/setup/configuration/static-vars.md) which contains the list of identifiers.                

For example, this is the sample static configuration:
```
log_attributes: ["query.mobileNumber", "params.id", "body.data?.lan"]
```

- location of the identifier in the request payload. As specified in the above example, 
  - if mobileNumber is present in query params then specify `query.mobileNumber`.
  - if id is present in path params then specify `params.id`.
  - if lan is present in data field inside body then specify `body.data?.lan`.

:::note
Please make sure to add ? in case any nested field is optional like `body.data?.lan` so that it works well with undefined values. This will add lan in the logs if it is present else it will not get added.
:::

## 12.4 Custom metrics, traces and logs (BPM)
Custom metrics, traces and logs can be added in the workflow DSL at each task level then these will be available out of the box along with APM.

### 12.4.1 DSL spec for custom metrics
```
# refer https://github.com/siimon/prom-client
metrics:
-   name: metric_name
    type: counter|gauge|histogram|summary
    labels: 
      label1: val1
      label2: val2
            
    # followng functions depending on the metric type and all of them could be scripts, can use inputs/outputs
    inc: 10
    dec: 10
    set: 100
    observe: 2000
    timer: true|false(boolean) starts at the beginning of workflow/task and ends at the end of workflow/task
```

#### Example spec
In the following example, we are using two custom metrics: 
- httpbin_calls_total: counter type metric, counter is incremented by 1.
- httpbin_calls_duration: histogram type metric, timer is set to true to record duration.
```
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: com.gs.http         
      metrics:
        - name: httpbin_calls_total
          help: 'httpbin_calls_total counter of httpbin requests labeled with: method, status_code'
          type: counter
          labels:
            method: httpbin
            status_code: <% outputs.httpbin_step1.code %>               
          inc: 1
        - name: httpbin_calls_duration
          help: 'httpbin_calls_duration duration histogram of httpbin responses labeled with: method, status_code'
          type: histogram
          labels:
            method: httpbin
            status_code: <% outputs.httpbin_step1.code %>               
          timer: true          
      args:
        datasource: httpbin
        params: <% inputs.query %>
        data: <% inputs.body %>
        config:
          url : /anything
          method: post
```

### 12.4.2 DSL spec for custom trace
```
trace:
    name: span_name
    attributes:
        attribute1: value1
        attribute2: value2
```

#### Example spec
In the following example, we are creating a new span named `httpbin_trace` with span attributes `request` and `param`. This span gets created when the task starts and ended when the task completes its execution.

```
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: com.gs.http
      trace:
        name: httpbin_trace
        attributes:
            request: <%inputs.body%>
            param: <%inputs.query%>
      args:
        datasource: httpbin
        params: <% inputs.query %>
        data: <% inputs.body %>
        config:
          url : /anything
          method: post
```

### 12.4.3 DSL spec for custom logs
```
logs:
    before:
        level: fatal|error|warn|info|debug|trace # refer pino for levels
        message: 'Sample log before'
        params: 
          param1: val1
          param2: val2
        attributes:
          request:
            query: <%inputs.query%>
    after:
        level: info
        message: 'Sample log after'
        params:
        attributes: 
```

The logs are dumped in OTEL format. Please refer to [OTEL Logging Data model](#https://opentelemetry.io/docs/reference/specification/logs/data-model/) for understanding of fields dumped in the logs.
> `message` and `params` are part of `Body` field and `attributes` are part of `Attributes` field in the log.

#### Example spec
In the following example, we are two additional logs before and after the task execution. 

```
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: com.gs.http
      logs:
        before:
          level: error
          message: 'Hello'
          params: 
            - key1: v1
              key2: v2
            - v1
          attributes: 
            request: <%inputs.query%>
        after:
          level: error
          message: 'World'
          params: 
            key1: v1
            key2: v2
          attributes: 
            customer_name: <% outputs.httpbin_step1.data.json.customer_name %> 
      args:
        datasource: httpbin
        params: <% inputs.query %>
        data: <% inputs.body %>
        config:
          url : /anything
          method: post
```

** Sample Logs **  
```
{"Body":"Hello [{\"key1\":\"v1\",\"key2\":\"v2\"},\"v1\"]","Timestamp":"1676011973016000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"request":{"status":"Hello"},"task_id":"if","workflow_name":"if_else"}}
. . . . . . . . . . .
{"Body":"World {\"key1\":\"v1\",\"key2\":\"v2\"}","Timestamp":"1676011973019000000","SeverityNumber":17,"SeverityText":"ERROR","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"customer_name":"Hell!","task_id":"if","workflow_name":"if_else"}}
``` 

## 12.5 Observability Stack
The complete observability stack with K8s helm-charts will be made available soon.

## 12.6 Recommended model for telemetry signals

Please find the [draft documentation here](https://docs.google.com/document/d/12V0oaqj81G8nDuCeD46_mHovv6uwaguwd4kVpBC2J6Q/edit#heading=h.zerkjmn66eyq). This is compiled in one place from various references across the OpenTelemetry documentation. This may require works by the DevOps team as well e.g. K8s related attributes.
