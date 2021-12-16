// import functions and grab DOM elements
import { signInUser, signUpUser } from './fetch-utils.js';

const signInFormEl = document.querySelector('#sign-in-form');
const signUpFormEl = document.querySelector('#sign-up-form');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

signInFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(signInFormEl);

    const email = formData.get('email');
    const password = formData.get('password');



});
