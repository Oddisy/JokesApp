// getting all elements from dom
const myType = document.querySelector(".type");
const mySetup = document.querySelector('.setup');
const button = document.querySelector('button');
 const myPunchline = document.querySelector('.punchline');
 const myError = document.querySelector(".error")
//  function to remove error from the dom 
const removeError = () => {
  setInterval(() => {
    myError.textContent = "";
  }, 4000);
}
// The link of the API endpoint to fetch a random joke
const apiUrl = "https://official-joke-api.appspot.com/random_joke";
async function jokeApi() {
    try{
        // get datas from the API
        const request = await fetch(apiUrl);
        let response = await request.json();
        // updating the dom elements with datas from the Api
        myType.textContent = `JOKE TYPE: ${response.type} `
        mySetup.textContent = response.setup
        myPunchline.textContent = response.punchline
        console.log(myType.innerHtml)
        // return Api response
        return response;
    }
    catch(error){
        myError.textContent = "Failed to load, try again later"
    }
}

button.addEventListener('click', () => { 
     jokeApi();
     removeError()
});