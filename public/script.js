'use strict';

// Functions to insert the cat breeds
var catbreeds = [];

class catbreed {
    constructor(name,description,image) {
        this.name = name
        this.description = description
        this.image = image
        catbreeds.push(this)
    }
};

new catbreed('Siamese', 'Oriental cats with long lifespans','images/siamese.jpg')
new catbreed('Housecat', 'A mixed race cat, most common type of cat','images/housecat.jpg')

function refreshbreeds() {
    catbreeds.forEach(element => {
        var imgdiv = "<div class='breedimg'> <img class='imgclass' src='"+ element.image + "'></div><br>"
        var namediv = "<div class='breedname'>" + element.name + "</div><br>"
        var desdiv = "<div class='breeddes'>" + element.description + "</div><br>"
        $('.Breeds').append("<div class='breed'>" + imgdiv + namediv + desdiv + "</div>")
    });
}

refreshbreeds()


$('.breedinsert').click(function () {
    var newbrname = $('.newbreedname').val()
    var newbrdes = $('.newbreeddes').val()
    var newbrpic = $('.newbreedpic').val()
    if (newbrname.length < 1 && newbrdes.length < 1 && newbrpic.length < 1) {
        alert("Please insert a breed name, description, and upload an image")
    } else if (newbrname.length < 1 && newbrdes.length < 1) {
        alert("Please insert a breed name and description")
    } else if (newbrname.length < 1) {
        alert("Please insert a breed name")
    } else if (newbrdes.length < 1) {
        alert("Please insert a breed description")
    } else {
        new catbreed(newbrname, newbrdes,newbrpic)
        $('.breeds').text('')
        $('.newbreeddes').val('')
        $('.newbreedname').val('')
        $('.newbreedpic').val('')
        refreshbreeds()
    }
});