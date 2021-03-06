## Instructions

### Back-end set up 

- Install dependencies by running the following command on the back-end folder
```sh
$ npm i
```
- Run mongodb from terminal

- Create a .env file (copy/paste the variables of .env.example) and set the port and a mongodb url.

- Run the back-end by running the following command on the back-end folder
```sh
$ npm start
```
- Copy the ngrok URL that appears on the console. It will create a public HTTPS url that runs locally on your development machine. 

### Front-end set up 

- Install dependencies by running the following command on the front-end folder
```sh
$ npm i
```
- Create a .env.development file (copy/paste the variables of .env.development.example) and set the REACT_APP_REST_API_LOCATION by pasting the ngrok url.
- Run the front-end by running the following command  on the front-end folder
```sh
npm start
```
### Tests

Tests can be ran by running the following command on the back-end folder 
```sh
npm run test
```
### Code Syntax Analyzis

Analyze code to find problems by running the following command
```sh
npm run lint
```






