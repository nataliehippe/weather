
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageSecond = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = "Loading..."
    messageSecond.textContent = "";

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            
            if (data.error) {
                messageOne.textContent = "Unable to find forecast!!!";
            }else if(data.lenght===0 || data.errorMessage){
                messageOne.textContent="Please, fill the correct location.";
            }
            else {
                messageOne.textContent = data.location;
                messageSecond.textContent = data.forecast;
            }
        });
    });
});