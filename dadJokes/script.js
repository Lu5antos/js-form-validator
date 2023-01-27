const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const jokeUrl = "https://icanhazdadjoke.com";

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(jokeUrl, config);

  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// Using  .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch(jokeUrl, config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
