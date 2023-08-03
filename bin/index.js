#! /usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";

// This program will work as the following:
// Ask user if they are entering for the morning or evening 
// Ask a series of questions
// For each question if user adds input it will remain on the same question
// To move to the next question user can hit enter

const questions = [
    "Living purposefully to me means",
    "If I bring 5 percent more purposefulness to my life today",
    "What are three things you're grateful for today",
    ""
]

const prompts = [
    ...questions.map(question => {
        return {type: "input", message: question + "...", name: question.replaceAll(' ', '-')}
    })
]

figlet("", (err, data) => {
    if (err) {
      console.log("Sorry, something went wrong");
      console.dir(err);
      return;
    }
  
    console.log(data);
  });

inquirer
  .prompt(prompts)
  .then((answers) => {
    // Use user feedback for... whatever!!
    // Add to a file of some kind?
    const date = new Date()
    console.log(date)
    console.log(answers)
    console.log(chalk.cyan("Stay mindful!"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




// SENTENCE STEMS

// ...TO FACILITATE LIVING PURPOSEFULLY
// Living purposefully to me means...
// If I bring 5 percent more purposefulness to my life today