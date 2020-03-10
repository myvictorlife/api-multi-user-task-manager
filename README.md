# EDirectInsure TODO List

![](https://res.cloudinary.com/doiz6iue3/image/upload/v1583865095/edirect_kqnwdj.svg) ![image](https://res.cloudinary.com/doiz6iue3/image/upload/v1583866739/nodejs_fl0jix.png)

# [Arquitetura](https://drive.google.com/file/d/1osDHl3E9FPtqR4rdQTK0afOEIAPKMg7u/view?usp=sharing)

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
1. bcryptjs
2. body-parser
3. cors
4. express
5. jsonwebtoken
6. mongoose
7. mongodb

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

    $ yarn start

## Simple build for production

    $ yarn build
