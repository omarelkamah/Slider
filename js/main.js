// Creat Some Vars
var myImages = Array.from(document.querySelectorAll(".slider-container img")), // get array from the img

    myImagesLength = myImages.length,

    myNumber = 1, // creat number who pigining

    sliderNumber = document.getElementById("slide-number"), // get the element who curent the number of img

    nextButton = document.getElementById("next"), // get the next button

    prevButton = document.getElementById("prev"); // get the prev button



// make next, prev button make change if you click hear
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat the Element (list ul)
var createElementUl = document.createElement("ul");

// Set Attribute to (ul)
createElementUl.setAttribute("id", "pagination-ul");

// Creat li by loop
for (var i = 1; i <= myImagesLength; i++) {

    // Set the element (li)
    var createElementLi = document.createElement("li");

    // add attribute to element (li)
    createElementLi.setAttribute("data-index", i)

    // add text to li element
    createElementLi.appendChild(document.createTextNode(i));

    // add (li) to (ul)
    createElementUl.appendChild(createElementLi);
}

// add (ul) to the span(indicators)
document.getElementById("indicators").appendChild(createElementUl);

// get ul By id 
var getCreatedElementUl = document.getElementById("pagination-ul");

// create array from (ul list)
var createArrayUl = Array.from(document.querySelectorAll("#pagination-ul li"));

// creat loop to bullets
for (var i = 0; i < createArrayUl.length; i++) {

    createArrayUl[i].onclick = function () {

        myNumber = parseInt(this.getAttribute("data-index"));

        checker();
    }
}

// play the checker function
checker();


// Creat the function next and prev slide
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        myNumber++;
        checker();
    }
    
}
function prevSlide() {

    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        myNumber--;
        checker();
    }

}

// Creat the function checker
function checker() {

    // modifing the (sliderNumber)
    sliderNumber.textContent = "slide # " + (myNumber) + " of " + (myImagesLength);

    // play the remove function
    removeActive();

    // add class (active) to the (img)
    myImages[myNumber - 1].classList.add("active");

    // add class (active) to the (bullets)
    createElementUl.children[myNumber - 1].classList.add("active");

    // check if slide number is the first
    if (myNumber === 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }

    // check if slide number is the last
    if (myNumber === myImagesLength) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}


// creat the function who remove (active) class
function removeActive() {
    myImages.forEach(function (img) { 

        img.classList.remove("active");
    });

    createArrayUl.forEach(function (bullets) {

        bullets.classList.remove("active");
    })
}
