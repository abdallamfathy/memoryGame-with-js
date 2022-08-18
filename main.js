// Get control buttons
let controlButtons = document.querySelector(".control-buttons span");

// Add function to prompt name
controlButtons.onclick = () =>{
    let yourName = prompt("Enter your name please!");
    if (yourName === null || yourName === "") {
        let nameUpdate = document.querySelector(".name span");
        nameUpdate.innerHTML = "unkown";
    } else {
        let nameUpdate = document.querySelector(".name span");
        nameUpdate.innerHTML = yourName;
    }
    let removeControlButtons = document.querySelector(".control-buttons");
    removeControlButtons.remove();
    // Run success audio
    let audioWelcome = document.getElementById("welcome");
    audioWelcome.play();
    
}

// Make duration 1 sec
let duration = 1000;

// Get block container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Get array of blocks from blocks container
let blocks = Array.from(blocksContainer.children);

// Set the range depending on array size
let orderRange = [...Array(blocks.length).keys()];

// Trigger the function that shuffels the array
shuffle(orderRange);


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
function shuffle (array){

        // initialize variables
        let current = orderRange.length,
        temp,
        random;
        // Loop for swapping the array elements
    while (current > 0) {
        
        // Multiply the math random with current to get number inside array
        random  = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    
    }
    return array;
    }
 

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

    // prevent more than two flipped
    stopClicking();

    // Check if the oppened is matching
    checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
    }

    
}

// Create function stopClicking
function stopClicking() {
    // Add class to prevent clicking
    blocksContainer.classList.add("no-clicking");

    // Remove the no clicking class to allow clicking after duration
    setTimeout(() => {
        blocksContainer.classList.remove("no-clicking");
    }, duration);
}

// function hasMatched that check if 2 blocks are matching
function checkMatchedBlocks(firstSelectedBlock,secondSelectedBlock) {
    
    // get the tries span
    let triesElement = document.querySelector(".tries span");

    // check the matches
    if (firstSelectedBlock.dataset.name === secondSelectedBlock.dataset.name) {

        // remove being flipped
        firstSelectedBlock.classList.remove("is-flipped");
        secondSelectedBlock.classList.remove("is-flipped");
        // Add the matching class
        firstSelectedBlock.classList.add("has-match");
        secondSelectedBlock.classList.add("has-match");
        // Run success audio
        let audioSuccess = document.getElementById("success");
        audioSuccess.play();

    } else {

        // Count the wrong tries
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        // remove flipp class after duration
        setTimeout(() => {
            firstSelectedBlock.classList.remove("is-flipped");
            secondSelectedBlock.classList.remove("is-flipped");
        }, duration);

        // Run success audio
        let audioFail = document.getElementById("fail");
        audioFail.play();
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                              //
//                                                                                                                                              //
//                           ////////////////////        //////          //       //           /////                                            //
//                                   ////               //   //          //       //          //   //                                           //
//                                   ////              //    //          //       //         //    //                                           //
//                                   ////             // /// //          //       //        // /// //                                           //
//                                   ////            //      //          //       //       //      //                                           //
//                            ////   ////            //      //            //   //         //      //                                           //
//                            //////////             //      //            //  //          //      //                                           //
//                           ///////////             //      //             //             //      //                                           //
//                                                                                                                                              //
//                                                                                                                                              //
//                                                                                                                                              //
//                  ///////            ////////        ////////         ///////////         ///////        //////////////                       //                                                                                                        
//                  //  ///          //                //     //            //             //     /             //                              //                                                                                                
//                   //             //                 ///////              //             ///////              //                              //                                                                                                
//                    //            //                 //   //              //             //                   //                              //                                                                                                
//                 //  //           //                 //    //             //             //                   //                              //                                                                                                
//                //////            //////////         //     //        ///////////        //                   //                              //                                                                                                
//                                                                                                                                              //
//                                                                                                                                              //
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////