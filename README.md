# Monsters creation Test Automation

## Description
This project automates monster creation application using Playwright framework, Typescript programming language and Page Object Model desing pattern.

## Test Cases
- **TC1**: Create a monster and verify the section contains the monster name.
- **TC2**: Add a monster, delete it and verify there are not monsters.
- **TC3**: Add two monsters, delete one and verify the section has one monster.

## Setup
1. Clone or download the repository
- open a new terminal and move to the application's folder `cd monstersCreationTests`
- Run `npm install` to install dependencies.
- Run `npm start` to execute the application.
- Open the url `http://localhost:3000/` and verify the application works correctly in the browser.

2. open a new terminal and move to e2e folder
- `cd e2e`
- install playwright with the following commands

3. Install Playwright
- `npm init -y`
- `npm i -D playwright @playwright/test`
- `npx playwright install`

## Test execution
`npx playwright test`

## Test debugging
`npx playwright test --debug`

## Execute a specific test case
`npx playwright test --grep 'testCaseName'`