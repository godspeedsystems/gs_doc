---
sidebar_position: 7
title: Auto watch and build
---

# Auto watch and build
The framework provides auto watch/build feature to detect the changes in you project files. This feature is only applicable when you are working inside dev container.  
Here is the list of files which are being watched inside the dev container.

```
src/**/*.yaml|yml|js|json
src/**/*.ts
src/**/*.prisma
```

> During any datastore setup via Prisma in the dev container, you don't need to setup anything explicitily, the watch feature automatically takes care of setting up the datastores. Refer [Prisma Datastore Setup](../datasources/datastore.md/#prisma-datastore-setup) for more information.
