```
This is a simple react application to show list of countries, states of each selected country 
and cities for a particular state
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Link

https://dbnaveen.github.io/country-states-cities/

## Commands used in the application

1. npx create-react-app my-country
2. Delete setupTests.js, reportWebVitals.js, logo.svg, App.text.js, index.css
3. Create components folder inside src
4. Install VsCode plugin: ES7 React/Redux/GraphQl by dsznajder
5. Navbar.js - type rfce and hit enter. It will create a skeleton
6. npm install sass-loader node-sass --save-dev
7. npm install @material-ui/core
8. npm install @material-ui/icons
9. For jsx - hit rcc and hit enter. It will create a skeleton

## Color Palette Used

https://colorhunt.co/palette/22272

## Note
1. Create a react component, start its name with an uppercase letter
2. To use Sass, npm install node-sass --save
3. Component Framework: Material-UI

## Concepts

1. Material-UI for component framework
2. Context - to share the data across components
3. Event bus - to communicate between independent components
    1. https://www.pluralsight.com/guides/how-to-communicate-between-independent-components-in-reactjs

## Deployment to GitHub Page

1. Add homepage to package.json:
    1. "homepage": "https://dbnaveen.github.io/country-states-cities",
2. Run: `npm install --save gh-pages`
3. Add deploy scripts to package.json:
    1. "predeploy": "npm run build",
    2. "deploy": "gh-pages -d build",
4. Run: `npm run deploy`
    1. It will create build folder


