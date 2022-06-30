---
sidebar_position: 2
title: COMMON FAQs
---

<!-- # MINDGREP

#### CONSULTING AND GODSPEED TECH LANDSCAPE -->

Followings are collections of commonly asked questions with explanations. In future we will keep adding more questions/use cases/scenarios.

## Q1: Does a client need to use the entire Mindgrep provided technology landscape or can it use parts of it?

Our clients can use any part of the solutioning design and technology landscape recommended/provided by Mindgrep, whether open source or shared source tech by Mindgrep. Our clients are not tied to using all of the landscape. They can use whatever suits their needs best. Our job is to identify with them what works best for them. And as per their need, we help their team execute it in a flexible fashion.

![faq](/img/faq1.jpg)

---

## Q2: What if our clients wish to use only the open source stack along with Mindgrep consultation? And not use Mindgrep’s custom technology components?

At Mindgrep, our goal is to make our clients succeed, whatever it takes. We provide all-rounded consultation to startups and organizations, along with optional use of our in-house and open source technology solutions. We help our clients identify what they want, what tenets should they make their decisions based on, evaluate different options and execute step by step in a time-bound manner keeping the organization’s goals, capabilities and limitations in mind.
Every client is different and works with us in a unique relationship, using some part or other of our services and offerings.

As the main outcome of all our engagements, we wish to make our clients successful and growing in a completely self-serve and independent manner, without any forced dependence on us in any way possible. We also wish to develop our community base starting 2022, when we go into open/shared source and marketplace space. This will allow clients to connect with more developers and consultants trained on our platform over time, and hire directly as well.

---

## Q3: By when will the features mentioned for the infra platform and framework be available?

80% of the features are intended to be tested and production-ready by April. The detailed roadmap is being executed with our client needs and priorities. Having said this, the tech landscape by Mindgrep will be under active development for the foreseeable future, as we gain new clients and empower their solutions in production, discovering their requirements, extracting more reusable patterns & use cases, discovering better technologies & adding those improvements.

---

## Q4: What is the learning curve of Godspeed setup? The infra/system setup for devops team, and the microservice framework and API knowhow for the dev team?

Our entire effort is to be a low code, easy to learn platform without too many things to learn, while getting big jobs done. We believe (but wish you to verify yourself upon demo/use) that learning and working with our stack and way of implementation is simpler, easier and faster than popular industry known application frameworks, including popular implementations. This is based on our personal experience over the last 15 years which includes multiple technologies,languages, and our own implementation across a few live projects already. We have also conducted a survey with 30+ developers, tech leads and managers, who have seen POCs, demos, built their own apps or reviewed this framework and other components.

Given that our solution is low code, easily to implement and easy to learn, with detailed documentation as part of our offering, and training (as per the SLA) , it should be easy for a young intern or engineer to get started on delivering enterprise level CRUD applications to production, within a week or two of training or self serve learning. Further, with the DSL it will be easy to write custom code in English like instructions, which even a semi technical person can understand without much effort. For experienced developers, the low code API is a one time learning effort, and then for the rest of the work, they need to work with it independent of the underlying integrations, thus saving their time to learn new technologies and their APIs everytime.

---

## Q5: What is our development process and quality metrics?

We believe in agile development with an intent to gather customer feedback as soon as possible. In general our process is guided by the following steps

We are following Sprints of a 2 week cycle religiously followed by a retrospective meeting.
Scrum master, product owner roles are very important in driving this sprint.

Based on the GodSpeed platform road map aligned with client requirements, features are prioritized by the product owner in discussion with the client. PRD(product requirement documents) are prepared. And in subsequent Sprint’s planning, Epics are created which are broken down in Stories and task/subtask; and will be delivered at the end of Sprint.

Our velocity of Sprint and quality of delivery will be utmost important.

Documentation and TestCoverage will be integral part of Quality metrics.

Quality, efficiency of sprints will be tracked through Velocity, burndown charts(Sprint burndown and Epic & release burndown) and control charts.
Feature based branching is followed. Code vulnerability scan will be autonomously done in CI pipeline through Synk.

#### 1. Our developers start work on a task that only with the following information in the Github issue

```
-  Summary
    What is needed to be done and how does it fit in the entire delivery pipeline

-  Intended Outcome -
    What is expected to happen once this task is complete? This is where the acceptance criteria has to be listed. This is also how a developer will prove that the acceptance criteria is fulfilled once a pull request will open for the task.

-  How will it work -
    Once implemented, how does this change integrate with the rest of the system. This is where a developer must provide automated tests, documentation so that QA engineers can follow the guidelines to reproduce and validate the work in pull request.

-  Implementation consideration
    Any points to keep in mind when implementing this solution.
```

#### 2. Every pull request must contain the following:

- A documentation on how to test the pull request
- A set of automated tests that should run when the npm test (or a relevant test command) is executed on the command-line. These tests will be integrated as CI using GitHub Actions as well.
- Every comment on PR has to be addressed and resolved. We encourage developers to talk to the code reviewers in case they disagree or need more context behind the comments they received on their pull request.

Each pull request will be reviewed before pushing the code.

:::danger

In addition, each task has a lifecycle that goes through stages. These stages are set by the people who are involved in the creation and development of the feature.

:::

#### Story/Bug Life Cycle

:::tip

- **Todo** - Created by Product owner or ticket creator.
- **In Progress** - By Developer when they start the work
- **Code Review** - By Developer when they finished the work and request code review
- **QA** - By QA team when they are testing the feature
- **Done** - By person merging the pull request

:::

A process enforcer role will be taken by a team member to nforce the process on a daily basis.
In MindGrep, we also held the meeting internally to keep everyone aligned. The meeting was recorded and the same can be watched using the following link.

---

## Q6: How can we adopt new versions of used technology easily and fast? For example, the new Postgres release.

- From Mindgrep's side, the upgrades will be kept in sync with our client needs and priorities, as per the SLA. Security patches, fixes or feature inclusion will be part of the SLA itself.

- Irrespective of our SLAs, we also take an initiative to proactively support important integrations and upgrades from its side, and make it available to all its clientele and potential users. Whether or not personally requested by them, our clients have the choice to upgrade their solutioning through our automated upgrade process which includes Gitops based CI/CD.

- The system will have default support for free and open source software. But based on client requirements, we can provide integrations for paid versions as well based on SLA and priority. If an upgrade has a license cost, it shall be borne by the client should it decide to use it. Else the client can continue to use the free version which shall be supported as well.

- These changes can be done by the client team itself because it will have proper documentation, access and right to modify source for its internal uses, and there will be minimum 80% test coverage with test automation, and KT/support by Mindgrep (latter as per the SLA).

---

## Q7: How easy is it to add new technology in place of an existing one, or add something absolutely new and unique (not existing in the platform)?

- Since all the implementation is done against the open standards and unified interfaces, as long as the new technology is adhering to those standards drop-in replacement will be feasible.

- If the technology is introduced that does not adhere to the open standards, then some work will be needed to create adapters and avoid vendor lock-ins. But still, the integration will have to be compliant to the interfaces, for them to work, giving a uniformity of implementation and replacement. The modular architecture and modular design is plugin based, allowing for new integrations without much hassle.

- This can be done by the client itself, or by Mindgrep, shall a client request for it.

- **The Fixed components for us will be the open source Git, Kubernetes, Crossplane, Argo stack.**

Every other component recommended by us is easy to replace. One can also replace Crossplane and Argo workflows in their internal customization, but from the perspective of Mindgrep’s official tech implementation, we foresee them staying as core part for a long time to come, and for multiple good reasons.

- As mentioned above, any changes can be done by Mindgrep as per the SLA or by the client team itself because it will have a properly documented system with CI/CD automation, and KT by Mindgrep.

---

## Q8: With standards like Opentelemetry, or unified API, what if a tech provides some features not covered by the universal API. How to leverage that?

- By using JSON based APIs, it will be convenient to add and extend a technology feature to the API. In case, the support is lacking or yet to be implemented, developers will be able to execute native queries via the API itself. This way they will never be limited.

- For example, when accessing Postgres through the API, if an advanced query is not possible in the universal API, it can be executed via a “sql_query” which will contain the SQL instruction, or “native_query” with DB specific DSL. Some of the examples are listed below

```jsx title="//SQL query to Postgres"
    godspeed.db.find({
	    _sql_query: “select * from….”,
	    source: “postgres” //Can be any configured database and supporting SQL
    })
```

```jsx title="//Mongodb query"
    godspeed.db.findOrCreate({
	    _type: “article”, //Godspeed uses the terminology _type for entity type. It translates to collection/index/table names automatically in its pluralized form.
	    _native_query : { tags: ["technology", "low-code"] },
	    source: “mongodb”
    })
```

---

## Q9: Which databases are currently supported? What is the roadmap for future support?

We currently support Elasticsearch datastore. We are in the process of adding Mongodb in February. Post that we plan to integrate Postgres.

---

## Q10: Does the API handle DB transactions?

As we integrate transactional databases (Mongodb, Postgres) we will support the following (optional) scenarios.

    - Single row or batch transactions spanning multiple entities/rows (all create/delete/update ops will be transactions only)

    - Read-modify-write implementations

    - Optimistic concurrency control for highly concurrent write operations

Using these control mechanisms, developers can create transactions. All the create, update and delete operations will be executed as transactions. For datasource like Elasticsearch which does not support transactions spanning multiple documents, a single write will be atomic and compliant with an optimistic concurrency control mechanism.

It is possible to execute a query with multiple unrelated transactions, where some of them are compulsory and some are optional.

Distributed transactions across multiple microservices will be supported via Saga pattern where every microservice will have to also implement a rollback mechanism. The orchestrator will ensure that either all or none of the commits are executed.

[TODO: add some API level examples]

---

## Q11: How can apps be decoupled or loosely coupled with DBs?

This decoupling is possible because of :

- Data model configuration & schema migration process is universal.
  For an example setup with a primary DB (ex. postgres) as SST and real time reads; and secondary DB of Elasticsearch for autosuggest, text search and near real time but fast reads/analytics, a sample model definition of a person table’s name field is below.

```md
[name] //Common settings at field level
type = 'String'
nullable = false
unique = true
[name.postgres] //Override on database level
sortable = false //means don’t need to create index because sort queries are not designed to be run on primary DB, and we should save DB’s computation and disk space
[name.elasticsearch] //Override for secondary DB
cdcSync = true //Means keep syncing this field from primary DB whenever it changes
sortable = true //Creates mapping in Elasticsearch for indexing this field for sorting use case
autoSuggestion = true //Creates mapping in Elasticsearch for indexing this field for autosuggestion use case
```

- Universal API giving abstractions over the native interfaces of the DBs. For example,

```

godspeed.find({
        query: { //Will translate to native DB query based on the DB on which this is to run
            “match”: {“genres.name”: “comedy”},
	          “exists”: “posterPath”,
	           “anyOneOf”: [
		            {“match_phrase”: {“actors.name”: “Robin Williams”}},
                    {“match_phrase”: {“director.name”: “Robin Williams”}},
	            ]
        },

        fetchRealTime: true, //if true, will fetch real time data from the primary transactional DB (SST). The default option value can be configured at the app level.
        useCaching: false,  //if fetchRealTimeData is true, this option will be ignored. If false, data will be fetched from cache based on TTL setting. And the latest query response will be lazily loaded into the cache for the next time.
        source: ‘elasticsearch’, //if fetchRealTimeData is false or not specified, the source field can tell the data source from which the query should fetch data from. This is also an optional field, to be specified at the query definition time. The global default settings can define the global strategy (Ex. use cache or don’t use query caching  by default)

        returnData:  `//The data to be fetched as part of the response. Will do joins irrespective of the database
            id,
            title,
            posterPath,
            genres {
                name
            },
            director {
                bio,
                name
            },
            actors {
                bio,
                name
            }
        `,
        size: 10,
        offset: 0,
}

```

This allows clients to do automated shifts between DBs or migrate a DB as per new schema, through Gitops, with none or minimum code changes. It also includes a migration process supporting multiple DBs, without need to write any code or manual migrations (for most cases). For any migration scenario needing manual intervention, the migration scripts will be generated through CLI command and provided to the developer/devops team for customization and manual execution.

---

## Q12: When using Godspeed service alongside SpringBoot, what will be the impact on performance with another hop, versus direct connection with DB from Spring Boot?

The answer is at two levels: A. App performance and B. Developer performance

#### On APP performance

Whichever approach we take, the internal implementation (queries and db/model configuration) makes all the difference. Performance of an API endpoint which includes the service PLUS DB working together, depends on many factors handled by the ORM plus the developer. For example, DB connection pooling and utilization, transaction handling, batching of independent queries, optimization of indexes and queries, denormalization (for cross table queries and aggregations), memoization/caching (for faster read and solving N+1 queries problem), CQRS setup between multiple DBs.

Godspeed includes algorithms and best performance practices like the ones mentioned above. It has been profiled for performance against the Mongoose/Mongodb setup, and known to perform much better. A sample benchmarking can be done with SpringBoot application on request.

![faq](/img/faq2.png)

#### On developer performance, architectural standpoint for decoupling

First of all, the hop is completely optional. There are a few benefits of using this hop, however, including

- Become decoupled with the choice of database provider, so that if a DB changes ,the app code does not change.

- Low code configuration of CRUD service (saves effort of development, QA & maintenance)

- Data federation from multiple DBs. One can execute multiple queries to configured sources within a single query. Doing this in another framework is not so straightforward. For example,

```json
godspeed.federate({
    “Query1ResponseKey”: { //The response of the query will come under this key in response from the service
        "instruction": “findAll”, //This instruction has been declared on the server side
        "params”: {
            query: {
                “match”: {“genres.name”: “comedy”},
                “exists”: “posterPath”,
                “anyOneOf”: [
                    {“match_phrase”: {“actors.name”: “Robin Williams”}},
                    {“match_phrase”: {“director.name”: “Robin Williams”}},
                ]
            }
        }
    },

    “Query2ResponseKey”: {
        “instruction”: “saveBorrowersProfile”,
        “ignoreError”: true,
        "retry": {
            "count": 3,
            "timeout": 200 //milliseconds
        },
        "params”: {
            “name”: 1,
            “pan”: “asdfadsf”
        }
    }
})
```

---

## Q13: How to achieve multi-tenancy in DBs, for a single application?

It shall be done in two ways.

- By having separate DBs for every tenant. This will be costly but will be PCI compliant. It will also provide data isolation if needed for each tenant.

- By having a tenant_id in every row/document of every table/collection/index in the database.This will be cost effective and easy to maintain but the data across multiple tenants will be in a single database.

---

## Q14: How to move into the landscape (infra/system platform and microservice framework)?

Mindgrep’s goal is to empower the client to achieve its business goals at a fast pace, with flexibility and adaptability. Mindgrep is already doing and will continue to offer consulting to set the right processes and technology in place. This is agnostic of the fact that whether Mindgrep made technology is used at all or not. Our goal is to solve the client problem in the best possible way, with mutual discussion and agreement.

But should the client find some of our proposed recommendations, processes and tech worthy of adoption it can selectively pick the processes and technologies recommended by us. This includes open source tech and also Mindgrep’s developed technology.

Moving into the platform will be done in multiple stages. The Godspeed platform will be adopted initially for building the lending platform (Stably, by March ‘22). The delivery would include infra/system automation and out of the box microservices such as those for database, search/suggest, notifications and documents. The deployment will leverage Kubernetes and GitOps(for unified Git deployment, application management and state monitoring). Also there will be docker images with manuals for the client developers to quickly set up their dev environment. Along with detailed self serve manuals, this would enable fast development and addition of new microservices to the cluster. This can be an incremental process. Mindgrep would provide extensive developer documentation, specifications for the engineers, product managers and devops teams guiding them how to introduce a new service or a change within an existing deployment and in a specific environment. Additionally, we will also provide the template YAML files specific to the infrastructure providers (AWS, GCP, Azure) to add resource details. As long as the newly added custom microservice is tested and dockerized, with a very little configuration the service can be deployed to the cluster seamlessly.

---

## Q15: How to move out of the Godspeed landscape? Can we have a two door exit? I.e. Can we move out of technology and data both?

It is possible to opt out of the Godspeed specific landscape in which case all the microservices specific to the client can be deployed using some other technology stack. The DBs can be self managed. The modules like document, search/suggest, data federator, client’s custom microservice etc. built using the microservice framework, will need to be implemented or replaced by the client.

The data will anyway be hosted on the client’s premise/cloud or its vendor’s cloud. The control of the data is subject to the client’s agreement with their respective cloud vendor, whose hosted database services are being used. But if the client uses self managed DBs, then they are fully in control of their data. This has got nothing to do with Godspeed. The platform comes with no lock-in of any kind and will never do so, as part of our philosophy

---

## Q16: Can we replace a part of the platform? If yes, how easy? For example, Another microservice framework, a new kind of database, or components at the infra and systems layer?

- #### Using a different microservice platform:

  Yes, you can add one or more microservices declaratively in the Kubernetes configuration files. If you choose to include, say, a vanilla SpringBoot microservice within the platform. Our infrastructure uses GitOps where any changes pulled by ArgoCD will be automatically deployed to the cluster.

- #### Using a different database:

  Currently, we have out of the box support for ElasticSearch and we are working to provide the connector for MongoDB & PostgreSQL. In the event you plan to migrate to a new database not currently supported by Mindgrep, you can do the integration on your own since you will have the source code of all the open source and also Mindgrep’s shared source projects. Plus, you can also use Mindgrep’s consultation and development services for the same.

- #### Modifying infrastructure or systems layer:
  It is completely feasible to make changes on the infrastructure layer such as replacing the service mesh implementation from Linkerd to Istio, or integrating a different logging provider, or hosting the entire platform on a different infrastructure provider such as GCP or Azure.

---

## Q17: How will we prevent unified API from limiting or choking us?

We will facilitate developers to access full functionality of any database or tool without being limited by the universal API. They shall be able to execute native database queries directly or via the API itself. More detail with a real example has been provided [in Q3 above (click here)](https://docs.google.com/document/d/1j0FLe7RFVBcr7_FN_PyFvb0FMidmvolP1cy0k3z9bo0/edit#heading=h.51dm4qsfj6u2).

---

## Q18: Is there support for different microservice frameworks like SpringBoot?

Yes, the infra/system automation landscape will support other microservices frameworks including SpringBoot and serverless workflows written in any languages, out of the box. It is not tied down to any technology or framework. You can integrate vanilla and completely independently created microservices into the system/infra automation. The infra and system automation is completely independent of any technology, allowing clients to plug in any platform with flexibility and agility.

In case you wish to use Mindgrep provided SDKs in other microservice frameworks (completely optional), our SDKs will enable many features such as Database CRUD, Notifications, and Working with Documents for developers. Behind the scenes, for some features the SDK will make API calls to Godspeed microservice modules (ex. search/suggest, CRUD, notifications). Additionally, SDK will also provide methods for event publishing and consumption in [CloudEvents](https://cloudevents.io/) format. It’s API will also support Observability in org wide standard format, on top of the [OpenTelemetry](https://opentelemetry.io/) format. For example, how to add resource and execution context in every logging, tracing or monitoring call, for correlation, in a standard way across the organization, with no or least development effort?

Having said this, like we said earlier, the choice to use any of our recommendations (open source or Mindgrep tech) will be made upon due deliberation upon client needs, and best possible solution for processes and technology, organization wide.

---

## Q19: How to upgrade technologies fast?

The Godspeed version will be compatible with the versions of ElasticSearch, MongoDB, and other software dependencies. Based on the SLA terms, there will be updates/releases planned. All the updates will contain the most recent versions of the underlying libraries. If however, for a particular software or a dependency, you choose an upgraded version, you may contact us to validate the compatibility of that software with the Godspeed version.

---

## Q20: How to replace technologies fast?

Please refer to the [FAQs](https://docs.google.com/document/d/1j0FLe7RFVBcr7_FN_PyFvb0FMidmvolP1cy0k3z9bo0/edit#heading=h.6ylszdidn6x6)

---

## Q21. Is there support for transactional databases such as PostgreSQL?

Currently, the work is under progress to support MongoDB which is a transactional database, as to be used by the lending platform team. PostgreSQL, along with MySQL, MSSQL, MariaDB is also planned by April.

---

## Q22. What is the interface for the API?

At the foundation of the framework, we have JSON based APIs which are exposed through the REST and Cloud events based interface. The REST endpoints for CRUD are auto generated based on the model declared by the developers. When creating new endpoints the developer will need to define the query validation, business logic and the framework takes care of returning the response with telemetry, from the HTTP/Socket/Message Bus based interface. These APIs can be consumed by other microservices via language specific SDKs or REST interfaces. We are fully compliant with Graphql in its tenets like mutation, query, subscription, data federation. Given that we are Graphql compliant, in the future, there will be GraphQL API support added too.

---

## Q23. Why Rest first approach ?Why not Graphql first approach?

Every existing Graphql server in the industry supports REST/JSON interface, custom DSL and along with it, a Graphql interface (Ex. DGraph, Hasura, Apollo, Postgraphile). We are also going the same route by first being REST/JSON based, custom DSL and then adding Graphql in future as per the client’s real needs. This is for reasons of simplicity, ease and low code of development, greater flexibility and lesser learning curve.

Having said that, we would like to add that the Graphql standard specification does not specify a few critical things, like “where clause”, “aggregations”, “filters in joins”, “specifying relationships in model”, search/suggest queries, custom annotations, how to migrate, code first or schema first approach, etc. Every vendor has its own flavour of Graphql implementation/API, and there is no compatibility or out-of-the-box interoperability between implementations from different vendors. If the client also implements Graphql by any vendor, including Mindgrep, it will be still having its own unique flavor of implementation, and the concept of data federation will not work for consumers of the APi, just out of the box, as it appears to be so in theory of Graphql data federation. It will need developers to write custom resolvers to federate request/response from multiple Graphql services.

In short Graphql standard lacks standard and unified implementation across industry. Further, we believe based on our survey that the Graphql ecosystem is complex and difficult to learn and extend for the uninitiated, and most developers even today do not know Grapqhl. Those who know find it complex. It lacks bringing agility for a typical developer team who is more comfortable with REST/JSON. It already took banks years to move from XML to JSON. Expecting third party consumers to consume Graphql is another big ask, a few years ahead of time.

But at the same time, it brings some good concepts to include in the development methodology like the concept of giving power to the frontend team to decide what data they want in response, and to get data from multiple sources in one go. It specifies creating subscriptions for data updates in microservice architecture. We are fully Graphql compliant. We are including the features of Graphql in our design. But the foundation is in REST/JSON, then later, adding Graphql syntax is a syntactic sugar merely. And must only be done if really felt needed in practical use case upon experience.

---

## Q24. Can we run a benchmark on AWS and share the results with the client?

Yes we can, based on priority. We can also run benchmarks against a sample CRUD service developed and maintained by the client internally, using SpringBoot.

---

## Q25. How are we doing testing given there is quite a bit of custom DSL in the framework. How do we ensure the correctness?

The use of DSL is completely optional. It was developed to help non technical or semi technical folks like product owners to configure app behavior, rule engines, policies etc., in an English-like way - easy and fast. Also for developers to write code in shorthand and easy to read syntax, in cases where programming language will add a lot of boilerplate and complexity in development and also code readability. Its job is to make development easier, better and faster.

Our clients may choose to simply avoid using the DSL. It can use only the JSON API which is the foundation of the DSL as well. The DSL basically gets compiled to the JSON instruction tree and executed using the JSON API in SDK only.

The testing of the microservice framework in Nodejs will be done through Chai and Mocha. The DSL will have independent test cases. We aim to attain 80% test coverage as we ship to the client. We are following the shift left approach for development of all core framework features. The Godspeed microservices framework will be tested before it is packaged and released.

---

## Q26. How will the upgrades and migrations be done to the platform?

The GodSpeed platform will follow a semantic release process using [semantic version (semver)](https://semver.org/). This means that we will maintain backward compatibility as much as possible with the previous versions, hence reducing the friction and risks to upgrade to newer Godspeed platform versions. For every upgrade, we will proactively work with the client to provide a testable framework so that the before and after state of the system can be validated quickly and automatically.

---

## Q27. How CRUD APIs will support the paid as well as the non paid features of databases such as MongoDB. For example: MongoDB free vs paid versions will support different features.

Godspeed will be compliant with the free versions of databases by default. But based on client requirements, we can integrate paid features on a priority basis. Or clients can do it themselves since they have access to source code, documentation and predefined interfaces to implement.

---

## Q28. How to ship new models easily?

Migrations will automatically be handled through GitOps, out-of-the-box. The commit (via governance) where a model configuration is changed, is pushed to the platform's staging environment. After migrations are thoroughly tested in staging via integration tests written by application developers or manual testing, those changes can be applied intelligently into production without downtime. All testing, migrations and deployment will be performed as part of the CI/CD pipelines from dev to staging to production.
