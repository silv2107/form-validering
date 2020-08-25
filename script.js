let form = document.getElementsByTagName("form")[0];
let inputFields = document.querySelectorAll(".inputField");


form.addEventListener("submit", event=>{
    // blocks submit of form
    event.preventDefault();

    // sets a variable that will either be true and continue or false and block further script
    let status = true;

    // loops through each inputfield
    inputFields.forEach(function(inputField){

        // creates the variable, statusMessage, for each inputfield
        let statusmessage = inputField.querySelector(".statusMessage");
        
        // resets the inner text of each status message to empty after reloading the page
        statusmessage.innerText = "";

        // creates the variable, input, for each inputfield 
        let input = inputField.querySelector("input");

        // checks for each input in every inputfield, that have the required attribute and that are empty (validating)
        if(input.hasAttribute("required") && input.value == ""){
            // response if input is empty - status false 
            status = false;
            // message that validates
            statusmessage.innerText = "Du skal udfylde " + input.name;
        }
    })
    // block further running if status is false
    if(!status){
        // block - out of function
        return;
    }
})


