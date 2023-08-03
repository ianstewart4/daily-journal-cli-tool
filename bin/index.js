#! /usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import quotes from "../quotes.json" assert { type: 'json'}

// This program will work as the following:
// Ask user if they are entering for the morning or evening 
// Ask a series of questions
// For each question if user adds input it will remain on the same question
// To move to the next question user can hit enter
// The program will end with a random quote from a list. (To be added later)

const quoteText = quotes[Math.floor(Math.random() * 16)].text
const quoteAuthor = quotes[Math.floor(Math.random() * 16)].author

const questions = [
    "Living purposefully to me means",
    "If I bring 5 percent more purposefulness to my life today",
    "What are three things you're grateful for today",
    ""
]

const inputPrompts = [ // Prompts for input-type questions
    ...questions.map(question => {
        return {type: "input", message: question + "...", name: question.replaceAll(' ', '-')}
    })
]
// ACTUAL PROGRAM WILL GO HERE

// inquirer
//   .prompt(inputPrompts)
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     // Add to a file of some kind?
//     const date = new Date()
//     console.log(date)
//     console.log(answers)
//     console.log(chalk.cyan("Stay mindful!"));
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


// PRACTICE 

inquirer
  .prompt({type: "list", choices:['Jumbo', 'Large', 'Medium', 'Small', 'Personal'] , message: "What size of pizza would you like?", name: "pizza-choice"})
  .then((answers) => {
    // Use user feedback for... whatever!!
    // Add to a file of some kind?
    const date = new Date()
    console.log(date)
    console.log(answers)
    console.log(chalk.cyan(`'${quoteText}' - ${quoteAuthor}`));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




// fetch()

// SENTENCE STEMS

// ...TO FACILITATE LIVING PURPOSEFULLY
// Living purposefully to me means...
// If I bring 5 percent more purposefulness to my life today