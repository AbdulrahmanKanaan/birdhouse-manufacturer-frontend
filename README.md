# Birdhouse Manufacturer Frontend

this frontend is an implementation of this [figma design](https://www.figma.com/file/HzHDAngD6aOHxUmxxeNQzF/coding-test?type=design&node-id=0%3A1&mode=dev)

> This project is a frontend for this repo [backend](https://github.com/AbdulrahmanKanaan/birdhouse-manufacturer-backend)

## Table of contents

- [Birdhouse Manufacturer Frontend](#birdhouse-manufacturer-frontend)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Overview](#overview)
  - [Main Structure](#main-structure)
    - [Assets](#assets)
    - [Components](#components)
    - [Constants](#constants)
    - [Lib](#lib)
    - [Pages](#pages)
    - [Router](#router)
    - [Styles](#styles)
    - [Types](#types)
  - [Conclusion](#conclusion)

## Installation

Clone the repository

```shell
git clone git@github.com:AbdulrahmanKanaan/birdhouse-manufacturer-frontend.git
```

Install the dependencies:

```shell
cd birdhouse-manufacturer-frontend
npm install
```

Update the values of `.env` file as needed.

Start the server

```shell
npm run dev
```

## Overview

- the project is 3 different pages with some shared components
- we notice that all pages share the title bar at the top, shared sidebar and footer (except for the home page)

## Main Structure

This is my first VueJS project so I'm not that familiar with the VueJS community standards, so I'll go with my own structure.

The project will be feature oriented, meaning that each feature (in our case each page) will have its own components, store and main page component

This will be our folder structure, we'll go over them one by one

```shell
src
├── main.ts
├── App.vue
├── assets
├── components
├── constants
├── lib
├── pages
├── router
├── styles
└── types
```

### Assets

this folder is responsible for containing images, files or any other asset that is used by the project

in our case this folder is empty because the design doesn't contain any assets

### Components

This folder contains components that are reusable across all the pages

components in this folder are not related to one specific feature

there is also an icons folder inside this folder which contains the icons as SVG components

### Constants

this folder contains app constants, anything that should be constant across the whole application should be added here

```shell
src/constants/
├── AppRoutes.ts
├── Config.ts
└── index.ts
```

Q: Why?

A: I don't like the idea of having strings everywhere in my project, by using constants you avoid spelling mistakes and it'll be easier for maintaining

### Lib

this folder should contain libraries that are not related to the vue ecosystem, but they helps a lot with building our application

in our case we are using `Axios` which is a library that helps with handling **http requests**, by having this file we are preparing an axios instance that contains our API base url, and if we wanted to add authentication in the future, it's very simple because we only have one file to change and add an interceptor to the request

### Pages

this is the main and biggest folder across our application

it holds the main features of our applications, and it's the place where we divide our application into smaller modules

let's take a look on the tree of this folder

```shell
src/pages/
├── Home
│   └── HomePage.vue
├── HouseShow
│   ├── HouseShowPage.vue
│   ├── components
│   │   ├── GraphView.vue
│   │   ├── HistoryRow.vue
│   │   └── OverviewView.vue
│   └── store
│       └── index.ts
├── HousesList
│   ├── HousesListPage.vue
│   ├── components
│   │   └── BirdhouseCard.vue
│   └── store
│       └── index.ts
└── NotFound
    └── NotFoundPage.vue
```

as we can see this folder contains 4 main folders on its first level `Home`, `HouseShow`, `HousesList` and `NotFound`. each one of them represents a page or a feature

Also as we can see `Home` and `NotFound` pages are quite simple, but there is also `HouseShow` & `HousesList` which contain more folders inside, let's get a little bit deeper

In any frontend application any page or feature needs to be represented by those main things:

- several components
- some styles
- a place to handle data
- container for the previous items

In our case components and styles are handled inside `components` folder, those components are only used inside this page `e.g. BirdhouseCard is only used inside the houses list, we don't see this component on other pages in the design`

And data is handled inside stores which are created with the help of `Pinia`, we used a global store so each page can has only one data source, by doing this we avoid mixing the **UI** with the **Logic** and **Data**

The container is the component with `Page` suffix, this component is responsible for two main things:

- ordering the components to achieve the desired design
- handling some simple logic by calling store methods and passing data to components

By using this structure we can avoid spaghetti code, as each feature has all of its unique components and data sources without conflicting with other features

### Router

this folder is responsible for handling the routes, it simply prepare the router object, and map each url to its feature page, it also handles cases such as 404 page

### Styles

in this folder we will add global styles, fonts, colors, variables and some helping methods

```shell
src/styles/
├── colors.scss 
├── fonts.scss
├── global.scss
├── mixins.scss
└── variables.scss
```

- colors: here we add our main color pallet in addition to colors that are used more than one time in our application
- fonts: a place to add fonts from font repositories and define custom fonts if necessary
- global: it contains global styles that should be applied regardless of the component, (such as main font or main background color)
- mixins: in this file we add some shortcuts to some styles to avoid code repetition
- variables: this file contains main sizes and measurements that are used across the application

### Types

The types folder contains definitions for types used throughout the application. This includes interfaces, enums, and other custom types that are used to define the shape of data and ensure type safety. By defining types in a separate folder, it promotes code reusability and makes it easier to maintain and update the types as needed.

## Conclusion

We hope you find this application useful and informative. If you have any questions or feedback, please don't hesitate to contact me.
