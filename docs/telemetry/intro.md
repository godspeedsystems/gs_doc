---
sidebar_position: 1
title: Observability
---

> Work in progress

# Introduction

Detailed observability (APM, BPM) is baked into our consulting services and the Godspeed landscape. We aim to observe workings of both the microservice and FAAS, along with the supporting stack like message bus, databases etc. For the same we are leveraging the [OpenTelemetry specs](http://opentelemetry.io) and its supporting tech ecosystem. Numerous open source and commercial softwares for Observability support OpenTelemetry out of the box, allowing one to switch between them if needed.

> Not even a single request must go untracked!

## Goals

### Auto application performance management

No code APM across variety of microservice frameworks, FAAS & supporting stack like databases and message bus.

### Configurable

Configure org wide signals' schema on the template provided as part of Godspeed. Also, ability to send custom signals (especially useful for BPM).

### Support legacy systems

Include legacy systems with least or no change in code.

### Complete debuggability

Collect, correlate and debug signals across logs (events), traces and metrics, based on the request id and the attributes defined for the organization. For example, app version, function, DB query, K8s pod, domain, microservice etc.

### Backend agnostic

The telemetry solutioning will always remain independent of the backends where the different signals are collected or debugged. Teams can choose the one they wish to integrate, as long as it supports Open Telemetry protocol (which most popular ones do out of the box).

## Tenets

### Standardization and uniformity

The data shape of telemetry signals must be standard across the organization, across tracing, logging and monitoring

### Tech stack agnostic

The technology stack doesn't matter. Open telemetry ships SDKs for popular languages.

### Common attributes

Every signal, whether log, metric or trace will have some common information for correlatability.

## Common model for telemetry

Please find the [draft documentation here](https://docs.google.com/document/d/12V0oaqj81G8nDuCeD46_mHovv6uwaguwd4kVpBC2J6Q/edit#heading=h.zerkjmn66eyq). It will be soon brought to this website.

## Visualization
You can use any APM tool to visualize metrics, traces and logging such as [SigNoz](https://signoz.io/), [DataDog](https://www.datadoghq.com/), [NewRelic](https://newrelic.com/) etc. In the below section, we have used SigNoz as reference.

## Configuration
### OTEL export interval
It can be configured in [configuration variables](../microservices/setup/environment-variables.md/#telemetryindexyaml). The interval is in milliseconds. For example,
```
metrics:
  export:
    interval: 3000
```

### OTEL environment variables
You can configure the following [OTEL environment variables](https://opentelemetry.io/docs/reference/specification/sdk-environment-variables/) in your terminal to see the exported metrics and traces.

#### OTEL_EXPORTER_OTLP_ENDPOINT
Specify the IP address of your OTEL collector. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
$ export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
#### OTEL_SERVICE_NAME
Specify the service name which you want to use for your project.
```
$ export OTEL_SERVICE_NAME=sample_proj1
```

After exporting these variables, see below a sample in SigNoz: 
![Metrics](/img/Metrics.png)
![Traces](/img/Traces.png)
