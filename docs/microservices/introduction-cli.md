---
sidebar_position: 3
title: Introduction to Godspeed CLI
---

# Godspeed CLI
The CLI is the primary way to interact with your Godspeed project from the command line. It provides a bunch of useful functionalities during the project development lifecycle.

## Functionality
### Outside the dev container
- Creating a new project environment with dev container setup, which includes the folder structure, all the databases, message bus, cache, etc.
- Open up an existing project in the dev container and prepare the dev container.
- List the versions of gs_service.
- Change the version of gs_service.
- Add/update a container in the dev environment, based on updated settings.

### Inside the dev container
- All Prisma commands including DB push, pull or migration.
- OAS 3 documentation file generation.
- Test suite/Postman collection generation.
- Running test suite.

## Installation
```sh
npm install -g @mindgrep/godspeed
```

Once Godspeed CLI is installed, the `godspeed` command can be called from command line. When called without arguments, it displays its help and command usage.

```
$ godspeed
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed [options] [command]

Options:
  -v, --version                   output the version number
  -h, --help                      display help for command

Commands:
  create [options] <projectName>
  versions                        List all the available versions of gs_service
  prepare                         prepare the containers, before launch or after cleaning the containers
  version <version>
  help [command]                  display help for command
```

## Options

### --version (-v)
The --version option outputs information about your current godspeed version.

```
$ godspeed -v
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
0.0.26
```

### --help (-h)
The --help option displays help and command usage.

```
$ godspeed
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed [options] [command]

Options:
  -v, --version                   output the version number
  -h, --help                      display help for command

Commands:
  create [options] <projectName>
  versions                        List all the available versions of gs_service
  prepare                         prepare the containers, before launch or after cleaning the containers
  version <version>
  help [command]                  display help for command
```

## Commands: Outside the dev container

### create
The create command creates project structure for any microservice. When called without arguments, it creates project structure with examples.
```
$ godspeed create my_service
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
projectDir:  /home/gurjot/cli-test/my_service projectTemplateDir undefined
project created
Do you need mongodb? [y/n] [default: n] n
Do you need postgresdb? [y/n] [default: n] y
Please enter name of the postgres database [default: test] 
Do you need kafka? [y/n] [default: n] n
Do you need elastisearch? [y/n] [default: n] n
Please enter host port on which you want to run your service [default: 3000] 3100
Fetching release version information...
Please select release version of gs_service from the available list:
latest
1.0.0
1.0.1
1.0.10
1.0.11
1.0.12
1.0.13
1.0.2
1.0.3
1.0.4
1.0.5
1.0.6
1.0.7
1.0.8
1.0.9
base
dev
v1.0.13
Enter your version [default: latest] 1.0.13
Selected version 1.0.13
. . . . . . . . 
```

#### Options
```
$ godspeed help create
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed create [options] <projectName>

Options:
  -n, --noexamples                      create blank project without examples
  -d, --directory <existing_project_directory>  existing project template dir
  -h, --help                            display help for command
```

### prepare
The prepare command prepares the containers, before launch or after cleaning the containers. If you want to launch an existing project (i.e. copied from local/cloned from repo) instead of creating a new one, then execute `prepare` command before launching the project. Execute the command from inside the project root directory.

> Please note that `prepare containers` only needs to be done once if you are going to open a project for the first time on your machine. 

```
$ godspeed prepare
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Generating prisma modules
Starting test1_devcontainer_postgres_1 ... 
Starting test1_devcontainer_postgres_1 ... done
Creating test1_devcontainer_node_run   ... 
Creating test1_devcontainer_node_run   ... done
Environment variables loaded from .env
. . . . . . . . . .
```

### versions
The versions command lists all the versions available of gs_service.
```
$ godspeed versions
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
latest
1.0.0
1.0.1
1.0.10
1.0.11
1.0.12
1.0.13
1.0.2
1.0.3
1.0.4
1.0.5
1.0.6
1.0.7
1.0.8
1.0.9
base
dev
v1.0.13
```

### version
The version command helps to change the version of gs_service for any microservice. Execute the command from inside the project root directory.
```
$ godspeed version 1.0.13
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Generating prisma modules
Starting test1_devcontainer_postgres_1 ... 
Starting test1_devcontainer_postgres_1 ... done
Creating test1_devcontainer_node_run   ... 
Creating test1_devcontainer_node_run   ... done
Environment variables loaded from .env
. . . . . . . . . .
```

### update
The update command reloads the containers with updated project settings. Details are coming soon.

### help
The help command displays help and usage for any command.
```
$ godspeed help create
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed create [options] <projectName>

Options:
  -n, --noexamples                      create blank project without examples
  -d, --directory <projectTemplateDir>  local project template dir
  -h, --help                            display help for command
```

## Commands: Inside the dev container

### prisma
You can run all the prisma commands in your project root directory inside the dev container. This command is useful for db migration and introspection. [Read more here](https://www.prisma.io/docs/concepts/components/prisma-cli). 
```
$ godspeed prisma <prisma command with args>
```

### gen-apiDocs
You can get OAS 3 documentation generated automatically by executing this command in your project root directory inside the dev container.
```
$ godspeed gen-apiDocs
```

### gen-testSuite
You can get test suite/postman collection generated automatically by executing this command in your project root directory inside the dev container. Now, you can import the collection in postman directly.
```
$ godspeed gen-testSuite
```

### test
You can run the test suite generated in above command from the following two ways:
1. Postman: Import the collection in postman and run the test suite.
2. CLI: You can use below command to run the test suite from CLI.

> Please make sure your service is up and running before running the test suite.

```
$ godspeed test
```

### help
The help command displays help and usage for any command. [Click here to know more](#help)
