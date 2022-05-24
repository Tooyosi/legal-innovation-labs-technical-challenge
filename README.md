# Blog Spot

Blog Spot is a Blog application built with React and Node js which allows users Create, Read, Edit and Delete Blog posts.

A live version of the app can be viewed [here](https://legal-innovation-labs-test.herokuapp.com)

Api Documentation can be viewed [here](https://legal-innovation-labs-test.herokuapp.com/api-docs/)

![Ui Screenshot](https://github.com/Tooyosi/legal-innovation-labs-technical-challenge/blob/main/screenshot.png?raw=true)

![Api Screenshot](https://github.com/Tooyosi/legal-innovation-labs-technical-challenge/blob/main/api-screenshot.png?raw=true)

## Requirements
node js version 14.9

npm version 6.14.8


## Setup

Rename env-example file on both UI and API folders to .env and add the appropriate values.

UI

```bash
NODE_ENV=production
```

API

```bash
IP=YOUR_LOCAL_IP_ADDRESS
PORT=YOUR_LOCAL_PORT
DB_USER=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_DB_NAME
DB_HOST=YOUR_DB_HOSTNAME
SESSION_SECRET=YOUR_SESSION_SECRET
PASSWORD_HASH=YOUR_PASSWORD_HASH
```


Build the frontend.

```bash
npm run build-ui
```

Install Api dependencies.

```bash
npm run build-api
```

Migrate and seed Database.

```bash
npm run setup-db
```
Start the application.

```bash
npm run start
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

