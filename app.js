// import functions and grab DOM elements
import { signInUser, signUpUser } from './fetch-utils.js';

const signInFormEl = document.querySelector('#sign-in-form');
const signUpFormEl = document.querySelector('#sign-up-form');



// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


signInFormEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signInFormEl);

    const email = data.get('email-sign-in');
    const password = data.get('password-sign-in');

    const user = await signInUser(email, password);

    if (!user) {
        window.location.href = './';
    } else { window.location.href = './polls'; }

    console.log(user);

});

signUpFormEl.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signUpFormEl);

    const email = data.get('email-sign-up');
    const password = data.get('password-sign-up');

    const user = await signUpUser(email, password);

    if (!user) {
        window.location.href = './';
    } else { window.location.href = './polls'; }

});

