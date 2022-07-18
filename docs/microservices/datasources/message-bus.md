---
sidebar_position: 3
title: Message Bus as datasource
---

# Introduction

The framework supports message bus as a datasource. It helps in interacting with message bus, to send/receive events on a message bus. 
> Currently, the framework supports only kafka as a message bus.

## Example spec
The datasources for message bus are defined in `src/datasources` where the file extension depicts the message bus you are using. For example, to define a kafka client, file extension should be `.kafka`. Here, two kafka clients `kafka1.kafka` and `kafka2.kafka` are defined in datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── kafka1.kafka
    │   └── kafka2.kafka
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `kafka1.kafka`
```
client_id: my_service
brokers: [ "kafka:9092" ]
```