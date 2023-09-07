function openDoor(){
    document.getElementById("imgStatus").src = "/momo.webp";
    document.getElementById("myDoor").innerHTML = "The Door is OPEN!";
    
}

function closeDoor(){
    document.getElementById("imgStatus").src = "/creepydoor.jpg";
    document.getElementById("myDoor").innerHTML = "The Door is CLOSE!";
}