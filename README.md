# Season Teller

[![CircleCI](https://circleci.com/gh/BenSheridanEdwards/Season_Teller_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/Season_Teller_React) 
[![Maintainability](https://api.codeclimate.com/v1/badges/ab6fc16585a960fdfadb/maintainability)](https://codeclimate.com/github/BenSheridanEdwards/Season_Teller_React/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/32d8f217be4f246461fa/test_coverage)](https://codeclimate.com/github/BenSheridanEdwards/Click_Counter_React/test_coverage)

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [App Showcase](#app-showcase) | [Features](#features) | [Improvements](#improvements) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

A simple season teller app made with React. It uses chromes geolocation API to determine the users latitude and deduces from that whether they're on the northern or southern hemisphere. 

Based on the user's hemisphere and present calendar month, the app will display one of two possible pages, indicating their location's season is summer or winter.

**Tech Stack:** *JavaScript, React, Node, CSS, HTML, Jest, Enzyme, Webpack, Babel, CircleCI, Code Climate, Firebase*

You'll find the app [here](https://season-teller-react.web.app/), use cmd/window + click to open in a new tab.

## <a name="user-stories">User Stories</a>

```
As a user, when I use Season Teller.
I expect to see a loading page, asking for my location before I'm shown content.
```
```
As a user, when I use Season Teller, and have given permission to use my location.
When I'm in the northern hemisphere between March and October, 
I expect to be shown content that indicates it's summer.
```
```
As a user, when I use Season Teller, and have given permission to use my location.
When I'm in the northern hemisphere between November and February, 
I expect to be shown content that indicates it's winter.
```
```
As a user, when I use Season Teller, and have given permission to use my location.
When I'm in the southern hemisphere between March and October, 
I expect to be shown content that indicates it's winter.
```
```
As a user, when I use Season Teller, and have given permission to use my location.
When I'm in the southern hemisphere between November and February, 
I expect to be shown content that indicates it's summer.
```

## <a name="mockups">Mockups</a>

![Season Teller Summer and Winter Mockups](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonalTeller-Mockup.png)

## <a name="app-showcase">App Showcase</a>

![App Screenrecording](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-AppShowcase.gif)

### <a name="features">Features</a>

When a user is in a location where it's summer, they're shown:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-SummerPage.png)

When a user is in a location where it's winter, they're shown:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-WinterPage.png)

### <a name="improvements">Improvements</a>

- 100% Test Coverage
  - Learn how to test with snapshots
- Rebuild the app from scratch using TDD

## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Season_Teller_React.git
$ cd Season_Teller_React
```

### Launching the App from the Command Line

From inside the React project, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the React project, you can run `npm start` in the terminal to run the test suite. 

```
$ npm test
```

### Seeing Test Coverage

From inside the React project, you can run 'npm test -- --coverage' in the terminal to see the code coverage for this project.

```
$ npm test -- --coverage
```

## <a name="credits">Credits</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/). 

This project uses continuous integration and deployment with [CircleCI](https://circleci.com/) & [Firebase](https://firebase.google.com/).

This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality.
