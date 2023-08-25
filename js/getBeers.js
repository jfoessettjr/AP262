fetch("https://beersapc.onrender.com/api_productname/v1/beers").then((data)=>{
    //console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].id);
    let beerData="";
    objectData.map((values)=>{
        beerData+=`<tr>
        <td>${values.beer}</td>
        <td>${values.abv}</td>
        <td>${values.style}</td>
        <td>${values.brewery}</td>
        <td>${values.beerId}/<td>
      </tr>`;
    });
    document.getElementById("beer_body").innerHTML=beerData;
}).catch((err)=>{
    console.log(err);
})