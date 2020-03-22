# DEMO

check the demo here: https://testwallet.web.app/

# Test Wallet

A tool to add positive and negative Transactions to an account

## Getting Started

### Prequistes

You need angular to run this project

`````
npm install -g @angular/cli
`````

### Installing

Install:
```
npm i 
```
Serve:
````
ng serve
````
build:
````
ng build
````
build prod:
````
ng build --prod
````

## Notes
As I'm rather Johnny then the one that writtes a library for Johnny, I focused on using the created service in the front end. 
The Concept is a CRUD Application based on firestore.
I didn't think it's neccesary to split it in two services. I thought it makes more sense if the transaction know to which user/account they belong instead of having an additional account object.

