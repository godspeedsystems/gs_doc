---
sidebar_position: 3
title: 8.5 Elasticgraph as datasource
---

# Introduction

The framework supports elasticgraph as a datasource. It supports elasticsearch as datastore. In addition, you can use various features of elasticgraph like deep graph search algorithms, joins, aggregations, multi-lingual support.

### 8.5.1 Folder Structure
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

### 8.5.2 Datasource DSL
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


### 8.5.3 Configuration files of elasticgraph
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
│       │   ├── reconciled.toml
│       │   └── auth_user.toml
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
        │   ├── reconciled.toml
        │   └── auth_user.toml
        ├── entitiesInfo.toml
        ├── relationships.txt
        ├── suggestions.toml
        └── union.toml        
```

### 8.5.4 Elasticgraph Setup
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

## 8.5.5 Auto generating CRUD APIs for elasticgraph
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

# 8.5.6 Elasticgraph setup
## 8.5.6.1 Elastic CMS

### Elastic CMS Components

- **elasticgraph** - It is the main component of Elastic CMS which does all relationship management and graph search.

- **eg-server** - contains the code for backend which all the APIs to access Elastic CMS features.

- **eg-admin** - contains the code for UI which help administrator monitor, add, search different added entities.

- **sample-project**- Sample project in which we will use ElasticGraph. Inside the sample project there is a directory named "config", inside "config" directory there are two more directories

  **backend:** One for backend model and other backend settings

  **frontend:** Second for admin dashboard UI
  
## 8.5.6.2 Setup
### step1: To begin, we will create an empty directory named elastichGrapSetup

```bash
$ mkdir elastichGrapSetup
```

**And clone all repos related to Elastic CMS. Follow below instruction to do it.**

```bash
$ git clone https://github.com/Mindgreppers/elasticgraph.git
$ git clone https://github.com/Mindgreppers/eg-server.git
$ git clone https://github.com/Mindgreppers/eg-admin.git
$ git clone https://github.com/Mindgreppers/sample_project.git

```

Now navigate to `elasticgraph` and `eg-server` folder and run `yarn install` like below.

```bash
$ cd elasticgraph
$ yarn install
$ cd ..
$ cd eg-server
$ yarn install
$ cd ..
$ cd eg-admin
$ yarn install
```

The next setup is to download [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/targz.html) and make sure it is [running](https://www.elastic.co/guide/en/elasticsearch/reference/current/targz.html#targz-running) on 9200 port but If you want to change it, please replace it with `port` key value under `clientParams/hosts` in `eg-server/config.js` file.

#### Configuration

`eg-server/package.json`
Change the start script. Replace with following string.

```json
"scripts": {
	"start": "DEBUG=* nodemon ./bin/www ../sample_project/config/backend"

},
```

- Create a package.json file by running `npm init -y` command inside your new project directory.
- Then, in this directory, run `yarn install`. This will create a node_modules directory.

Create a soft link of `elasticgraph` in sample_project/node_modules`.

```bash
$ cd sample_project/node_modules
$ ln -s ../../elasticgraph elasticgraph

```

_Note_: `../../elasticgraph` is the path to where you have cloned `elasticgraph` repository, so please make change accordingly.
**Note**

To run these commands, you will need to have the ElasticGraph source code. Navigate to the root directory of ElasticGraph and execute the following command.
**Creating the mapping in Elasticsearch**

To create the mapping for the first time, run the following command:

```bash
$ cd <path-to-elasticgraph-repo>

 DEBUG=*,-elasticsearch node lib/mappingGenerator/reIndexer.js ../sample_project/config/backend all init

```

**Reindexing after Mapping Changes**

If we have made any changes to the mapping, such as adding new fields, we will need to reindex our data to apply the changes to the existing documents. To reindex in Elasticsearch,run the following command:
```bash
$ cd <path-to-elasticgraph-repo>
DEBUG=*,-elasticsearch node lib/mappingGenerator/reIndexer.js ../sample_project/config/backend all

```
**Warning**: 

If there are existing data indexed in Elasticsearch and we want to make changes to the mapping, such as adding new fields, it is not recommended to use the command used for creating the mapping for the first time
```bash
DEBUG=*,-elasticsearch node lib/mappingGenerator/reIndexer.js ../sample_project/config/backend all init
```
above command is specifically designed for the initial mapping creation and may lead to data loss if applied to an existing index.

**Configuration: Switching to OpenSearch in Elasticgraph**

ElasticGraph supports both Elasticsearch and OpenSearch as underlying data stores. By default, Elasticsearch is used. To configure ElasticGraph to use OpenSearch instead of Elasticsearch, add the following line to the .env file in the ElasticGraph folder or in the elasticsearch.toml file in your project's configuration:

```bash
ds=aws
```
```
sample_project
└── config
      ├── backend
           └── elasticsearch.toml
```
**elasticsearch.toml**

```yaml

maxConnections = 200
apiVersion = '7.4'
requestTimeout = 90000
node = 'http://localhost:9200'
sniffOnStart = true
ds = 'aws'
```
**Custom Elasticsearch Mapping**

If you want to override an existing mapping, add a specific mapping, or add new fields then custom mapping overrides the existing mapping.

```
sample_project
  └── config
      ├── backend
           └── ds
                └──es 
                    └──custom-mapping.yaml   
```

```yaml
reconciled:
  mappings:
    dynamic_templates:
    - full_name:
        path_match: charge_params.*
        mapping:
          type: float
    properties:
      charge_params:
        properties:
          fee (Fee):
            type: float
          fee (Phí dịch vụ):
            type: float
```
in the above, the existing mapping of Reconciled will be overridden.

**Field Encryption and Search in ElasticGraph**

Protecting sensitive data is crucial in any application. ElasticGraph offers a powerful feature that allows encryption of specific fields mentioned in the TOML file of the schema. This ensures the confidentiality and integrity of sensitive information stored in your database.

Furthermore, ElasticGraph enables search functionality on encrypted fields in their plaintext form. To achieve this, ElasticGraph utilizes the robust SHA-256 algorithm for deterministic encryption. 

For example, if you want to encrypt a mobile number field, you can easily achieve this by simply adding the line "encrypted = true" in the corresponding TOML file.

```yaml

[mobileNumber]
type ="String"
isRequired = false
sort = true
encrypted = true

```

#### Run

**eg-server :—**

```bash
$ cd eg-server
$ yarn start
```

##### server is running at http://localhost:4000

### step2:API: Postman collection

Download the collection with documentation [here](https://www.getpostman.com/collections/017987acfbcc18e88d7e)
There you will see core CRUD API (same in sync and async). Each CRUD api has its documentation in the collection itself.

### step3:Setup Admin UI for ElasticGraph

**eg-admin :—**
This is the admin dashboard UI. It speaks with egserver in the backend.

`eg-admin/setupConfig.sh`
Replace the content with this content

```bash
DEBUG=* node ../elastic-graph-config/schemaMaker.js ../sample_project/config ../elasticgraph/lib/configLoader
cp ../sample_project/config/backendConfig.js configs/
cp ../sample_project/config/frontenend/config.js configs/frontendConfig.js
```

Whenever you change your backend schema or frontend settings,
you will need to run this command to compile all the changes in one config.json file,
which is then used by egadmin UI for rendering the interface and providing the required functionality.

```
$ cd eg-admin
sh setupConfig.sh
```

Note: Ensure that setupConfig.sh has correct

**_For running the server_**

```bash
$ cd eg-admin
$ yarn start

```

### Login to admin UI

    Open http://localhost:3030 and enter your email and password to login















