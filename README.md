# ShareMagic

Technologies :   React, node/express, mongoDB

+ShareDaHouse is meant for large or small groups looking to track, 
manage and share their vacation homes, condos, apartments, and/or 
larger assets such as boats, planes, and more! The application 
provides authentication via google and others for added security. 
Users have the ability to upload homes or other assets to the app.
Provide pictures, ammendities available and more. House owners or 
(app users with assets) have the ability to make their home public 
or private to all users on the app. Ideally, user/owners will provide
permissions to specifc individuals to view the home which they can do 
inside the app. The added users by email, with them have access to the 
home when they log into the app. There end users can look at the home, 
see its calendar and furthermore, book potential times to stay there. 
 
 This application helps bridge the gap between all of the spreadsheets 
 you may have been using in the past or the numerous group chats or other 
 avenues. HouseShare brings together groups who share and makes life much 
 easier for them.

--- installation procedures & notes from class :

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
