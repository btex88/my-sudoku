# my Sudoku

Project developed in React with Redux and TailwindCSS.


## Why does this exist?

- This was done with the intent of practicing Redux in its full state.


## How to clone it and make it run?

- Fist thing is to clone in you machine
- Than you need to enter the root folder of the project and run in your terminal the folowing: **```npm install```**
- After this process is done, just need to run **```npm start```** and your ready to go.


## Steps into creating the application
### 01 - Create all the folders
```javascript
// Redux folders
/src/actions
/src/store
/src/reducers

//React folders
/src/components
/src/pages
/src/routes

// Misc folders
/src/images
/src/services
```

### 02 - Create the Redux base

- Create the store at ```/src/store/index.js```
- Create the base ```rootReducer``` at ```/src/reducers/index.js```
- Implement the ```store``` at ```/src/index.js``` along side with the ```<Provider store={store}>...</Provider>```


### 03 - Create the core of the application

- Create the page components of the app under the ```/src/pages```.
- Create the routes of the app under ```/src/routes/index.jsx```.
- Create the base components under ```/src/components```.


### 04 - Create the Login Page of the application

- Create it under ```/src/pages/login.jsx```.
Create the input and the button for the login under ```/src/components/login-input.jsx``` and ```/src/components/login-button.jsx```.
- Create the user reducers under ```/src/reducers/user.js``` and implements its action under ```/src/actions/index.js```.
- Create the whole logic for the login validating the email format and having all inputs completed to enable the button.
- After the process is done, go to the title page (title page is the name tha its given to the firs page of a game, the main page of a game)

### - 05 Create the Title Page

