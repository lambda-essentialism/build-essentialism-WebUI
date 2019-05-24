# Project Week - User Interface

  - Project Name - "Essentialism"
  - Role - WEB UI Developer (Design a landing page)

## Pitch:

In a world with everything shouting for you attention, the disciplined pursuit of less has never been more needed. Enter Essentialism. The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution. It’s not about getting more done in less time or getting less done. It’s about getting only the right things done. It’s about regaining control of our own choices about where to spend our time and energies instead of giving others implicit permission to choose for us. The first step to essentialism is identifying your values.

## Design:
- [`UX/UI designed by @marlenesalangsang - Esse`](https://invis.io/NHS3AJRTVKF)

## Built With

- HTML
- LESS
- JavaScript
- Animations: GreenSock and AOS (Animate on Scroll)

## Host: 
  - [`https://esse.netlify.com/index.html`](https://esse.netlify.com/index.html)
  

## Project Notes

- Mobile-first and responsiveness:
  Styling the project took a mobile-first approach having viewport breakpoints at 500px and 800px. Used rem sizes for font-sizes for accessibility and they are declared in the `variables.less` file.

- Preprocessor:
  Used LESS preprocessor in writing my styles then compile them down to CSS, compiling it into the index.css. Using LESS enabled me to breakdown my project styles into sections or components creating a reusable part, setting global styles and declaring reusable variables.

- JavaScript Features
  I manipulated the DOM using Javascript and added the following:

  1. `Nav`: This is a javascript class in an ES6 class syntax that attaches event-listener to the harmburger-button, to open and close the sidebar on mobile view. In Nav.js file, this the react host signup and login links are set to the respective header anchor tags.

  2. `Gallery`: This a class that has methods to create Image Elements, Info Elements, Link to github Elements, creates a new member then appends the newly created user to the gallery element in the DOM. Generates the each new member from an array of objects.

  3. `Main`: adds a event listener to the window and updated the DOM by changing the opacity of the container on load.
