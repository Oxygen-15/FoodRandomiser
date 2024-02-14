function begin() {
    document.getElementById("loader").style.display = "block";

    setTimeout(function(){
       
        var selectedCuisine = document.getElementById("cuisine").value

    if (selectedCuisine == "Chinese") {
        window.location.href = "chinese.html"
    }
    else if (selectedCuisine == "Malaysian") {
        window.location.href = "malaysian.html"
    }
    else if (selectedCuisine == "Indian") {
        window.location.href = "Indian.html"
    }
    else if (selectedCuisine == "Japanese") {
        window.location.href = "Japanese.html"
    }
    else if (selectedCuisine == "Western") {
        window.location.href = "Western.html"
    }
    }, 1000); 
}

function randomChinese() {
    var randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        document.getElementById("foodName").innerHTML = "Dim Sum"
        document.getElementById("foodImage").setAttribute("src", "dimsum.jpg")
    }
    else if (randomNumber == 1) {
        document.getElementById("foodName").innerHTML = "Fish Soup"
        document.getElementById("foodImage").setAttribute("src", "fish2.jpg")
    }
    else {
        document.getElementById("foodName").innerHTML = "Mala"
        document.getElementById("foodImage").setAttribute("src", "Malaxiangguo.jpg")
    }
}

function randomMalaysian() {
    var randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        document.getElementById("foodName").innerHTML = "Nasi Lemak"
        document.getElementById("foodImage").setAttribute("src", "nasilemak.jpg")
    }
    else if (randomNumber == 1) {
        document.getElementById("foodName").innerHTML = "Lontong"
        document.getElementById("foodImage").setAttribute("src", "lontong.jpg")
    }
    else {
        document.getElementById("foodName").innerHTML = "Laksa"
        document.getElementById("foodImage").setAttribute("src", "Laksa.jpg")
    }
}

function randomIndian() {
    var randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        document.getElementById("foodName").innerHTML = "Butter Chicken"
        document.getElementById("foodImage").setAttribute("src", "butterchicken.jpg")
    }
    else if (randomNumber == 1) {
        document.getElementById("foodName").innerHTML = "Roti Prata"
        document.getElementById("foodImage").setAttribute("src", "prata2.jpg")
    }
    else {
        document.getElementById("foodName").innerHTML = "Garlic Naan"
        document.getElementById("foodImage").setAttribute("src", "Naan.jpg")
    }
}

function randomJapanese() {
    var randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        document.getElementById("foodName").innerHTML = "Cold Soba"
        document.getElementById("foodImage").setAttribute("src", "soba.jpg")
    }
    else if (randomNumber == 1) {
        document.getElementById("foodName").innerHTML = "Sushi"
        document.getElementById("foodImage").setAttribute("src", "sushi.jpg")
    }
    else {
        document.getElementById("foodName").innerHTML = "Yakitori"
        document.getElementById("foodImage").setAttribute("src", "yakitori.jpg")
    }
}

function randomWestern() {
    var randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        document.getElementById("foodName").innerHTML = "Burger"
        document.getElementById("foodImage").setAttribute("src", "burger.jpg")
    }
    else if (randomNumber == 1) {
        document.getElementById("foodName").innerHTML = "Fried Chicken"
        document.getElementById("foodImage").setAttribute("src", "chicken.jpg")
    }
    else {
        document.getElementById("foodName").innerHTML = "Mashed Potato"
        document.getElementById("foodImage").setAttribute("src", "Potato.webp")
    }
}

function backToIndex() {
    window.location.href = "index.html"
}