console.log("hi");

const button = document.querySelector("button");

const getCountryByName = (countryName) => {
    countryName.preventDefault();

    console.log("Country button pressed");
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
        console.log(response); 
        return Response.json();                         
    })
}

button.addEventListener('click', getCountryByName);

