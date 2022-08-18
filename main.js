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

let duration = 1000;

 let blocksContainer = document.querySelector(".memory-game-blocks");
 let blocks = Array.from(blocksContainer.children);

 let orderRange = [...Array(blocks.length).keys()];

 console.log(orderRange);


