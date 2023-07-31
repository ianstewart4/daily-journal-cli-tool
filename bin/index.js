#! /usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";

// This program will work as the following:
// Ask user if they are entering for the morning or evening 
// Ask a series of questions
// For each question if user adds input it will remain on the same question
// To move to the next question user can hit enter


inquirer
  .prompt([
    /* Pass your questions in here */
    { type: "input", message: "Living purposefully to me means...", name: "living-purposefully-means"},
    { type: "input", message: "If I bring 5 percent more purposefulness to my life today...", name: "5-percent-more-purposefulness"},
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // Add to a file of some kind?
    const date = new Date()
    console.log(date)
    console.log(answers.question1)
    console.log(chalk.cyan("Stay mindful!"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// figlet(":-)", (err, data) => {
//   if (err) {
//     console.log("Sorry, something went wrong");
//     console.dir(err);
//     return;
//   }

//   console.log(data);
// });


// SENTENCE STEMS

// ...TO FACILITATE LIVING PURPOSEFULLY
// Living purposefully to me means...
// If I bring 5 percent more purposefulness to my life today