---
sidebar_position: 3
title: Plugins
---

# Plugins

Plugins are small js/ts functions to enhance the workflows capabilities. You can write any piece of code in the plugin and can access it inside your workflows at any time.

## 11.1 Project structure
Plugins are present in `src/plugins` directory. The default format is js/ts and you can store plugins in the nested directories also.
```
.
├── config
└── src
    └── plugins
        └── index.ts
```

## 11.2 Sample plugins
This is a sample plugins file which exports a plugin function named `randomInt`.
```
export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

You can use `randomInt` in your workflows as given below:
```
  - id: httpbinCof_step1
    description: Hit http bin with some dummy data. It will send back same as response
    fn: com.gs.http
    args:
      datasource: httpbin
      params:
      data:
        personal_email_id: 'ala.eforwich@email.com'
        id: <% 'UID-' + randomInt(1,9) %>
      config:
        url : /anything
        method: post
```