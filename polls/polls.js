

const newPollFormEl = document.querySelector('form');
const optionAEl = document.querySelector('#option-a');
const aAddButtonEl = document.querySelector('#a-add');
const aUndoButtonEl = document.querySelector('#a-undo');
const optionBEl = document.querySelector('#option-b');
const bAddButtonEl = document.querySelector('#b-add');
const bUndoButtonEl = document.querySelector('#b-undo');
const closePollButtonEl = document.querySelector('#close-button');
const closedPollsEl = document.querySelector('#closed-polls');

let question = '';
let optionA = '';
let optionB = '';
let aVotes = 0;
let bVotes = 0;


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