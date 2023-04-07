# Project Name

Movie List with Saga

## Description

Duration: 10 Hours

This project is an app built utilizing HTML, CSS, Javascript, Node.js, Express, Postgres, Postico, React, Redux, and Redux Sagas. The purpose of this web app is to serve as an interactive database of movies. By clicking on a movie image, the user will be able to view additional information about the movie such as: genres and a short description.

## Prerequisites
<ul>
    <li>React</li>
    <li>Redux</li>
    <li>Redux Sagas</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>Postgres</li>
    <li>Postico</li>
</ul>

## Installation
<ol>
    <li>Go to: https://github.com/FCLee12/weekend-movie-sagas</li>
    <li>Look at the top right of the webpage for the 'fork' button</li>
    <li>Create a fork under your own GitHub account ***** Verify you are in your own fork of the project ***** -At the top left of the webpage, you should see the path to the repo -Your GitHub account name should appear before the first '/'</li>
    <li>Open your terminal</li>
    <li>Navigate to the desired location you want to place the project files using the terminal</li>
    <li>On the webpage of your forked copy, look for the 'code' button</li>
    <li>Assuming you've set up your SSH, click on the SSH tab and copy the file path</li>
    <li>Back on your terminal, enter the following into your terminal: git clone PASTE-COPIED-FILE-PATH-HERE</li>
    <li>Hit enter, the repo will be downloaded into your current working directory</li>
    <li>The repo should now exist in your local machine</li>
    <li>cd into the repo</li>
    <li>
        <ol>Run the following commands in your terminal, waiting each time for installation to complete before running the next command:
            <li>npm install</li>
        </ol>
    </li>
    <li>Make sure Postgres is running, and open up Postico</li>
    <li>Create a new database with the name: saga_movies_weekend</li>
    <li>Search for the database.sql file, within the file you will find the code to generate the table required to run the web app, in addition to some mock data</li>
    <li>Upon executing the provided code in Postico, hit refresh and you should now see the genres table, the movies table, and the movies_genres table, this indicates the database is now ready</li>
    <li>Upon completion of those installs, you have to start the server with the following command: npm run server</li>
    <li>Next you have to start the client server with the following command: npm run client, which will result in the web app being opened in your default browser, ready for use</li>
</ol>

## Usage
<ol>
    <li>Upon loading, if you've imported the mock data, you should be greeted by a list of movies.</li>
    <li>If you want to view more details about a movie, simply click on the image.</li>
    <li>Upon click, you will be brought to a details page about the movie.</li>
    <li>If you want to return to the list of movies, click the "Back to List" button, which will return you to the list of movies.</li>
</ol>

## Built With
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Redux</li>
    <li>Redux Sagas</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>Postgres</li>
    <li>Postico</li>
</ul>

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [fueclee.12@gmail.com]
