const  beerForm = document.querySelector('BeerForm')

beerForm.addEventListener('submit', event =>{
    event.preventDefault();
    const beerFormData = new beerFormData(beerForm);
    const data = Object.fromEntries(beerFormData);
    fetch('https://beersapc.onrender.com/api_productname/v1/beers/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
});