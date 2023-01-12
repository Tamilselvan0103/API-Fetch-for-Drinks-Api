async function punkapi(){
    try{
      
    let img = await fetch("https://api.punkapi.com/v2/beers")
    let response = await img.json();
    console.log(response)
    response.forEach((element) => {
        displayInfo(element)
    });
    }catch(error)
    {
      console.log(error)
    }
    }
    punkapi()

    function displayInfo(element){
        let col = document.getElementById("mainrow")
        col.innerHTML +=`
        <div class = "container col-sm" id = "main">
        <div class="card" style="width: 18rem; height : 30rem" id ="maincard">
        <div class = "card-header" id = "head"><p>${element.name}</p></div>
        <img src="${element.image_url}" class="card-img-top img-thumbnail" id="img"alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.tagline}</h5>
          <p class="card-text"><span>Description : </span>${element.description}</p>
        </div>
        </div>
        </div>
        
        
        `
      }