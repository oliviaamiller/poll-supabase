export function renderPoll(poll) {
    const div = document.createElement('div');
    const optionA = document.createElement('p');
    const aVotes = document.createElement('p');
    const optionB = document.createElement('p');
    const bVotes = document.createElement('p');

    div.classList.add('poll');

    optionA.textContent = poll.optionA;
    optionB.textContent = poll.optionB;
    aVotes.textContent = poll.aVotes;
    bVotes.textContent = poll.bVotes;

    div.append(optionA, aVotes, optionB, bVotes);

    return div;
}