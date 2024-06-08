// TODO: Create a function that returns a license badge based on which license is passed in
/**
 * Function to get a license badge URL based on the license type
@param {string} license - The license type
 * @returns {string} - The URL of the license badge or an empty string if no license is provided
 */
function renderLicenseBadge(license) {
  // Mapping of license types to badge URLs
  const badges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
  };

  // Return the badge URL for the provided license, or an empty string if not found
  return badges[license] || '';
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  ${data.tableOfContents}

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  ${data.questions}

  # GitHub
  ${data.github}

  # LinkedIn
  ${data.linkedin}
`;
}

module.exports = generateMarkdown;
