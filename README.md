# Tag Along - A Discord Calendar App

## License

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Demo](#demo)
4. [Technologies](#technologies)

## Description
This is a calendar app for Discord that allows you to create events on the web and display them in a channel with RSVP values.

## Installation
    npm install

## Demo
[Live Site](https://limitless-cove-90207.herokuapp.com/)


 ![Role Creation Gif](/public/images/role.gif) 
 Example: Creating the role for the discord user by interacting with the message 



 ![Event Post Gif](/public/images/eventPost.gif) 
  Example: Posting the event into the discord text channel 
 
## Usage
Import the database to view functionality

    mysql -u root
    SOURCE db/schema.sql
    exit

Seed the event information and then start node.js

    npm run seed
    npm start
