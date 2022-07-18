---
sidebar_position: 3
title: Mappings
---

# Mappings

Mappings is a global object which will be available in your microservice. You can define anything in the mappings i.e. key/value pair map, array, etc. You can access these mappings inside your workflows at any time.

## Project structure
Mappings are present in `src/mappings` directory. The default format is yaml and you can store mappings in the nested directories also. The nested directories are also accessible in the same `mappings` object.
```
.
├── config
└── src
    └── mappings
        └── index.yaml
```

## Sample mappings
This is a sample mapping which is accessible in the workflows inside mappings object using `mappings.Gender`.
```
Gender:
  Male: M
  Female: F
  Others: O
```

You can use `mappings.Gender` in your workflows as given below:
```
  - id: httpbinCof_step1
    description: Hit http bin with some dummy data. It will send back same as response
    fn: com.gs.http
    args:
      datasource: httpbin
      params:
      data:
        personal_email_id: 'ala.eforwich@email.com'
        gender: <% mappings.Gender[inputs.body.Gender] %>
      config:
        url : /anything
        method: post
```