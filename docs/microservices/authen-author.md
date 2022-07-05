---
sidebar_position: 6
title: Authentication & Authorization
---

## Authentication
The framework provides [JWT authentication](https://jwt.io/introduction) for securely transmitting information among microservices. 
The user agent should send the JWT in the Authorization header using the Bearer schema. The content of the header should look like the following:
```
Authorization: Bearer <token>
```

### JWT Configuration
JWT can be configured in [configuration](./setup/configuration/env-vars.md/#environment-variables). For example,
```
jwt:
  issuer: ms.sample.com
  audience: sample.com
  secretOrKey: sampleKey
```

### Generate JWT
You can generate JWT at [https://jwt.io/](https://jwt.io/) by providing the `iss`, `aud` and `secretOrKey` to verify signature. Use the encoded token as JWT authentication token. For example,
![JWT](/img/JWT.png)

In the above case, the Authorization header should look like:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtcy5zYW1wbGUuY29tIiwiYXVkIjoic2FtcGxlLmNvbSJ9._1fpM6VYq1rfKdTEqi8BcPTm8KIm4cNP8VhX0kQOEts
```
