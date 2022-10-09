---
sidebar_position: 3
title: 7.5 Elasticgraph as datasource
---

# Introduction

The framework supports elasticgraph as a datasource. It supports elasticsearch as datastore. In addition, you can use various features of elasticgraph like deep graph search algorithms, joins, aggregations, multi-lingual support.

### 7.5.1 Folder Structure
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

### 7.5.2 Datasource DSL
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


### 7.5.3 Configuration files of elasticgraph
All the configuration files of elasticgraph datasources should be defined in `src/datasources/eg_config/` directory.

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

### 7.5.4 Elasticgraph Setup
The framework has [inbuilt feature](../setup/auto-watch.md/#auto-watch-and-build) of setting up elasticgraph model automatically whenever a new configuration is added in `src/datasources/eg_config/` directory. In case, you are getting any error in the setup, then you can refer execute below step for manual setup: 

> During the project setup, if you have not selected elasticsearch, then you will have to execute `godspeed update` in project root directory, outside the dev container. This will add elasticsearch in the dev container environment.


#### Step 1: godspeed eg-push
```
$ godspeed eg-push
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          

> eg_test@1.0.0 eg-push
> for f in src/datasources/eg_config/*; do echo ${f}; node ../gs_service/elasticgraph/lib/mappingGenerator/reIndexer.js ${f} all; done

src/datasources/eg_config/eg1
```

## 7.5.5 Auto generating CRUD APIs for elasticgraph
Developer can generate CRUD APIs for all the entities in `src/datasources/eg_config/` directory. `Events` and `Workflows` will be auto generated for `Create`, `Read`, `Update` and `Delete` operations for each entity in respective datastore.

 Auto-generated events and workflows will be stored in `/events/{datasourceName}/{entityName}` and `/functions/com/gs/eg/{datasourceName}/{entityName}` folders respectively.

```
$ godspeed gen-crud-api
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          

> eg_test@1.0.0 gen-crud-api
> npx godspeed-crud-api-generator

Select datasource / schema to generate CRUD APIs
Events and Workflows are generated for elasticgraph.yaml
```