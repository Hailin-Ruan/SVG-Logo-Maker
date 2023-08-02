# SVG-Logo-Maker

## Table of Contents
- [Project Description](#project-description)
- [Screen Recording](#screen-recording)
- [Built With](#built-with)

## Project Description

As a freelance web developer, you need a solution to generate simple logos for your projects without having to rely on a graphic designer. To accomplish this, I will build a Node.js command-line application that allows you to create and save SVG logos.

When you run the application, it will prompt you to enter up to three characters for the logo's text, choose a color for the text (using either a color keyword or a hexadecimal number), and select a shape from a list of options, including circle, triangle, and square. You can also specify a color for the chosen shape using either a color keyword or a hexadecimal number.

Once you have provided input for all the prompts, the application will generate an SVG file named `logo.svg` and display the message "Generated logo.svg" in the command line. When you open the `logo.svg` file in a browser, you will see a 300x200 pixel image that matches the criteria you entered.

With this command-line application, you can easily create simple logos for your projects, saving time and resources by avoiding the need to hire a graphic designer.

## Screen Recording

![SVG logo generator walkthrough gif](./gif/walkthrough.gif)
![youtube link](https://youtu.be/4vh1_Nq_AOA)

## Built With:

- Visual Studio Code
- Node.js
- Jest (to run unit tests)
- Inquirer.js (collect inputs from user)
