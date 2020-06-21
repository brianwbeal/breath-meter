# React Breath Meter App

> React-based meditation app built with create-react-app, deployed with netlify

## Overview

Using a single class-based component, the UI offers a slider input and 'play' button to start the animated mediation sequence.

The slider input calls the <code>onChange()</code> handler to set the value of the app-state property <code>max</code> which sets the number of seconds in each inhale or exhale cycle.

When the user clicks 'play', the <code>startCycle()</code> function is called and the state properties are set to begin the animation sequence. <code>setInterval()</code> is used to configure the cycle between inhalations (wherein the animated orb swells larger), and exhalations (wherein the animated orb contracts).

When the user clicks 'stop' (or toggles the cycle-length with the slider during the animation), the <code>reset()</code> function is called which reverts the app state property values to their defaults and stops animation.

## Concepts

* React
  * create-react-app CLI
  * class-based components
  * app state
  * <code>setState()</code>
  * CSS controlled by JS
  * <code>onClick()</code>
  * JSX

* JavaScript
  * ES6 classes
  * ES6 arrow functions
  * ES6 destructuring assignment syntax
  * ES6 let, const variables
  * <code>setInterval()</code>

### Author

[Brian Beal](https://github.com/brianwbeal)

> [linkedin](https://www.linkedin.com/in/brianwbeal/)

### Version

1.0.0

## Demo

#### [demo](https://goofy-aryabhata-8ca49b.netlify.com/)