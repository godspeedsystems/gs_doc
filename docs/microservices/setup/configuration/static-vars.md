---
sidebar_position: 3
title: Static variables
---

# Static variables
The static variables as well as their values are defined in yaml files under `config/` directory. These variables can be replaced as per the business use cases. You can create any yaml file in `config/` directory or any nested directory. The default directory structure is given as below:

```
├── config
│   ├── default.yaml
│   └── telemetry
│       └── index.yaml
```

### default.yaml
This file contains some predefined variables. Below is a sample file.
```
log_level: debug
api_version: "1.0"
lang: coffee
httpbin:
  base_url: https://httpbin.org
kafka:
  client_id: kafka_wrapper
  brokers: [ "kafka:9092" ]
jwt:
  issuer: ms.sample.com
  audience: sample.com
  secretOrKey: sampleKey
```

### telemetry/index.yaml
This is a sample for defining variables of telemetry.
```
metrics:
  export:
    interval: 3000
```

