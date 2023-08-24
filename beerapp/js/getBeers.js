const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if(data.beer == "" || data.abv == "" || data.style == "" || data.brewery == "" ) {
        $.toaster({ priority :'danger', title:'Error', message:'Oops something went wrong and did not save'});
    }
    else {
        fetch('https://beersapc.onrender.com/api_productname/v1/beers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({ priority:'success', title:'Beers', message:'New Beer added'})
    }
})