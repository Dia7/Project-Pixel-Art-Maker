<h2>Get the Starter Code</h2>
If you'd like to start from scratch without any files, feel free to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use.

You can download the starter code through:

-The Pixel Art Maker repository on GitHub - (https://github.com/udacity/project-pixel-art-maker-starter)

The starter code includes all required HTML input fields, as well as some basic styling. A skeleton of the makeGrid() function is provided as well.

<h2>Project Rubric</h2>
Review the Pixel Art Maker project rubric (https://review.udacity.com/#!/rubrics/641/view) carefully, and refer to it often while you build the project. If you want additional feedback, post in the course forums or Slack.

<h2>Development Strategy</h2>
Before writing any code, try loading up index.html from the starter project to see how things look! Notice that the design.js file is implemented in the <body> tag in the index.html file. Your goal is to build out the design.js file to achieve all the interactive elements on the page!

Now, open up design.js. As you start writing your code, keep these three tasks in mind:

1. <strong>Define your variables</strong> by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
2. <strong>Add event listeners</strong> to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
3. <strong>Set the size of the cross stitch canvas</strong> as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.

Now test it! When you're done, you should be able to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.

<strong>Note:</strong> To complete Pixel Art Maker, you must be using the current version of Edge, Firefox, or Chrome.

<h2>Udacity Style Guides</h2>
The starter contains basic styling, but feel free to style the app as you please! You should write your code and markup to meet the specifications provided in these style guides:

- CSS Style Guide - (http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- HTML Style Guide - (http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- JavaScript Style Guide - (http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- Git Style Guide - (https://udacity.github.io/git-styleguide/)
