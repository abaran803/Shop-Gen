# SHOP-GEN: Online Shop Generator

A full-stack web-app, that is helpful for small businesses to show their online existence by creating their online shop very easily. A unique link is provided to the shop owner that can be used by their customers to do the online shopping from their shop.

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Features

- Generate Shop with Unique Key
- Product and Category Section
- Mobile Responsive
- JSON/UI for new Shop


## Demo

https://abaran803.github.io/Shop-Gen/


## Run Locally

Fork the project from Original Repository

Clone the project

```bash
  git clone https://github.com/abaran803/Shop-Gen
```

Go to the project directory

```bash
  cd Shop-Gen
```

Install dependencies

```bash
  npm install
```

If above not worked, try this

```bash
  npm install --force
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BACKEND_URL`

`REACT_APP_USER_DEMO_ID`

`REACT_APP_USER_DEMO_PWD`

Email me for these details at abaran803@gmail.com


## Deployment

To deploy this project run

* Update package.json file
* Sample package.json file

```bash
{
    "homepage": "http://[your-username].github.io/Shop-Gen",
    "name": "shop-gen",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        //  All dependencies here
    },
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
        "react-app",
        "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    },
    "devDependencies": {
        "gh-pages": "^3.2.3",
        "node-fetch": "^3.2.0"
    }
}

```

```bash
  // Run this command only once
  npm run predeploy
```

```bash
  npm run deploy
```


## Tech Stack

**Client:** React, Router, Material UI

**Server:** Node, Express


## Upcoming Features

- Dashboard to manage shop products
- Mail on creating project with link and Shop ID
- Proper image size on cards
- Original image upload, intead of just a link
## Related

Here are backend of this project

[E-Commerce Backend](https://github.com/abaran803/E-Commerce-Backend)


## 🚀 About Me
I'm a final year student and a full stack developer, love to work on JavaScript projects.

