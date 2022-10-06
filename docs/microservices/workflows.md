---
sidebar_position: 3
title: Workflows
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Workflows

Workflows is where the actual computation and flow orchestration happens. The framework supports a YAML based DSL to write workflows and tasks containing the business logic. These workflows can be attached to the events as their handlers, or called from within another workflow. 

> The framework exposes [CoffeeScript](https://coffeescript.org/)/JS based expressions [for evaluation of dynamic variables or transformation](./workflows/#use-of-coffeejs-for-scripting) of data from `inputs` of event, or `outputs` of previous tasks. 

> Default language for transformations (coffee/js) can be configured in [configuration](./setup/configuration/static-vars.md/#defaultyaml)

### 6.1 The structure of workflows

A workflow has the following attributes
- **summary** - the title
- **description** - more details
- **id** - Recommended for better logging visibility
- **tasks** - the tasks (workflows or sub-workflows) to be run in series (sequence, or one by one). The tasks invoke other workflows written in YAML or JS/TS. Other languages support is planned.

```yaml
summary: Hello world
description: Hello world example which invokes the com.gs.return workflow
id: hello_world # needed for better logging visibility
tasks: # tasks to be run in sequence (default is sequence)
  - id: step1 ## id of this task. Its output will be accessible 
  # to subsequent tasks at `outputs.step1_switch` location. Like in step2 below.
    fn: com.gs.return
    args: 'Hello World!' # com.gs.return takes its return value as `args`. Hence the args key.
```

### 6.2 The tasks within workflows
A workflow has one or more tasks associated with it.
A task has the following attributes
- **id** - Needed for better logging visibility. _It is compulsory for a task._ Importantly, this is also used to access the output of this task in subsequent tasks in the `outputs.{task_id}` path, as shown in [example below](#example-of-multiple-task-with-own-params).
- **summary** - the title
- **description** - more details
- **fn** - The handler to be run in this task. It can be one of the [framework functions](#inbuilt-functions), [control functions](#comgsseries) (like parallel, sequential, switch), [developer written functions](#developer-written-functions), or another workflow.
- **args** - Every handler `fn` has its own argument structure, which is kept in the `args` key. For example,
  ```yaml
    id: httpbin_step1
    fn: com.gs.http
    args:
      datasource: httpbin
      config:
        url : /v1/loan-application/<% inputs.params.lender_loan_application_id %>/agreement/esign/initiate
        method: post
        headers: <% inputs.headers %>
  ```
- **on_error** - What to do if this task fails?
  ```yaml
    on_error: #You can find sample usage of this in the examples below. Just search on_error in this page.
      continue: false # Whether the next task should be executed, in case this task fails. by default continue is true. 
      response: <%Coffee/JS expression%> | String # If specified, the output of `response` is returned as the output of this task. If not specified, the error output is the default output of the failed task.
      tasks: # If specified, the tasks are executed in series/sequence. The output of the last task in these tasks is the default output of the failed task.
        - id: transform_error
          fn: com.gs.transform
          args: <% outputs.httpbin_step1 %>

        - id: publish_error
          fn: com.gs.kafka
          args:
            datasource: kafka1
            data: 
              value: <% outputs.transform_error.message %>
            config:
              topic: publish-producer1
  ```
The only exception to this is [control functions](#comgsseries) like series, parallel, switch, which don't take the `args`, for the sake of more readability.
- **retry** - Retry logic helps to handle transient failures, internal server errors, and network errors with support for constant, exponential and random types. Currently applied only for `com.gs.http` workflow. 
  ```yaml
    retry:
      max_attempts: 5
      type: constant
      interval: PT15M
  ```

  ```yaml
    retry:
      max_attempts: 5
      type: exponential
      interval: PT15S
  ```

  ```yaml
    retry:
      max_attempts: 5
      type: random
      min_interval: PT5S
      max_interval: PT10S
  ```

#### Example of multiple task with arguments

```yaml
summary: Workflow with switch-case and transform task
id: example_switch_functionality_id
description: |
  Run two tasks in series. Both take different arguments. First one is switch case task. 
  Second is transform task which consumes the output of step1 and shapes the final output of this workflow. 
tasks: # tasks to be run in sequence (default is sequence)
  - id: step1_switch ## id of this switch task. Its output will be accessible 
    # to subsequent tasks at `outputs.step1_switch` location. Like in step2 below.
    fn: com.gs.switch # Switch workflow takes `value` and `cases` as arguments. The cases object specifies another task for every case. 
    value: <%inputs.body.condition%> # Evaluation of dynamic values happens via <% %>
    cases:
      FIRST:
        id: 1st
        fn: com.gs.return
        args: "'case - 1'"
      SECOND:
        id: 2nd
        fn: com.gs.return
        args: "'case - 2'"
      THIRD:
        id: 3rd
        fn: com.gs.return
        args: "'case - 3'"
    defaults:
      id: default
      fn: com.gs.return
      args: <%inputs.body.default_return_val%> #coffee/js script for dyanmic evaluation. Wrapped in <% %>. Same as that used elsewhere in workflows for dynamic calculations and variable substitutions. For ex. as used in com.gs.transform and com.gs.return 
  - id: step2
    fn: com.gs.transform
    args: | #coffee for dyanmic evaluation. Wrapped in <% %>
        <coffee% { 
          code: 200,
          data: outputs['1st']
        } %>    
```

### 6.3 Location and fully qualified name (id) of workflows and functions
All the workflows and functions are to be kept in the `src/functions` folder. Their directory tree path, followed by the file name becomes the workflow's fully qualified name or id, by which it can be referenced in the events or within other workflows.

> The JS function shown below will be available in workflows under the F.Q.N. `com.biz.custom_function`. Similarly, `com.biz.create_hdfc_account`, `com.biz.create_parallel` etc. are accessible as handlers from within other [workflow tasks](#the-tasks-within-workflows) or events.

  ![function_folder](/img/function_folder.jpeg)

### 6.4 Referencing a workflow within an event or another workflow
A workflow task references and invokes other workflows written in either YAML or JS/TS, via the `fn` key. In future, other languages will also be supported. 
An [event definition](./events#example-spec-for-http-event) references the handler yaml workflows by their fully qualified name, via the same `fn` key.

### 6.5 Use of Coffee/JS for scripting

The framework provides coffee/js for 

- Transformations in [`com.gs.transform`](#comgstransform) and [`com.gs.return`](#comgsreturn)
- Dynamic evaluation or workflow or task variables, event variables, datasource variables.

You will find its code in <% %> within various examples in this page below.

#### Define language at global level
Default language for transformations (coffee/js) is configured in [configuration](./setup/configuration/static-vars.md/#defaultyaml)

#### Define language at workflow level
Global configuration for language is overridden by defining specific language inside <coffee/js% %>. For example,
```
    - id: httpbinCof_step2
      fn: com.gs.transform
      args: |
          <coffee% if outputs.httpbinCof_step1.data.json.code == 200 then {
              code: 200,
              success: true,
              data: outputs.httpbinCof_step1.data.json,
              headers: outputs.httpbinCof_step1.data.headers
          } else {
              code: 500,
              success: false,
              message: 'error in httpbinCof_step1'
          } %>
```

```
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload documents
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        data: |
          <js% { 
            [inputs.body.entity_type + 'id']: inputs.body.entity_id, 
            _.omit(inputs.body, ['entity_type', 'entity_id'])} 
          %>
```

### 6.6 Inbuilt functions

The framework provides the following inbuilt functions 

#### 6.6.1 com.gs.http

Send HTTP events to other APIs in Axios compatible format.

**Example 1**
```yaml
  summary: agreement esign
  id: agreement_esign
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: agreement esign
      fn: com.gs.http
      params: # query params to be sent in the request
        id: 123
      args:
        datasource: httpbin
        config:
          url : /v1/loan-application/<% inputs.params.lender_loan_application_id %>/agreement/esign/initiate
          method: post

      retry: 
        max_attempts: 5
        type: constant
        interval: PT15M

      on_error:
        continue: true

    - id: step2
      fn: com.gs.transform
      args: |
          <%if outputs.step1.data.success then outputs.step1.data else {
              code: outputs.step1.code,
              success : false,
              data: {
                error_data: outputs.step1.data['error'],
                uuid: outputs.step1.data.uuid,
                status_code_error: outputs.step1.data.status_code_error,
                event: outputs.step1.data.event
              }
          }%> 
```
**Example 2**
```yaml
  summary: upload documents
  id: upload_documents
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload documents
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        data: |
          <js% { 
            [inputs.body.entity_type + 'id']: inputs.body.entity_id, 
            _.omit(inputs.body, ['entity_type', 'entity_id'])} 
          %>
        file_key: files
        files: <% inputs.files %>
        config:
          url : /v1/documents
          method: post

      retry:
        max_attempts: 5
        type: constant
        interval: PT15M

      on_error:
        continue: false
        response: <%'Some error happened in saving' + inputs.body.entity_type%>

    - id: step2
      fn: com.gs.transform
      args: <% delete outputs.step1.headers; outputs.step1 %>

```

#### 6.6.2 com.gs.kafka

Publish events on Kafka.

```yaml
  summary: Publishing incoming event data to a Kafka topic
  id: push_to_kafka
  tasks:
    - id: step1
      summary: Publish an event with input event's data, adding to_process = true
      fn: com.gs.kafka
      args: # similar to Axios format
        datasource: kafka1
        config:
          method: publish
          topic: kyc_initiate_recieved
          group_id: kyc_domain
        data: # Refer https://kafka.js.org/docs/producing#message-structure for information on data attributes.
          value: <% inputs %> # Your message content. Evaluation of dynamic values happens via <% %>. The type of scripting is coffee. 
          key: # Optional - Used for partitioning.
          partition: # Optional - Which partition to send the message to. 
          timestamp: # Optional - The timestamp of when the message was created. 
          headers: # Optional - Metadata to associate with your message. 
```
> Refer https://kafka.js.org/docs/producing#message-structure for information on data attributes.

#### 6.6.3 com.gs.datastore

The datastore function allows CRUD access to any supported [datastore](./datasources/datastore) in a format extending [Prisma API](http://prisma.io).

```yaml
summary: Create and read data
tasks:
  - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
    description: Create entity from REST input data (POST request)
    fn: com.gs.datastore
    args:
      datasource: mongo # Which ds to use.
      data: <% inputs.body + {extra_field: its_value} %> 
      config: 
        method: <% inputs.params.entity_type %>.create
  - id: step2 # the response of this will be accessible within the parent step key, under the step1 sub key
    description: test again
    fn: com.gs.datastore
    args:
      datasource: mongo # Adding this knows which ds/model we are talking about here.
      config: # Similar approach as Axios
        method: <% inputs.params.entity_type %>.findMany

```

#### 6.6.4 com.gs.elasticgraph

The elasticgraph function allows CRUD access to elasticsearch [datastore](./datasources/elasticgraph).

```yaml
summary: eg
tasks:
  - id: create_entity1
    description: create_entity1
    fn: com.gs.elasticgraph
    args:
      datasource: elasticgraph1
      data: 
        index: <% inputs.params.entity_type + 's' %>
        type: '_doc'
        body: <% inputs.body %>
      config:
        method: index
    on_error:
      continue: false
```

#### 6.6.5 com.gs.transform

This function allows to transform data from one format to another using coffee/js scripting.

```yaml
  summary: Parallel Multiplexing create loan for hdfc api calls
  tasks:
    - id: parallel
      fn: com.gs.parallel
      tasks:
        - id: 1st
          fn: com.gs.return
          args: |
            'parallel task1' 
        
        - id: 2nd
          fn: com.gs.return
          args: |
            'parallel task2'  
    - id: step2
      fn: com.gs.transform
      args:
        code: 200
        data: <% outputs.step1_switch.data %>
```

#### 6.6.6 com.gs.series
:::tip control flow function
Executes the tasks in series. 
:::

By default every top level workflow executes its task in series. But when invoking subworkflows if you need, you can explicitly use series workflow. Its syntax is same as parallel.
```yaml
  summary: Parallel Multiplexing create loan for hdfc api calls
  tasks:
    - id: parallel
      fn: com.gs.series
      tasks:
        - id: 1st
          fn: com.gs.return
          args: |
            'parallel task1' 
        
        - id: 2nd
          fn: com.gs.return
          args: |
            'parallel task2'  
    - id: step2
      fn: com.gs.transform
      args: |
        <coffee% { 
          code: 200,
          data: outputs['1st']
        } %>
```

#### 6.6.7 com.gs.parallel
:::tip control flow function
Executes the child tasks in parallel.
:::

Syntax is same as [com.gs.series](#comgsseries)

```yaml
  summary: Parallel Multiplexing create loan for hdfc api calls
  tasks:
    - id: parallel
      fn: com.gs.parallel
      tasks:
        - id: 1st
          fn: com.gs.return
          args: |
            'parallel task1' 
        
        - id: 2nd
          fn: com.gs.return
          args: |
            'parallel task2'  
        
        - id: 3rd
          fn: com.gs.return
          args: |
            'parallel task3'

    - id: step2
      fn: com.gs.transform
      args: |
        <coffee% { 
        code: 200,
        data: outputs['1st']
        } %>
```

#### 6.6.8 com.gs.switch
:::tip control flow function
The classic switch-case flow execution
:::
The args of switch-flow are `value` and `cases`. `value` takes a coffee/js expression to be evaluated during runtime. Every case has a task associated with it. The task can invoke another function or a workflow.
```yaml
  summary: create loan application for lender
  tasks:
      - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
        description: create account in the bank
        fn: com.gs.switch
        value: <%inputs.headers['lender']%>
        cases:
          httpbin:
            - id: 1st
              fn: com.biz.loan_application.httpbin_create_loan_application
              args: <%inputs%>

```

#### 6.6.9 com.gs.each_sequential

:::tip control flow function
The classic for-each flow execution
:::
The args is list of values in `value` field along with associated tasks. For each value in `value` tasks are executed sequentially. The final output each_sequential is the array of outputs of the last executed task of each iteration.

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1 %>
```

#### 6.6.10 com.gs.each_parallel

The args is list of values in `value` field along with associated tasks. For each value in `value` tasks are executed in parallel. The final output each_sequential is the array of outputs of the last executed task of each iteration.

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_parallel_step1
      description: for each
      fn: com.gs.each_parallel
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
    - id: each_parallel_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_parallel_step1 %>
```

#### 6.6.11 com.gs.return

:::tip return statement
The classic return statement
:::
It returns from the current function to the function caller. The function stops executing when the return statement is called.

```yaml
  summary: Multiplexing create loan for hdfc api calls
  id: helloworld
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: create account in the bank
      fn: com.gs.return
      args: |
        <coffee% 'Hello ' + inputs.query.name %>
```

#### 6.6.12 com.gs.log

It logs the intermediate inputs/outputs during the workflow execution in pino logging format. The args are `level` and `data`. `level` takes any value from the [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options) and `data` takes a coffee/js expression to be evaluated during runtime or anything (like string, number, etc.) which you want to get logged during the workflow execution.

```yaml
  summary: Summing x + y
  description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
  tasks:
    - id: sum_step1
      description: add two numbers
      fn: com.jfs.sum
      args:
        x: 1
        y: 2
    - id: sum_step2
      description: log the output in logs
      fn: com.gs.log
      args:
        level: info # log levels: info, debug, error, warn, fatal, silent, trace
        data: <% outputs.sum_step1 %>
    - id: sum_step3
      description: return the response
      fn: com.gs.transform
      args: <% outputs.sum_step1 %>
```


### 6.7 Developer written functions
Developer can write functions in JS/TS and [kept in src/functions folder](#location-and-fully-qualified-name-id-of-workflows-and-functions) at a path, which becomes its fully qualified name. Other languages support is planned. Once it is written, the function can be invoked from within any workflow or sub-workflow, with its fully qualified name and argument structure.

![function_folder](/img/function_folder.jpeg)

```yaml
  summary: Custom workflow invocation
  id: custom_function
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: custom_fn
      fn: com.biz.custom_function # Can be JS/TS workflow in src/com/xyz directory with filename being custom.{js|ts}
      args:
        arg1: 'hello world'
        arg2: 'hello again'
```

### 6.8 Headers defined at workflow level
Headers defined at workflow level are applicable for a single workflow only. You can find the [example usage here](workflows.md#the-tasks-within-workflows)

### 6.9 File Upload feature
The framework provides file upload feature to upload files. Here is the sample event and workflow spec to upload any file.

**Event Spec**
```yaml
/document.http.post:
  fn: com.biz.documents.upload_file
  id: '/sendDocuments'
  summary: upload document
  description: upload document on httpbin
  data: 
    schema:
      body: 
        required: false
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                fileName:
                  type: string
                  format: binary
```

**Workflow spec**
```yaml
  summary: upload file
  id: upload_file
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload docfileuments
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        file_key: files
        files: <% inputs.files %>
        config:
          url : /v1/documents
          method: post

      retry:
        max_attempts: 5
        type: constant
        interval: PT15M
```


