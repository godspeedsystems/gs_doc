---
sidebar_position: 3
title: Introduction
---

# Datasources
Any kind of entity which provides read and write mechanism for data is considered a datasource. For example, an API, a SQL or NoSQL datastore which includes RDBMS, key value stores, document stores etc. The settings for each datasource lies in `src/datasources` directory.

![datasources](/img/datasources_folder.png)

### Datasource types

**Currently supported types**
- [API](./api)
- [Datastores](./datastore.md) (SQL/NoSQL)
  - Postgres
  - Mysql
  - Mongodb
  - Elasticsearch

**Upcoming**
- S3
- File system