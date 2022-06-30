---
sidebar_position: 7
title: Project structure
---

# Introduction
The project root folder gets created in current folder under the `projectName` which is used in `godspeed create` command using godspeed CLI. The project contains two folders: `src/` and `config/`. 

Click [here](./introduction-cli.md#create) for more information on `godspeed create` command.

## Project structure

### Project Structure with no examples
The project contains blank structure with no examples/templates when it is created using `godspeed create -n` command option. Refer [command here](./introduction-cli.md#options-1) for more information.  

```
.
├── config
│   ├── custom-environment-variables.yaml
│   ├── default.yaml
│   ├── index.yaml
│   └── telemetry
├── package.json
└── src
    ├── datasources
    ├── events
    ├── functions
    └── mappings
```

### Project Structure with examples
The project contains following heirarchy with examples when it is created without using `godspeed create -n` command option. Refer [command here](./introduction-cli.md#create) for more information.  

```
.
├── config
│   ├── custom-environment-variables.yaml
│   ├── default.yaml
│   ├── index.yaml
│   └── telemetry
│       └── index.yaml
├── package.json
└── src
    ├── datasources
    │   └── httpbin.yaml
    ├── events
    │   ├── call_another_workflow.yaml
    │   ├── document.yaml
    │   ├── helloworld.yaml
    │   ├── httpbin_anything.yaml
    │   ├── run_tasks_in_parallel.yaml
    │   ├── sum.yaml
    │   └── switch_case.yaml
    ├── functions
    │   └── com
    │       └── biz
    │           ├── call_another_wf.yaml
    │           ├── documents
    │           │   └── upload_file.yaml
    │           ├── helloworld.yaml
    │           ├── httpbin_anything.yaml
    │           ├── run_tasks_in_parallel.yaml
    │           ├── sub_wf.yaml
    │           ├── sum.js
    │           ├── sum_workflow.yaml
    │           └── switch_case.yaml
    └── mappings
        └── index.yaml
```
