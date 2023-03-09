// Write your JavaScript code here!

window.addEventListener("load", ()=> {  
    const form = document.querySelector("Form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
    
    let pilot = document.querySelector();
    let copilot = document.querySelector();
    let fuelLevel = document.querySelector();
    let cargoLevel = document.querySelector();
    let 
    
    
    })

   let listedPlanets = myFetch()
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});