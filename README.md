# Ethereum Price Tracker

Uses CoinGecko API, becareful with too many requests as is a public api

![alt text](https://i.ibb.co/vjdqSxS/Screen-Shot-2021-12-07-at-5-24-45-PM.png)

Pseudo Request a coin symbol here alerts on submission
![alt text](https://i.ibb.co/9r9FDry/Screen-Shot-2021-12-07-at-5-24-54-PM.png)


By using the coingecko public api via axios a simple request can be made to receive the usd price of a currency. The price is returned into an object in which you can use to modify state and pass to the monitor component. The monitor component has a child component called currency which will render the price in a list element. There is also a pseudo request form which accepts a currency symbol from the user and alerts the submission. With the router, the Navigation bar helps links url's with their correpsonding components via main app.

requests are from public api so when testing if there is too many requests in too short of a time they will be temporarily denied i.e. cors policy etc.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Deployment
Deployed to firebase
https://proj4flowers.web.app/

## Google Docs workflow
https://docs.google.com/document/d/1zRI4ooXLKAjA22k0RaO2NKQljM7AF9Gotas0-b1QiUE/edit?usp=sharing

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
