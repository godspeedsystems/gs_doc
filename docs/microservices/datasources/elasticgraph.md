---
sidebar_position: 3
title: Elasticgraph as datasource
---

# Introduction

The framework supports elasticgraph as a datasource. It supports elasticsearch as datastore. In addition, you can use various features of elasticgraph like deep graph search algorithms, joins, aggregations, multi-lingual support.

## Example spec
### Folder Structure
The datasources for elasticgraph are defined in `src/datasources`. Here, `elasticgraph1.yaml` and `elasticgraph2.yaml` are defined in datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── elasticgraph1.yaml
    │   ├── elasticgraph2.yaml
    ├── events
    ├── functions
    └── mappings
```

### Datasource DSL
**elasticgraph1.yaml**
```yaml
type: elasticgraph
schema_backend: /workspace/development/app/src/eg_config/eg1/ # schema path to config files
deep: false # deep feature of elasticgraph to use graph algorithms
collect: true # collect feature of elasticsearch
```
**elasticgraph2.yaml**
```yaml
type: elasticgraph
schema_backend: /workspace/development/app/src/eg_config/eg2/ # schema path to config files
deep: false # deep feature of elasticgraph to use graph algorithms
collect: true # collect feature of elasticsearch
```


### Configuration files for elasticgraph
All the configuration files for elasticgraph datasources should be defined in `src/datasources/eg_config/` directory.

Sample strucutre of config files under `schema_backend` path.
```
.
├── eg1
│   ├── collect.toml
│   ├── common.toml
│   ├── config.toml
│   ├── custom.toml
│   ├── elasticsearch.toml
│   ├── joins
│   │   └── search.txt
│   └── schema
│       ├── aggregation.toml
│       ├── dependencies.toml
│       ├── entities
│       │   ├── credit_card.toml
│       │   └── user.toml
│       ├── entitiesInfo.toml
│       ├── relationships.txt
│       ├── suggestions.toml
│       └── union.toml
└── eg2
    ├── collect.toml
    ├── common.toml
    ├── config.toml
    ├── custom.toml
    ├── elasticsearch.toml
    ├── joins
    │   └── search.txt
    └── schema
        ├── aggregation.toml
        ├── dependencies.toml
        ├── entities
        │   ├── credit_card.toml
        │   └── user.toml
        ├── entitiesInfo.toml
        ├── relationships.txt
        ├── suggestions.toml
        └── union.toml        
```
