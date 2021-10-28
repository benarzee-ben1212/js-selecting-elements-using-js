// Often, with JavaScript, you want to manipulate HTML elements.

// To do so, you have to find the elements first. There are several ways to do this:

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections

const element = document.getElementById("intro");

const element = document.getElementsByTagName("p");

const x = document.getElementsByClassName("intro");

const x = document.querySelectorAll("p.intro");