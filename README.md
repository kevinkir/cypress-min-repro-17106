# Minimal Reproducible Case For Cypress Intercept Bug

## Issue Description

There is a short amount of time between tests, where the page is still active, but the network stubs have been removed. In this time, network requests can make it through, which can cause flakiness.

## Steps to Reproduce:

    npm i
    npm start

In a separate tab:

    npm test