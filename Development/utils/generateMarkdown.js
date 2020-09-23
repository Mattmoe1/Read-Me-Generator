// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.Description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  The application is under the ${data.License} license 

  ## Test
  ${data.Test}

  ## Contributing
  ${data.Contributing}
  
  ## Questions
  ${data.Questions}
`;
}

module.exports = generateMarkdown;
