// Write your code here
let bulb1 = document.querySelector("#lightbulb1");
console.log(bulb1)

let bulb2 = document.querySelector("#lightbulb2");
console.log(bulb2)

let bulb3= document.querySelector("#lightbulb3");
console.log(bulb3)

let subtitle = document.querySelector(".subtitle");
console.log(subtitle)

let count = 0; 

bulb1.addEventListener('click', function(){
     count++; 
     subtitle.innerHTML = `You've clicked the lights ${count} times`
     //let light1 = document.getElementsByClassName(".item lightbulb active"); 
    this.classList.toogle("active")
})
bulb2.addEventListener('click', function(){
     count++; 
     subtitle.innerHTML = `You've clicked the lights ${count} times`
     //let light2 = document.getElementsByClassName(".item lightbulb"); 
    this.classList.toogle("active")
})
bulb3.addEventListener('click', function(){
     count++; 
     subtitle.innerHTML = `You've clicked the lights ${count} times`
     //let light3 = document.getElementsByClassName(".item lightbulb"); 
     this.classList.toogle("active")
})
