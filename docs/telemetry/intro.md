---
sidebar_position: 1
title: Observability
---

# Introduction

For observability, the framework supports Application Performance Monitoring(APM) out of the box. This includes distributed trace context propagation across sync and async channels, logging and basic metrics. For BPM, custom metrics and logging will be made available soon. 

For the same, we are leveraging the [OpenTelemetry standard](http://opentelemetry.io) and its supporting tech ecosystem. 

> Not even a single request must go untracked!

## Goals

### Auto application performance monitoring

No code APM across microservices, integrable with standard APM tools and logging backends, without any dev effort.

### Backend agnostic

Numerous open source and commercial softwares for Observability support OpenTelemetry out of the box, allowing one to switch between them if needed.

### Complete debuggability

Collect, correlate and debug signals across logs (events), traces and metrics, based on the request id and the attributes defined for the organization. For example, app version, function, DB query, K8s pod, domain, microservice etc.

## Recommended model for telemetry signals

Please find the [draft documentation here](https://docs.google.com/document/d/12V0oaqj81G8nDuCeD46_mHovv6uwaguwd4kVpBC2J6Q/edit#heading=h.zerkjmn66eyq). This is compiled in one place from various references across the OpenTelemetry documentation. This may require works by the DevOps team as well e.g. K8s related attributes.

## Visualization
You can use any APM tool to visualize metrics, traces and logging such as [SigNoz](https://signoz.io/), [DataDog](https://www.datadoghq.com/), [NewRelic](https://newrelic.com/) etc. In the below section, we have used SigNoz as reference.

## Configuration
### OTEL export interval
It can be configured in [configuration](../microservices/setup/configuration/static-vars.md/#telemetryindexyaml). The interval is in milliseconds. For example,
```
metrics:
  export:
    interval: 3000
```

### Specifying export endpoint
Specify the IP address of your OTEL collector. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
$ export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
### Specifying the service name
Specify the service name by which you want to setup observability.
```
$ export OTEL_SERVICE_NAME=sample_proj1
```

Let's assume you have setup SigNoz as the exporter then you will see something like this: 
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png)

> In case you have any questions, please reach out to us on our [Discord channel](https://discord.com/channels/983323669809999882/983323669809999885).