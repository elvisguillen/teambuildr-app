# TeamBuildr Coding Challenge - Elvis Guillen

This repo contains the source code and documentation for my TeamBuildr React Redux application for the coding challenge portion of my interview.

### Install Prerequisites

* Node (I recommend using v8.2.0 or higher)

### Run Locally

```sh
git clone https://github.com/elvisguillen/teambuildr-app.git
cd teambuildr-app
npm install
npm run start:dev
```

Site will run locally on localhost:8080

## Objective

Create a React application that interacts with the TeamBuildr API and does the following:
- Login with API Token
- Displays a list of users with tabs for athletes and coaches
- Bonus: Style header with user properties and display a page with basic user information

## Site Structure

- **/src/app/actions, /reducers, /data** - Redux folders for seperate state management files and concerns, contains Async logic with Axios.
- **/src/app/components** - Components for view layer. Pages and layout are in the root folder, components that connect with redux are in "container" and "dumb" components that don't connect are in "presentational".
- **/src/app/routes** - Route file that initializes all routes, uses connected react router to connect route events with the store automatically.
- **/src/app/utils** - Basic axios utility files for setting auth token as a html header along with other common headers.
- **/src/app/App.js** - Main app file that loads all components and determines whether you're logged in from localStorage on initial load.
- **/styles/** - SASS files for styling

## Tools Used

- **React**
- **Redux** 
- **Webpack**
- **Bootstrap**
- **SASS** 
- **Axios**

## Edge Cases

There were a few cases I ran into while creating this:

- CORS issue when accessing API, had to create a proxy server locally. Still having issues on live server.
- Closing the window does not persist redux store data that's already been fetched, only auth token so pages are sometimes empty before loading.  Configuring a plugin redux-persist would fix this to get previous URL as well.
- Webpack file-loader was not loading custom fonts correctly so I had to add them manually on dev and production.
- Tested and built on Google Chrome, responsive but not fully tested on mobile or other browsers.


## Roadmap and Future Features

1. If I had more time I'd like to implement GSAP and React Transition Group to animate elements in between page loads.
2. Adding a spinner that covers the entire application when redux state isLoading is set to true during Async actions.
3. Installing redux-persist to persist redux states so reloads are user friendly.
4. Reorganizing where Layout is rendered to avoid re rendering sidebar header and content when clicking a link.
5. A more functional Dashboard with Data Visualization.