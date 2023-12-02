const btn = document.getElementById('btn');
const joke = document.getElementById('joke');
const url = 'https://v2.jokeapi.dev/joke/Programming,Christmas';

let getJoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((item) => {
      joke.textContent = `${item.joke}`;
    })
    .catch((error) => {
      console.log(error);
      joke.textContent = 'Failed to fetch. Please try again :)';
    });
};
getJoke();
btn.addEventListener('click', getJoke);
