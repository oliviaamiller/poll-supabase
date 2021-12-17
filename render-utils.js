export function renderPoll(poll) {
    const pollDiv = document.createElement('div');
    const questionP = document.createElement('p');
    const optionA = renderOption(poll.optionA, poll.aVotes);
    const optionB = renderOption(poll.optionB, poll.bVotes);

    questionP.textContent = poll.question;
    questionP.classList.add('question');
    
    pollDiv.append(questionP, optionA, optionB);

    pollDiv.classList.add('poll');

    return pollDiv;

}


export function renderOption(option, vote) {
    const optionDiv = document.createElement('div');
    const optionP = document.createElement('p');
    const voteP = document.createElement('p');

    optionP.textContent = option;
    voteP.textContent = vote;


    optionDiv.append(optionP, voteP);

    return optionDiv;
}