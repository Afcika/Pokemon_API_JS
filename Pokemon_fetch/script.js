async function fetchData() {
  try {
    const pokemonName = document.getElementById("name").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const notfound = document.getElementById("notfound");


    if(pokemonName===""){
      notfound.textContent='Enter valid name';
      return;
    }
    
    if (!response.ok) {
      notfound.textContent='Pokemon Not Found';
      throw new Error('Network response was not ok');

    }
    else{
      notfound.textContent='';
    }

    const data = await response.json();
    console.log(data);

    const maincard = document.getElementById("maincard");
    maincard.style.visibility="visible";

    const pokemonsprite = data.sprites.front_default;
    const imgelement = document.getElementById("pokemonsprite");
    imgelement.src=pokemonsprite;
   

    const pokename = data.name;
    const petname = document.getElementById("petname");
    petname.textContent=pokemonName;

    const pokeheight = data.height;
    const petheight = document.getElementById("height");
    petheight.textContent=pokeheight;

    const pokeexperiance = data.base_experience;
    const petexperiance = document.getElementById("experiance");
    petexperiance.textContent=pokeexperiance;

    const pokeweight = data.weight;
    const petweight = document.getElementById("weight");
    petweight.textContent=pokeweight;

  } 
  
  catch(error) {
    console.error(error);
  }
}

