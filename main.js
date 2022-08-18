let controlButtons = document.querySelector(".control-buttons span");
controlButtons.onclick = () =>{
    let yourName = prompt("Enter your name please!");
    if (yourName === null || yourName === "") {
        let nameUpdate = document.querySelector(".name span");
        nameUpdate.innerHTML = "unkown";
    } else {
        let nameUpdate = document.querySelector(".name span");
        nameUpdate.innerHTML = yourName;
    }
    let removeControlButtons = document.querySelector(".control-buttons").remove();
}




