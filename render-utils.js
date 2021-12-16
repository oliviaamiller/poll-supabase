export function renderPoll(poll) {
    const div = document.createElement('div');
    const optionA = document.createElement('p');
    const aVotes = document.createElement('p');
    const optionB = document.createElement('p');
    const bVotes = document.createElement('p');

    div.classList.add('poll');

    div.append(optionA, aVotes, optionB, bVotes);

    return div;
}