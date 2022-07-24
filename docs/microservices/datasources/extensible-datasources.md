---
sidebar_position: 3
title: Extensible datasources
---

# Introduction

The framework provides feature to extend datasources where you can add new datasources with any customized type as per your business logic.

## Datasource definition
You can define your datasource in yaml file inside `src/datasources` directory. For example, newDatasource.yaml is defined in the datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── kafka1.yaml
    │   └── newDatasource.yaml
    ├── events
    ├── functions
    └── mappings
```

> The three keys in yaml `type`, `loadFn` and `executeFn` are mandatory to define any new datasource which is not provided by the framework as core datasources. You can define other key/vaue pairs as per your need.

Below is a sample of newDatasource.yaml
```
type: sample
loadFn: com.sample.loader
executeFn: com.sample.execute
client_url: https://sample.com
```

### type
It defines the type of the datasource like REST API, SOAP.
