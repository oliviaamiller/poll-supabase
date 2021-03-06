const SUPABASE_URL = 'https://muqcnskpycwzulcqtssq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY3ODI0MiwiZXhwIjoxOTU1MjU0MjQyfQ.YuQgmIqcc4fnbcvXYFvARasJbp47y0LykRMYteRtA04';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    console.log(client.auth.user(), 'after');

    return response.user;
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select();

    
    return response.data;
}

export async function createPoll(question, optionA, optionB, aVotes, bVotes) {
    const response = await client
        .from('polls')
        .insert([
            {
                question: question, 
                optionA: optionA, 
                optionB: optionB,
                aVotes: aVotes,
                bVotes: bVotes,
                user_id: client.auth.user().id
            }
        ]);

    console.log(response.data);
    return response.data;
}



export async function checkUser() {
    const user = await client.auth.session();

    if (!user) window.location.replace('../'); 
    
    return user.data;
}


