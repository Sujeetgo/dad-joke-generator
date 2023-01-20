const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "kJCW8F1KLm4WhxNY4N4nbQ==539J192mlhr8AvaF";
const options = {
    method:"GET",
    headers: {
         'X-Api-Key': apiKey,
        },
}
const BASE_URL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
 const  getJoke = async()=>{
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const res =  await fetch(BASE_URL,options);
        const data = await res.json();
        jokeEl.innerText = data[0].joke;
        btnEl.disabled = false;
        btnEl.innerText = "tell me a joke";
        // console.log(data[0].joke)
        // console.log("clicked");
        
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        jokeEl.style.color = "red";

    }
    
}

btnEl.addEventListener("click", getJoke);