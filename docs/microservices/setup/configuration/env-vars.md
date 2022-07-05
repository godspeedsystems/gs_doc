---
sidebar_position: 3
title: Environment variables
---

# Environment variables
The environment variables are defined in yaml files under `config/custom-environment-variables.yaml` file. The default directory structure is given as below:

```
├── config
│   ├── custom-environment-variables.yaml
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
For example, `MY_DATASOURCE_BASE_URL` is defined as an environment variable. To specify its value, you need to export this variable in the environment as given below:

```
$ export MY_DATASOURCE_BASE_URL=https://httpbin.org/
```