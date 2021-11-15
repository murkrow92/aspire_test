## Aspire Test App

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

This project aims to be the original source code of Aspire Test App

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [Yarn or NPM](https://yarnpkg.com/)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/)
  and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

#### Use React-Native command line

Clone this repository, and you have some way to do:

### Option 1: Using Command Line

- Go to your project's root folder and run `yarn install` or `npm install`.
- Go to `ios` folder and run `pod install`
- Run `yarn ios` or `npm run ios` to start your application!

### Option 2: Using Xcode (or Android Studio)

- Go to your project's root folder and run `yarn install` or `npm install`.
- Go to `ios` folder and run `pod install`
- Open `ios` folder with Xcode

## Folder structure

This template follows a very simple project structure:

- `App`: This folder is the main container of all the code inside your application.
    - `Assets`: This folder contains all app assets including fonts and images.
    - `Business`: This folder contains all app business logic components such as searching and fetching products.
    - `Components`: Folder to store any common component that you use through your app (such as a generic button)
    - `Configs`: Folder to store any kind of config that you have.
    - `Containers`: Folder to store all your screens.
    - `Fixtures`: Folder to store fixed resources.
    - `Sagas`: Folder to store the saga middlewares.
    - `Reduxes`: This folder should have all your reducers, actions, and expose the combined result using its `index.ts`
    - `Services`: Folder that contains all your application third party services, including API and redux-persist.
    - `Themes`: Folder to store theme settings.
    - `Utils`: Folder to store utilities.
- `index.ts`: Entry point of your application as per React-Native standards.
- `App.tsx`: Main component that starts your whole app.

