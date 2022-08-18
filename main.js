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

// Create loop over blocks to add order and flip
blocks.forEach((block,index)=>{

    // Add Css order property
    block.style.order = orderRange[index];

    // Add click Event
    block.addEventListener("click" , function () {
        // Trigger the function
        flipBlock(block);
    })

})

// Create function to shuffle the array
const shuffle = (array) =>{
    let current = orderRange.length,
    temp,
    random;
while (current > 0) {

    random  = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;

}
return array;
}
console.log(shuffle(orderRange));

// Create function to flip blocks
function flipBlock(selectedBlock) {

    // Add css property "is-flipped"
    selectedBlock.classList.add("is-flipped");

    // Get All flipped blocks
    let allFlippedBlocks = blocks.filter(flippedBlock =>{
         return flippedBlock.classList.contains("is-flipped")
        });
    // Check if there is two slected blocks
    if (allFlippedBlocks.length === 2) {
        console.log("yes it is working");
    } else {
        console.log("only 1 or more");
    }

    // prevent more than two flipped

    // Check if the oppened is matching
}
