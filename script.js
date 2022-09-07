// select the button generate jokes
const newJokeBtn = document.querySelector(".new-joke");

// select the link to tweet joke
const tweetBtn = document.querySelector(".tweet");

// select text element to show joke
const textElement = document.querySelector(".text");

// get new joke
async function generateNewJoke() {
  try {
    // make an API requedt to https://icanhazdadjoke.com/
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    //  convert Stringified JSON response to Javascript Object
    let data = await response.json();

    let joke = data.joke;

    // set the joke in text element
    textElement.textContent = joke;

    // create tweet link whit joke
    tweetBtn.href = `https://twitter.com/share?text=${joke}`;
  } catch (error) {
    console.log(error);
    textElement.textContent = "Oops! Some error happened :(";
    tweetBtn.href = "";
  }
}

// add a event to generate joke by user click
newJokeBtn.addEventListener("click", generateNewJoke);
