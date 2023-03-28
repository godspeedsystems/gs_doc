---
title: Learning Module - Level 1 [Beginner Track]
date: 2023-03-26T10:00
---

1. Install Godspeed if you have not.
The updated and maintained version is available at Godspeed [website](https://docs.godspeed.systems/docs/microservices/setup/getting-started).
<!--truncate-->

2. Start the service from a remote container
**Tip:** Learn about dev containers in [VS Code](https://code.visualstudio.com/docs/devcontainers/containers) and its [benefits](https://javascript.plainenglish.io/the-benefits-of-using-dev-containers-for-local-development-3bb8f78b800).
We would prefer you to go through the [getting started section](https://docs.godspeed.systems/docs/microservices/setup/getting-started) for this.

3. Once your service is in running status as mentioned in getting started section,
Open the Swagger doc at

```Ω
localhost:3000/api-docs
```
4. Hit the Hello world API

5. Export Swagger spec and import the same as Postman collection. From within
```
godspeed gen-api-docs
```

6. Now come back to the **project structure in VS Code**.
In order to study the basic parts of your project check [here](https://docs.godspeed.systems/docs/microservices/setup/scaffolding).

7. **Study about events (docs)**
    * What is [schema driven development](https://99designs.com/blog/engineering/schema-driven-development/#:~:text=Schema%2Ddriven%20development%20(SDD),two%20teams%3A%20Frontend%20and%20Backend.)?
    * Study how to define the schema of the event. FYI, Godspeed events use Swagger/JSON-schema specification.
    * Lets test the schema based validation of inputs by Godspeed. Go to Swagger and give a wrong input to your event. See how it rejects.
    * Now modify the hello world event schema in src/events/hello_world.yaml to add name in query section. Make it required: true.
    * Test the new schema through Swagger or Postman, by sending hit without name and then with a name.
    * The five kinds of inputs you receive from an HTTP event -> params (path), query, headers, body, files (in case of file upload)
    * The kind of inputs you receive from Kafka event - body (only)

 8. Studying workflows or functions in Godspeed world (docs)

      * Do read the documentation on the workflow structure and have some hands-on experience.
      * Open` src/functions/com/jfs/hello_world.yaml`
      * Study inline scripting within workflows (docs). Check config/default to see which is the primary language in your project, for inline scripting: js or coffee? For the time being keep it JS. Here’s an example of Coffee Script in `http//bin_anything_coffee.yaml.` You can study that to check the coffee script flavor of programming. It is shorthand for JS. Let's come back to inline scripting with JS for now.
     * In the first and only task of hello world workflow, we will replace static string Hello World with Hello `<your_name_from_query>`
     * Replace the string ‘Hello World’ with `<%”Hello” + inputs.query.name%>.`
 In the previous section you had allowed for `name` parameters in the query.
     * Go to Swagger and hit with your name. You should obtain the following response
`Hello<your_name>`
    * Now, create a JS file called` hello_world.js (or .ts)` in the `functions/com/biz directory.` Write code like

> module.exports = function helloWorld (text) {return text;}

Edit the` hello_world.yaml` to call `fn: com.biz.hello_world` and set argos:

> <%”hello” + inputs.query.name%>

  *  Go to Swagger Hello World example, and hit with your name. You should see the response` Hello <your_name>`

     * Now read about the plugins on the documentation. The purpose of plugins is that you can invoke the functions defined in files in that directory, from within the inline JS or CS scripts that you write in the YAML. Test out the example from the documentation.

     * Congratulations! You have now successfully tested events and workflows basics.

Before you move to our **next section**, do inspect the `src folder.`

Feel free to play around by modifying the schema and workflow to your curiosity with everything you have learned so far.

See You in Level 2 Track