---
sidebar_position: 3
title: Environment variables
---

# Environment variables
The environment variables are defined in yaml files under `config/` directory. These variables can be replaced as per the business use cases. You can create any yaml file in `config/` directory or any nested directory. The default directory structure is given as below:

```
├── config
│   ├── custom-environment-variables.yaml
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

### custom-environment-variables.yaml
This is a sample for custom environment variables where these variables gets values from environment variables set in the environment.
```
my_datasource:
  base_url: MY_DATASOURCE_BASE_URL
  api_key: MY_DATASOURCE_API_KEY
  api_token: MY_DATASOURCE_API_TOKEN

kafka:
  brokers:
    __name: KAFKA_BROKERS
    __format: json
  client_id: KAFKA_CLIENT_ID
```

### telemetry/index.yaml
This is a sample for defining variables of telemetry.
```
metrics:
  export:
    interval: 3000
```

