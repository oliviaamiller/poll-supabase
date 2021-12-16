// import functions and grab DOM elements
import { signInUser, signUpUser, redirectToPolls } from './fetch-utils.js';

const signInFormEl = document.querySelector('#sign-in-form');
const signInEmailEl = document.querySelector('#sign-in-email');
const signInPasswordEl = document.querySelector('#sign-in-password');

const signUpFormEl = document.querySelector('#sign-up-form');
const signUpEmailEl = document.querySelector('#sign-up-email');
const signUpPasswordEl = document.querySelector('#sign-up-password');


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  

signInFormEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const user = await signInUser(signInEmailEl.value, signInPasswordEl.value);

    if (user) {
        redirectToPolls();
    } else {
        console.error(user);
    }

});

signUpFormEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const user = await signUpUser(signUpEmailEl.value, signUpPasswordEl.value);

    if (user) {
        redirectToPolls();
    } else {
        console.error(user);
    }

});
