# EDirectInsure TODO List

![](https://res.cloudinary.com/doiz6iue3/image/upload/v1583865095/edirect_kqnwdj.svg) ![image](https://res.cloudinary.com/doiz6iue3/image/upload/v1583866739/nodejs_fl0jix.png)

# [Architecture](https://drive.google.com/file/d/1osDHl3E9FPtqR4rdQTK0afOEIAPKMg7u/view?usp=sharing)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### This project was generated with Angular CLI version 9.0.2.
The application should include the following features:
1. User Registration
2. User Authentication (login/logout)
3. Visualize, add, edit and remove user projects
4. Visualize, add, edit and remove tasks associated with the projects

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

# Plugins
1. bcryptjs - Optimized bcrypt in JavaScript with zero dependencies.
2. body-parser -  Node.js body parsing middleware.
3. cors - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
4. express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
5. jsonwebtoken - JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object.
6. mongoose - Elegant MongoDB object modeling for Node.js
7. mongodb - Document database with the scalability and flexibility that you want with the querying and indexing that you need.

## [Insomnia REST Client](https://insomnia.rest/)
Insomnia is a cross-platform GraphQL and REST client, available for Mac, Windows, and Linux.

      $ import ./insomnia-rest-client to Insomnia Client

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/myvictorlife/api-multi-user-task-manager.git
    $ cd api-multi-user-task-manager
    $ yarn install 

## Running the project

    $ yarn start src/index.js
    $ node src/index.js

## Simple build for production

    $ yarn build
