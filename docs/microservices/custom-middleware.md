---
sidebar_position: 3
title: Custom Middleware
---

# Custom Middleware

Godspeed provides usage of application level middleware functions. You can add any custom middleware functions which will have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

## 14.1 How to add custom middleware in Godspeed
> Step 1: Create an index.js/index.ts file in `src/middlewares` dierctory in your project.   

```yaml title="Project structure"
.
├── config
└── src
    └── middlewares
        └── index.ts
```

> Step 2: index.ts/index.js should be exporting array of middleware functions with signature (req, res, next)   

```ts title="index.ts"
import { uuid } from 'uuidv4';

function addUuid(req: any, res: any, next: any) {
    // Set data
    req.body.uuid = uuid();
    
    // Go to next middleware
    next();
}

function addTitle(req: any, res: any, next: any) {
    // Set data
    req.body.title = "Title from middleware/ts";
    
    // Go to next middleware
    next();
}

export default [addUuid, addTitle];
```

:::caution
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
:::
