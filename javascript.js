var numberofFaces = 5;

var theLeftSide = document.getElementById("leftside");

var theRightSide = document.getElementById("rightside");

var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
    for(var i = 0; i < numberofFaces; i++){
        var image = document.createElement("img");

        image.src = "http://66.media.tumblr.com/c79bc969ad2afce1700cf0a8c8e96194/tumblr_nrfpdgu5kF1uuqttlo2_250.png";

        image.style.top = (Math.random() * 400 + "px");
        image.style.left = (Math.random() * 400 + "px");

        theLeftSide.appendChild(image);
    }
//this var will clone the image on the left side
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.childNodes[leftSideImages.childNodes.length - 1]);
    theRightSide.appendChild(leftSideImages);

//lastchild generates the extra image to the left side
    theLeftSide.lastChild.onclick =
        function nextLevel(event){
            event.stopPropagation();
            numberofFaces += 5;
            generateFaces()
        };
//when the wrong image is clicked, the user will receive this pop up
    theBody.onclick = function gameOver() {
        alert("Game Over!");

        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };


 }
generateFaces();
