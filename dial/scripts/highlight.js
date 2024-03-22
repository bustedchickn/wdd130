i = 0;
// while(i < 7){
    
    
//     setTimeout(()=>{document.getElementById("shufflelist" + i).classList.toggle("show");}, 1000);
//     i++;
// }
toggle = function(){
    document.getElementById("shufflelist" + i).classList.toggle("show");
    // setTimeout(toggleoff, 1000);
}
toggleoff = function(){
    document.getElementById("shufflelist" + i).classList.toggle("show");
    // setTimeout(toggle, 1000);
    i= (i+1)%7;
}

toggleInterval = setInterval(toggle,2000)
toggleOffInterval = setTimeout(()=>{setInterval(toggleoff,2000)},1000)
// toggle();
// window.onclick = function(event) {
//     setTimeout(toggle, 1000);
    
// }


