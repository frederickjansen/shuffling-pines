# Shuffling Pines
Assignment 2 for Advanced JavaScript

## Installation instructions
* Install NodeJS
* Install Bower, Gulp, JSHint and Karma-CLI globally through npm
* Run `npm install`
* Run `bower install`
* Run `gulp` for the full cycle, `gulp build` to produce production-ready files and `gulp test` to execute all unit tests

## Features
* Form
  * Submit without page reload
  * Location field only shown when pickup is chosen
  * Date picker works in Firefox as well
  * Form cannot be submitted without filling out all fields
  * Input fields have individual error messages
  * Local storage is output to console on submit
 * Guests
  * Inline edit of all fields at the same time
  * Soft delete
  * Adheres to pickup -> arrived, dropoff -> arrived rules
  
If you see a console error when changing the date on the guests page, that's an xeditable bug (3rd party library).
### By Frederick Joossens
