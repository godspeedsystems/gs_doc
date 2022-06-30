---
sidebar_position: 1
title: About Godspeed
---

# GodSpeed – A Microservice platform

**This document is intended for stakeholders, tech leaders, architects & developers. It will provide high level goals, tenets, design principles, components & features of the platform for the intended audience.
**

## 1. Introduction

**Godspeed is aimed at empowering teams to go to market with high velocity, scalability, quality and performance.
** We want development (and hence also QA) teams to bypass all the repeatable and reusable work involved in building modern distributed backends with domain driven design, multi-tenancy, microservices and serverless functions. We want the developers to be able to speedily configure system and microservice templates, and start to implement the actual business specific requirements, logic and User Interfaces as soon as possible.

For the same we have developed a microservice framework which provides sync/async communication, authorization, advanced CRUD with search, suggest & analytics, an english like DSL, file and media functionalities among more features. We also provide an admin dashboard to view the microservice data. We are also developing support for infra provisioning, CI/CD, configuring, messaging, observability & serverless functions. The development roadmap is mentioned at the end of this document.

All of this will be configuration/templating driven, plug & play, extensible by nature and cloud independent. There will be no vendor lock-in, either with Mindgrep or any vendor used. It will give developers choice and control over the kind of tools, DBs and cloud providers they wish to use, while following standards and unified interfaces.

This platform is being systematically developed by Mindgrep over the last years, across various projects by extracting reusable components. It is actively being customized/expanded/improved with new adaptations.

![snowburg](/img/snowburg.png)

---

## 2. Goals

**THE GOALS OF THE PLATFORM ARE AIMED TO MAKE BUSINESS AGILE BY EMPOWERING THE PRODUCT & DEVELOPMENT TEAMS TO DELIVER EXCELLENT SOLUTIONS VERY FAST.**

### Business and developer friendly

Godspeed provides low code implementation, English like GSL(Godspeed language), prebuilt powerful feature set, plumbing and templating. Thus, making life easier for business owners, product owners, developers, testers, dev ops engineers by empowering them to focus and accomplish their core work with the least amount of effort, time & cost.

### Fast product iterations & time to market

The platform provides fundamental, low level functionalities of “a modern distributed backend” out of the box in a developer friendly manner. Hence the scope of work is reduced to implementing only the configurations & business logic. This means lesser time to ship and operate new applications, upgrades, migrations & A/B trials.

### Smaller, micro teams

Teams can start shipping on the fly with little training. If at all, only a couple of members need to know the nitty gritty. Rest can just train to use the platform and deliver under their guidance.

### Simplified distributed architecture

The platform must be horizontally scalable, highly available, highly performant while incurring an optimized infra and development cost, on any cloud.

### Automation

Provisioning, CI/CD, configuring microservices/infra/dbs/connections/ETL. Prevent failure through shift left approach. Revert to the previous state on failure.

### Security

At network, application, data, documents & files

### Lesser learning curve

easy to learn unified API and declarative way of doing things, independent of tools, integrations, cloud

---

## 3. Tenets

### Don’t repeat yourself:

Solve complex and repeatable stuff with reusable API and tools, so that the developer needs to write only the data model, configurations, authorization policies & business logic.

### Clearly defined boundaries:

Developer does not need to do anything at the levels lower than the actual application’s business logic. All that is handled by the platform.

### Configure over code:

Most of the work should get done with simple configurations. The platform will wire the entire system together and generate the automation out of the box.

### Easy to extend & customize

Pluggable interfaces allow new integrations without changing code. For example, replacing datastores, APM/BPM tools, analytics engines, cache, email provider, file storage, CRM etc. should ideally require no change in the application code

### Standards driven:

Use standards in designing the system. For example, events using CouldEvents. Observability using OpenTelemetry.

### Fully automated:

Developing, Multi-tenant Architecture deployment, observability. All of this will be setup in a fully automated manner.

### Vendor and infrastructure agnostic

The entire system or parts of it should be able to migrate from one cloud or technology to another with least or no change in code, but only configurations.

---

## 4. Design principals

### Unified API Layer

Unified API interfaces in the microservice framework and SDK for functionalities including but not limited to CRUD, Notifications, Document Service, publishing/consuming messages allows stable API contracts, regardless of changes in the implementation or integration.

### Synchronous and Asynchronous Communication

A microservice can interact on both sync and async interfaces. A serverless function can be fired from multiple kinds of event sources. Events will have a common format (built over the CloudEvents protocol).

### Unified Observability For APM and BPM

We will follow [OpenTelemetry](https://opentelemetry.io/) (OTEL) SDKs to collect and observe telemetry data, including application performance monitoring. This will be integrable with a plethora of open source or commercial tools of choice that integrate with the standard OTEL protocol.

### Infra control plane with vendor independence

For both infra and application resources, [Crossplane](http://crossplane.io)(a Cloud Native Computing Foundation project) will be used with the Kubernetes cluster to support orchestrating, autoscaling, removing, updating any infrastructure or managed service, in a cloud federated and vendor independent way.

### Elasticity

System should scale up and down based on the load and configuration. Crossplane and OpenFAAS will help maintain a self scaling system based on simple settings, without any in depth knowledge of Kubernetes required.

### Gitops based ci/cd automation

GitOps works by using Git as a single source of truth for declarative infrastructure and application configuration. Upon a new commit to infra or microservice configuration, the intended setup should be up, tested and deployed in production in an automated way.

---

## 5. Architectural overview

The three main dimensions of an it solutioning: infra, system and business

![HLD](/img/hld.PNG)

### Infrastructure

Infrastructure is meant as the hardware (Server, On premise, IOT) and software (OS, libraries, dev tools, datastores, microservices framework, business logic) components required for setting up & operating the system, on top of which to run the business layer. System is meant as the unified coexistence of all the configured infra components with their relationships and communication mechanisms. The system will be configuration driven and include Gitops with CI/CD. Business layer consists of services and workflows on top of the underlying system layer.

### Platform components & usage: The what & how

There are seven essential elements of the platform through which it covers the three dimensions specified above.

- Infrastructure & system
- Microservices framework (First type of runtime)
- Serverless functions (Second type of runtime)
- Communication (sync: service mesh, async: message bus)
- Data at rest and data at flow
- Observability
- Security

---

## The Godspeed Runtime

In Godspeed the two kinds of runtimes (Microservice and/or serverless) can be created and run by including a Godspeed project which has functions exposed via the [instruction interface](./writing-business-logic/functions). `More details on this coming soon`

![Godspeed runtime](/img/platform_architecture-components_and_runtime.jpg)

> Open diagram in new window to view the image in high resolution

## Scenarios and use cases

### 1. Godspeed Integration with SpringBoot

Godspeed will provide a Java SDK to integrate with SpringBoot. Through this JDK, client will have option to use the common microservices provided by Godspeed.

Developer can write their core logic in language of their choice and framework. (Currently planned Java and Springboot)

![Java SDK](/img/Godspeed-Landscape.jpg)

[read more](/docs/springboot-integration/intro)

### 2. integrating Springboot into Godspeed System and infra Automation

As part of Our devops, we have automated our system & infra using gitops, kubernetes, argoCD, crossplane.
Our system infra automation can easily be integrated with existing or legacy apps.

For example:
video demo of [springboot integration](https://drive.google.com/drive/folders/1xTFd6N7YteLLg3Hehx8tTn6aDhxgFpWn)

<!-- export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      fontSize:'22px',
      padding: '5px',
      cursor: 'pointer',
    }}
   >
    {children}
  </span>
); -->
