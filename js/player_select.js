

//POPUP
// When the user clicks on div, open the popup
//Boy Character
function popSelectionBoy() {
    var popup = document.getElementById("popupBoy");  //This works
    popup.classList.toggle("show");  //This works
    playersCharacter.length = 0; //Clears any other selections
    playersCharacter.push("plyrBoy");  //This works    Update selection to app.js with character
};
//Cat Girl Character
function popSelectionCatGirl() {
    var popup = document.getElementById("popupCatGirl");  //This works
    popup.classList.toggle("show"); //This works
    playersCharacter.length = 0; //Clears any other selections
    playersCharacter.push("plyrCatGirl"); //This works  Update selection to app.js with character
};
//Horn Girl Character
function popSelectionHornGirl() {
    var popup = document.getElementById("popupHornGirl");  //This works
    popup.classList.toggle("show"); //This works
    playersCharacter.length = 0; //Clears any other selections
    playersCharacter.push("plyrHornGirl"); //This works  Update selection to app.js with character
};

//Pink Girl Character
function popSelectionPinkGirl() {
    var popup = document.getElementById("popupPinkGirl");  //This works
    popup.classList.toggle("show"); //This works
    playersCharacter.length = 0; //Clears any other selections
    playersCharacter.push("plyrPinkGirl"); //This works  Update selection to app.js with character
};

//Princess Girl Character
function popSelectionPrincessGirl() {
    var popup = document.getElementById("popupPrincessGirl");  //This works
    popup.classList.toggle("show"); //This works
    playersCharacter.length = 0; //Clears any other selections
    playersCharacter.push("plyrPrincessGirl"); //This works  Update selection to app.js with character
};

//SEAL Boy Character
function popSelectionSEALBoy() {
    var popup = document.getElementById("popupSEALBoy");  //This works
    popup.classList.toggle("show"); //This works
    playersCharacter.length = 0; //Clears any other selections
    playersCharacter.push("plyrSEALBoy"); //This works  Update selection to app.js with character
};


var playersCharacter = []; //Empty array to store characters pushed in by character seleciton by user.
//var playerSelected = characters;

//Function the clears other character selections
/*
var clearPrevSelection = function() {
    playersCharacter.length = 0;
};
OR
function clearPrevSelection() {
   playersCharacter.length = 0;
};
*/

/*
//SEAL Boy Character
function popSelectionSEALBoy() {
    var popup = document.getElementById("popupSEALBoy");  //This works
    popup.classList.toggle("show"); //This works
    //playersCharacter.length = 0; //This works  //Clears any other selections
    clearPrevSelection; //Clears any other selections
    playersCharacter.push("plyrSEALBoy"); //This works  Update selection to app.js with character
};

*/
