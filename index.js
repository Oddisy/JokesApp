// getting all elements from dom
const myType = document.querySelector(".type");
const mySetup = document.querySelector('.setup');
const button = document.querySelector('button');
 const myPunchline = document.querySelector('.punchline');
 const myError = document.querySelector(".error")
 const myLoading = document.querySelector(".loading")

const removeLoading = () => {
  setInterval(() => {
    if(myType.textContent !== ""){
      myLoading.style.display = "none"
    }
  }, 500);
}
const removeCustomError = () =>{
    myError.textContent = ""
  }
  document.addEventListener("DOMContentLoaded", removeLoading )

const loading = () =>{
  if(myType.textContent === ""){
myLoading.textContent = "loading..."
myError.textContent = ""
  }else{
  removeLoading()
  }
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
        removeCustomError()
        // return Api response
        return response;
    }
    catch(error){
        myError.textContent = "Failed to load, Please check your internet connection, and try again."
    myLoading.textContent = ""
    }
}

button.addEventListener('click', () => {
      loading();
     jokeApi();
     removeLoading();
});