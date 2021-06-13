# GameAnalytics - FE candidate coding assignment

The purpose of this assignment is for candidates to showcase their technical skills during the interview process. The assignment should take no longer than 3 hours. Please let us know when you submit your assignment how long it took.

In this assignment you will be creating a game store webpage, where users can see a list of mobile games and add them to a cart, and then be able to go to the checkout page and manage the games in their cart.

## Requirements

This assignment **should be done using only React, TypeScript ES6 and CSS** and using the project skeleton provided to you, with no extra modules.

When it comes to the UI design, given the provided designs, the project should follow the color scheme and the layout, but pixel perfect implementation is not required.

We would like you to implement the following two pages:

##### Game list page

- The user should be able to navigate to the "/list" path and see all the games provided in the API endpoint "/api/games".
- In that list the user will be able to see each game in a tile like in the designs provided with name, tags, release date, rating and pricing.
- The user should be able to select the amount of units of the game they want and be able to add/remove from their cart.
- The "checkout" button in the page header should have a badge with the number of games selected and not the amount of units.
- The user should be able to change the currency in the top right selector and see the pricing across the page change to reflect the selected currency

##### Checkout page

- When the user navigates to the checkout page, they should see all the games they have selected in the previous page and the number of units.
- The user should be able to change the number of units selected and remove games from the cart and see the "Order value" and "Total item" numbers changed

## What we will be assessing?

Besides the completion of the functionality requirements, we will also be assessing the following:

- Code separation
- Git usage: commit message and commit history
- Code quality:
  - maintainability
  - readability
  - consistency
  - style
  - tests

## UI Designs

You can find the detailed designs for this assignment here https://zpl.io/scene/2GK6XqE

## Guidelines

- You will have to use the project skeleton provided to you as a starting port, but you can use or modify anything inside the "src" file to achieve the desired end result
- To load data you can use the native "fetch" api to load the games and currency rates.
- For CSS you can use the basic css modules from create-react-app https://create-react-app.dev/docs/adding-a-stylesheet
- If you find that provided components could be improved, feel free to change them as necessary.

## How to submit your assignment

We would like you to use version control software to work on the project. Please create a Git repository and commit often during the development.

When you feel you are done with the assignment, you can send us a copy of the repository using something on the following lines to compress it into a single file:

```
git archive --format zip --output /full/path/to/zipfile.zip master
```
