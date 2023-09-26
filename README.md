# Almabetter Capstone Project - Get Youtube Subscribers

This project is a backend application that provides APIs for managing YouTube Subscibers.

We have to create a backend api which will send the response in form of JSON, by using modular coding approach which contains having different files for the api connection, the database should be handled by another file.

The APIs provided by this application include the following:

✅GET [http://localhost:3000/subscribers] - Response with an array of subscribers(an Object).

✅GET [http://localhost:3000/subscribers/names] - Response with an array of subscribers(an Object with only two fields name and subscribedChannel).

✅GET [http://localhost:3000/subscribers/:id] - Response with a subscriber*(an object)* with given id & Response with status code 400 and Error message({message: error.message}) if id does not match.

## Prerequisites

Before running this application, you must have the following softwares:

Node.js https://nodejs.org/en

MongoDB https://www.mongodb.com/try/download/shell
