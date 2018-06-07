# Puppy-Pal-app

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the UIkit framework and the backend implemented with Node.js,Express,mySQL, and Sequelize ORM. HTML templating is done through the use of Handlebars.

The user may click on the start button in the home page to begin their selection of adopting a new dog. They can scroll through the slideshow and click on the "Choose me" button down below to submit their choice. Once they submit their choice, they are prompted to a confirmation page that posts the details of the dog. On the home page, the user can also select shelter if they are a shelter looking to add a dog into our application, which will then be added into the mySQL database. The shelter client can also look through our existing gallery of puppies and search a dog by id on the navbar of the page. 

## Demo

The demo of the Puppy-Pal application can be found [here]
(put link in here).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:Team-Johnnycake-Cobblers/Puppy-Pal-App.git
	
Next, install the application dependencies.

	cd Puppy-Pal-App
	npm install
	
Finally, run the node server locally.

	node server.js
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

## Running the tests
To test our application, we used Nighmare. Nightmare allows us to simulate real user actions. Start by installing the dependencies.

    npm install

Next, navigate to the test folder and run the test locally.

    npm test

## Authors

* **Tricia Leavitt**
* **Hesham Sobh**
* **Nick Kwon**
* **Karina Guerrero**

