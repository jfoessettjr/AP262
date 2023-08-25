const beerForm = document.querySelector("#beerForm");
if(beerForm) {
    beerForm.addEventListener("submit", function(e) {
        submitForm(e, this);
    });
}

async function submitForm(e, form) {
    e.preventDefault();
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    const jsonFormData = buildJsonFormData(form);
    const headers = buildHeaders();
    const response = await fetchService.performPostHttpRequest(`https://beersapc.onrender.com/api_productname/v1/beers`, headers, jsonFormData);
    console.log(response);
    if(response)
        window.location = `/success.html?beer=${response.beer}&abv=${response.abv}&style=${response.style}$brewery=${response.brewery}`;
    else
    alert(`An Error Occured.`);
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}

async function performPostHttpRequest(fetchlink, headers, body) {
    if(!fetchlink || !headers || !body) {
        throw new Error ("One or more POST request parameters was not passed.");
    }
    try {
        const rawResponse = await fetch(fetchlink, {
            method:'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        return content;
    }
    catch(err) {
        console.error(`Error at fetch POST: ${err}`);
        throw err;
    }
}