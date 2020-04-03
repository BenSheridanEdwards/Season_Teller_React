# Season Teller

[Description]() | [User Stories]() |[Mockups]() | [Application Showcase]() | [Installation Instructions]()

## Description

A simple season teller app made with React. It uses chromes geolocation API to determine users latitude and deduces from that whether they're on the northern or southern hemisphere. 

Based on the user's hemisphere and the date, the app will display a page indicating if it's summer or winter.

## User Stories

```
As a user, when I use Season Teller.
I expect to see a loading page, asking for my location before I'm shown content.
```
```
As a user, wehn I use Season Teller, and have given permission to use my location.
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

## Mockups

![Season Teller Summer and Winter Mockups](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonalTeller-Mockup.png)

## Application Showcase

When a user first uses Season Teller, they are shown a loading page that displays a spinner and a prompt asking for the user to share their location:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-LoadingPage.png)

When the user has shared their location, and is in a location where it's summer:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-SummerPage.png)

When the user has shared their location, and is in a location where it's winter:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-WinterPage.png)

## Installation Instructions

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Season_Teller_React.git
$ cd Season_Teller_React
```

Then change directory into the React project.

cd season-teller

From inside the React project, you can run npm start in the terminal to launch the app:

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.<br />

### Additional Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
