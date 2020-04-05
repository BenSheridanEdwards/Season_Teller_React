# Season Teller

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [Application Showcase](#app-showcase) | [Installation Instructions](#installation)

## <a name="description">Description</a>

A simple season teller app made with React. It uses chromes geolocation API to determine users latitude and deduces from that whether they're on the northern or southern hemisphere. 

Based on the user's hemisphere and the date, the app will display a page indicating if it's summer or winter.

*Tech Stack: JavaScript, React, Node, CSS, HTML, Webpack, Babel, CircleCI, Codeclimate, Firebase*

You'll find the app [here](https://season-teller-react.web.app/).

## <a name="user-stories">User Stories</a>

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

## <a name="mockups">Mockups</a>

![Season Teller Summer and Winter Mockups](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonalTeller-Mockup.png)

<a name="app-showcase"><br /></a>

## Application Showcase

When a user first uses Season Teller, they are shown a loading page that displays a spinner and a prompt asking for the user to share their location:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-LoadingPage.png)

When a user is in a location where it's the season of summer, they're shown:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-SummerPage.png)

When a user is in a location where it's the season of winter, they're shown:

![](https://github.com/BenSheridanEdwards/Season_Teller_React/blob/master/media/SeasonTeller-WinterPage.png)



## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Season_Teller_React.git
$ cd Season_Teller_React
```

Then change directory into the React project.
```
cd seasonteller
```
From inside the React project, you can run npm start in the terminal to launch the app:

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.<br />

### Additional Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
