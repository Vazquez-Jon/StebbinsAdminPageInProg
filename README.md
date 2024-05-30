# StebbinsAdminPageInProg
Stebbins admin repository for practice to not fill main project with garbage

# Install Dependendencies

## Node Package Manager

## Create React App
```
px create-react-app [app name]
```
## Move into project directory
```
cd [app name]
```
## Firebase CLI
```
npm install -g firebase-tools
```

## Sign into Firebase to gain access to projects
```
firebase login
```
## Install React Router DOM
```
npm i -D react-router-dom
```

# Run Project in Local port
## Run npm start
```
npm start
```

# Deploying to firebase hosting
## Make sure you are in project directory
## Initialize firebase hosting wizard
```
firebase init hosting
```
### Select the proper options
<ol>
  <li>Yes to use current directy as project directory</li>
  <li>Choose Use an Existiing project</li>
  <li>Choose name of public directory to create</li>
  <li>Yes to set up as single page site (React SPA)</li>
  <li>No to set up with github</li>
</ol>

## Run build cmd for react
```
npm run build
```
## To see what site will look like before deploying
```
firebase emulators:start
```
## Deploy Project
```
firebase deploy --only hosting
```


