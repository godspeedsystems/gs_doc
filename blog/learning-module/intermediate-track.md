---
title: Learning Module - Level 2 [Intermediate Track]
date: 2023-03-27T10:00
---

Before you start with this track, make sure you have completed the previous beginner track. It’s probably a good idea to revise all you have learnt so far.
<!--truncate-->

1. To set up database models and CRUD API.
    * Create a project with **PostgreSQL or MongoDB**.
    * Go to `src/datasources` and inspect the` .prisma file` created with the name of your selected database. You can change the name of that file according to your needs.
    * A sample model is already created for you.
    * Go to `prisma.io` and study about **Prisma ORM**, its model and API for more information .
    * When you run Godspeed build, it will create a prisma client for you and also set up the database.
    * If you already have a running instance of dev container, it should automatically detect the new file and do this job for you. (If not, just run the build once, as you did for the first time.)
    * With the database setup and configured model, generate the CRUD API. Run godspeed `gen-crud-api` from within the terminal of the dev container. (Check documentation of the CLI for more details on what CLI does.)
    * You do not need to run godspeed build, as long as your service is up and running. The auto watch plugin should automatically create events, workflows and deploy the api schema also.
    * Now go to the Swagger doc and see how the new endpoints are now up for your CRUD model. Also check the src folder with new events and new functions. Also check how the schema of events has been picked from the prisma model.
    * Feel free to change the API schema or function workflows of any endpoints and play around with your learnings so far.

  2. Study the inbuilt [functions](https://docs.godspeed.systems/docs/microservices/workflows) of Godspeed from the documentation page. Check the examples in the project and have hands-on experience.

  3. Now, study the

> config/default.yaml

thoroughly. You must read the documentation of config and mappings as mentioned in the Getting started/static variables section of documentation.

  4. Setup JWT authorization on your endpoints, as per the authentication [page](https://docs.godspeed.systems/docs/microservices/authen-author) in documentation.
Check how calls to your APIs are now failing with error 400.  Follow the instructions on that page to create a new JWT token and pass that token in the header from your Postman collection.
In order to import your Swagger to Postman, go to CLI and use the command to export the swagger documentation, which you later import to Postman.

  5. Change the log level of your service by going to `config/default.yaml` and check if the output log levels have changed.

  6. Now,study the [custom-environment-variables](https://docs.godspeed.systems/docs/microservices/setup/configuration/env-vars) and read about them in the documentation. Define a custom environment variable through your shell in the dev container. Then use that via config. `<var_name>` in hello world or somewhere else.

Before you move to our next section, do some hands-on. Feel free to play around by modifying the schema and workflow to your curiosity with everything you have learned so far.