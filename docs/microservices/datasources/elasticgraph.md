---
sidebar_position: 3
title: Elasticgraph as datasource
---

# Introduction

The framework supports elasticgraph as a datasource. It supports elasticsearch as datastore. In addition, you can use various features of elasticgraph like deep graph search algorithms, joins, aggregations, multi-lingual support.

## Example spec
The datasources for elasticgraph are defined in `src/datasources`. Here, `elasticgraph.yaml` are defined in datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── elasticgraph.yaml
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `elasticgraph.yaml`
```
type: elasticgraph
schema_backend: /workspace/development/app/src/elasticgraph_backend/config/backend # schema path to config files
deep: false # deep feature of elasticgraph to use graph algorithms
collect: true # collect feature of elasticsearch
```

Sample strucutre of config files under `schema_backend` path.
```
.
├── api-schema
│   └── index.yaml
├── collect.toml
├── common.toml
├── config.toml
├── custom.toml
├── elasticsearch.toml
├── joins
│   ├── index.txt
│   ├── read.txt
│   └── search.txt
└── schema
    ├── aggregation.toml
    ├── dependencies.toml
    ├── entities
    │   ├── entity1.toml
    │   └── entity1.toml
    ├── entitiesInfo.toml
    ├── relationships.txt
    ├── suggestions.toml
    └── union.toml
```
