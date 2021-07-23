const burgerApi =document.querySelector('.viewport')
const button=document.querySelector('.button')

function getDisplay () {
    fetch("https://my-burger-api.herokuapp.com/burgers", {
	"method": "GET",
})

.then(response =>response.json())
.then(data => {
    const number = Math.random()*data.length;
    const roundedNumber = Math.floor(number); 

    const output = data[roundedNumber].name
    console.log(output);
    burgerApi.innerHTML=output;   
})

}

button.addEventListener('click',getDisplay)