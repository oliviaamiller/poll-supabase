SIGN IN / SIGN UP PAGE

html:

- sign up div
  - form, username input, password input, button

- sign in div
  - form, username input, password input, button


events: 

- on sign in
  - once the user 'submit's form ...
    - get the username and password from the form 
    - 'log in the user'
      - consult supabase docs to log in 
  - redirect user to the protected page with their data

  - on sign up 
    - once the user 'submit's form ...
      - get the username and password from the form 
      - 'log in the user'
        - consult supabase docs for sign up
      - redirect user to the protected page with their data


POLLS PAGE

html:

- div for current poll
  - new form for poll
  - buttons to add and subtract votes

- div for past polls


events:

- on load
  - go fetch all this user's past polls
  - display them 

- on click vote
  - increment or decrement the state of the vote for that option
  - display the change

- on submit
  - grab the dom for the current poll, then inject the question and options into the corresponding dom elements

- on click of finish poll
  - take the current poll state and add it to past polls in supabase
  - re-fetch the polls from supabase and redisplay in the list (clear, render, append)


