# Tag Along - A Discord Calendar App

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

## Usage
Import the database to view functionality

    mysql -u root
    SOURCE db/schema.sql
    exit

Seed the event information and then start node.js

    npm run seed
    npm start
