let myspace = document.querySelector('.myspaceloginbox');
let buttonmyspace = document.querySelector('.buttonmyspace');
var cut = document.getElementById('cut');
var dis = document.getElementById('dis');
var hover = document.getElementById('hover');

var singup = document.querySelector('.singup');
var parent = document.querySelector('.parent');
var parent2 = document.querySelector('.parent2');
var hover1 = document.getElementById('hover1');

var singin = document.querySelector('.singin');
let final;

// myspace login 

buttonmyspace.onclick = function () {


    myspace.style.display = "block";
}
cut.onclick = function () {
    myspace.style.display = "none";

}




//input aniamtion 

hover.addEventListener('focus', () => {
    dis.style.display = "block";
});

hover.addEventListener("blur", () => {
    dis.style.display = "none";

});

hover.addEventListener('input', () => {
    if (hover.value.length == 10) {
        singup.style.display = "block";
    }
    else {
        singup.style.display = "none";

    }
});

// sing up block 


singup.onclick = function () {
    parent.style.display = "none";
    parent2.style.display = "block";

    // this part is for store the data 

    var aaa = hover.value;
    final = aaa;
    alert("yeah sing up sucess please login");





    //

}

// sing in block 

hover1.addEventListener('input', () => {
    if (hover1.value.length == 10) {
        singin.style.display = "block";
    }
    else {
        singin.style.display = "none";

    }
});
// log in data 
singin.onclick = function () {
    var conformation = hover1.value;

    if (conformation === final) {
        window.location.href = "home.html";
    }
    else {
        alert("please singup again");
        window.location.href = "index.html";

    }
}


var subham = 'hi this is suubham ';
console.log(subham);


