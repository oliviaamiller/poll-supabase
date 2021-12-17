import { renderPoll } from '../render-utils.js';
import { getPolls, createPoll } from '../fetch-utils.js';

const newPollFormEl = document.querySelector('form');
const currentPollEl = document.querySelector('#current-poll');
const questionEl = document.querySelector('#question');
const optionAEl = document.querySelector('#option-a');
const aVotesEl = document.querySelector('#a-votes');
const bVotesEl = document.querySelector('#b-votes');
const aAddButtonEl = document.querySelector('#a-add');
const aUndoButtonEl = document.querySelector('#a-undo');
const optionBEl = document.querySelector('#option-b');
const bAddButtonEl = document.querySelector('#b-add');
const bUndoButtonEl = document.querySelector('#b-undo');
const closePollButtonEl = document.querySelector('#close-button');
const closedPollsEl = document.querySelector('#closed-polls');
const logoutButtonEl = document.querySelector('#logout-button');


let question = '';
let optionA = '';
let optionB = '';
let aVotes = 0;
let bVotes = 0;


newPollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(newPollFormEl);

    question = data.get('question');
    optionA = data.get('option-a');
    optionB = data.get('option-b');

    newPollFormEl.reset();

    displayCurrentPollEl();
});

logoutButtonEl.addEventListener('click', () => {
    window.location.href = '../';
});

aAddButtonEl.addEventListener('click', () => {
    aVotes++;
    displayCurrentPollEl();
});

aUndoButtonEl.addEventListener('click', () => {
    aVotes--;
    displayCurrentPollEl();
});

bAddButtonEl.addEventListener('click', () => {
    bVotes++;
    displayCurrentPollEl();
});

bUndoButtonEl.addEventListener('click', () => {
    bVotes--;
    displayCurrentPollEl();
});

closePollButtonEl.addEventListener('click', async() => {
    await createPoll(question, optionA, optionB, aVotes, bVotes);

    displayAllPolls();

    question = '';
    optionA = '';
    optionB = '';
    aVotes = 0;
    bVotes = 0;

    displayCurrentPollEl();

});


function displayCurrentPollEl() {
    currentPollEl.textContent = '';

    questionEl.textContent = question;
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;
    aVotesEl.textContent = aVotes;
    bVotesEl.textContent = bVotes;

    // const poll = {
    //     question,
    //     optionA, 
    //     optionB, 
    //     aVotes,
    //     bVotes
    // };


    // const newPoll = renderPoll(poll);

    // currentPollEl.append(newPoll);
}

async function displayAllPolls() {

    closedPollsEl.textContent = '';

    const polls = await getPolls();

    for (let closedPoll of polls) {
        const lastPoll = renderPoll(closedPoll);
        lastPoll.classList.add('old-poll');

        closedPollsEl.append(lastPoll);
    }
}

displayCurrentPollEl();
displayAllPolls();