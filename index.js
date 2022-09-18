// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for making this project?',
          },
          {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project?',
          },
          {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?',
          },
          {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use.',
          },
          {
            type:'input',
            name:'collaborators',
            message:'What were your collaborators names?'
          },
          {
            type:'input',
            name:'github',
            message:'What are the links to their github profiles?'
          },
          {
            type:'list',
            name:'license',
            message:'What type of license are you using?',
            choices:[
              'MIT',
              'Apache_2.0',
              'ISC',
              'None'
            ]
          }
          //is it possible to create a for loop for this stuff? is it too complicated?
          //this is where the licensing stuff will go. 
          

    ])}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    

}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => {console.log(data);
          writeToFile('myREADME.md', generateMarkdown(data))
      
      })
        //will this just add it to the existing readme? or will it create a new one?
        .then(()=> console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();


// Steps to take:
//- do the inmprt/expoert thing to use inquierer at top (refer to previous exercises, I don't remember off the top)
//-write questions (refer to mini-project)
// -- gonna need to figure out exactly what questions to ask. 
// 
//-template literal to write to a file (refer to mini-project)
//-generate markdown (read up on badges and licenses in order to generate)
//-import the generate markdown? should that be at the top?

//-do I have to do something about images to add to the readme? Is there a way to generate that/should i generate that? 
