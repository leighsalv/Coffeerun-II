# Coffeerun

A simple e-commerce site that takes coffee orders for a food truck written in **HTML, CSS, Bootstrap, Javascript, and JQuery**. **Deployd & MongoDB** is used for the backend to store/remove coffee orders. This is for **Homework 4 - CPSC 473 Front-End Development course**.

**Functionalities & Features**

- users can place a coffee order, size, flavor shot, and amount of caffein
- takes in user's email address
- pending orders are shown as checkbox lists & removes it when checked
- payment form where users can put their contact information & credit card information
- customer's information & coffee order(s) are stored in the backend

## Getting Started

**Clone** or **download** the repo

### Install

[`Node.js`](https://nodejs.org/en/) and follow the prompts.

`browser-sync` in terminal to automatically reload browser: `npm install -g browser-sync`

[`MongoDB`](https://docs.mongodb.com/manual/administration/install-community/) for backend

[`Deployd`](https://github.com/deployd/deployd#install-from-npm) for backend

### Run In Terminal

`cd/directory-of-coffeerun/Coffeerun2-master` change _directory-of-coffeerun_ to the directory in which you downloaded the repo

`browser-sync start --server --browser "Google Chrome" --files "*.html, stylesheets/*.css, scripts/*.js"` to view Coffeerun on browser.

open a new terminal (CMD+T or CNTRL+T) and run deployd `dpd -d` in `cd/Coffeerun2-master/coffeerun-backend`

## Demo

![alt text](Coffeerun2-Demo.gif)
