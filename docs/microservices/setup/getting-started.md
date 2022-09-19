---
sidebar_position: 3
title: Getting started
---

Hereby is a step by step guide on running your first project. The setup is independent of the OS you are running it on.

### Glossary
**gs_service**: The framework code version. During this setup, you will be asked to select the version of gs_service.   
**Remote containers/Dev containers**: Refer [VSCode Remote containers](#https://code.visualstudio.com/docs/remote/containers) for more information.

### Pre-requisites

Please ensure you have the following in your machine
- NVM, with Node LTS installed (Currently 16+)
- Visual Studio Code LTS, with the `Remote Containers` plugin installed. 
- Docker-desktop 
- Git

:::tip

- Depending your setup, you may need to run the above command using administrator privileges
- On Windows machines, sometimes Docker-desktop doesn't start. Make sure you have WSL installed with Ubuntu 18.04, for Docker to work fine. 

:::

### Step1: Install the Godspeed CLI

```sh
npm install -g @mindgrep/godspeed
```

### Step 2: Create the project
```sh
godspeed create my_test_project
```
During the setup, you will be asked which datastores you need. Also whether you need Kafka. Say yes or no, depending on your requirements. 

> By default, `latest` version is selected for gs_service. You should select either `latest` or any highest semantic version available in the list.

### Step3: CD to your project
```sh
cd my_test_project

```

### Step4: Start Visual Studio from the project directory
```sh
code .

```

### Step 5: Open in Dev container
- Again click on the dev container tray icon. If this is your first time, click on `Open folder in Dev Container` . Else for every other time, click on `Re-open in Dev Container` 

### Step 6: Building the project
```sh
  godspeed build
```

### Step 7: Start the service for local development in watch mode

```sh
  godspeed dev
```
:::tip

With the dev container running, we have auto watch and auto build enabled when you make changes to your project files. You don't need to run build manually everytime you make changes. 

:::

### Time to start the development
If you have successfully reached here, then it is time to start the development of your project! 
