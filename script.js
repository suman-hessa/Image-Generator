const searchPrompt = document.querySelector("#search-prompt");
const searchQuantity = document.querySelector("#dropdown");
const submitButton = document.querySelector("#btn");

submitFormAction  = () => {
   let userInput = searchPrompt.value;
   let Quantity = searchQuantity.value;

   console.log(userInput , Quantity);
}


submitButton.addEventListener("click", submitFormAction);