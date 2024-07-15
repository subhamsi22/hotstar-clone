

// loader 
var loader = document.getElementById('loader1');
window.addEventListener('load', function() {
    setTimeout(function() {
        loader.style.display = "none";
        document.body.style.background = "#fff";
        document.getElementById('main').style.display = "block";
    }, 3000)
});
//ends 


// display element 
var loki = document.querySelector('.loki');
var yeristadata = document.querySelector('.yeristadata');
var clicka = document.getElementById('myvideoplay');
var bahubalidata = document.querySelector('.bahubalidata');
function fun() {

    setTimeout(() => {
        clicka.src = "video/new.mp4";
        yeristadata.style.display = "block";

        loki.style.display = "none";
        bahubalidata.style.display = "none";


    }, 500)

}
function fun2() {
    setTimeout(() => {
        var links2 = clicka.src = "video/intro.mp4";
        loki.style.display = "block";
        yeristadata.style.display = "none";
        bahubalidata.style.display = "none";

    }, 500);



}
function fun3() {
    setTimeout(() => {
        clicka.src = "video/hotstar-specials-s-s-rajamoulis-baahubali-crown-of-blood-official-trailer-disneyplushotstar.mp4";
        loki.style.display = "none";
        yeristadata.style.display = "none";
        bahubalidata.style.display = "block";
    }, 500);

}





var prv = document.getElementById('prv');
var next = document.getElementById('next');
var slide = document.querySelector('.slide');
var boxes = document.querySelectorAll('.box');

let a = 0;
function myslide() {
    const b = -a * 100;
    slide.style.transform = `translateX(${b}px)`;

}
prv.addEventListener('click', () =>{
    if (a > 0) {
        a--;
        myslide();
    }
});
next.addEventListener('click', () =>{
    if (a < boxes.length - 1) {
        a++;
        myslide();
    }
});





//banner 4 slide 
var prv1 = document.getElementById('prv1');
var next1= document.getElementById('next1');
var slide11 = document.querySelector('.slide1');
var boxes1 = document.querySelectorAll('.box1');

let slide1 = 0;
function myslide1() {
    const bslide = -slide1 * 80;
    slide11.style.transform = `translateX(${bslide}px)`;

}
prv1.addEventListener('click', () => {
    if (slide1  > 0) {
        slide1 --;
        myslide1();
    }
});
next1.addEventListener('click', () => {
    if (slide1 < boxes1.length - 1) {
        slide1 ++;
        myslide1();
    }
});












// audio 

document.getElementById('audio').onclick = function() {
    if (clicka.muted) {
        clicka.muted = false;
    }
    else {
        clicka.muted = true;
    }
}
var myiimg = document.querySelector('.myiimg');

var newimg = document.querySelector('.newimg');
newimg.onclick = function() {
    this.style.display = "none";
    myiimg.style.display = "block";
}
myiimg.onclick = function() {
    this.style.display = "none";
    newimg.style.display = "block";
}


// 3 slidebar 
var prv2 = document.getElementById('prv2');
var next2 =document.getElementById('next2');
var slide2 = document.querySelector('.slide2');
    var boxes2= document.querySelectorAll('.box2');

    let a2 = 0;
    function newslidemy(){
    const b2 = -a2 *80;
    slide2.style.transform = `translateX(${b2}px)`;

    }
    prv2.onclick = function(){
        if(a2 > 0){
            a2--;
            newslidemy();
        }
    }
    next2.onclick = function(){
        if(a2 < boxes2.length -1){
            a2++;
            newslidemy();
        }
    }
// 1st video
    var boxplay0 = document.getElementById('bx0');


    //2nd video unmute
    boxplay0.addEventListener('click',()=>{
        var imgvol0 =  document.getElementById('imv0');
    var mutepng0 =  document.getElementById('mut0');
    let secondvideo0 = document.getElementById('secondvideo0');
    
        if(secondvideo0.muted){
            secondvideo0.muted = false;
            mutepng0.style.display = "block";
            imgvol0.style.display ="none";
    
      
        }
        else{
            secondvideo0.muted = true;
            mutepng0.style.display = "none";
            imgvol0.style.display ="block";
        }
    
    
    });


var boxplay = document.getElementById('bx');


//2nd video unmute
boxplay.addEventListener('click',()=>{
    var imgvol =  document.getElementById('imv');
var mutepng =  document.getElementById('mut');
let secondvideo = document.getElementById('secondvideo');

    if(secondvideo.muted){
        secondvideo.muted = false;
        mutepng.style.display = "block";
        imgvol.style.display ="none";

  
    }
    else{
        secondvideo.muted = true;
        mutepng.style.display = "none";
        imgvol.style.display ="block";
    }


});
//3rd video unmute 
var boxplay1 = document.getElementById('bx1');

boxplay1.addEventListener('click',()=>{
    var secondvideo1 = document.getElementById("secondvideo1");
    var imgvol1 =  document.getElementById('imv1');
    var mutepng1 =  document.getElementById('mut1');
    if(secondvideo1.muted){
        secondvideo1.muted = false;
        mutepng1.style.display = "block";
        imgvol1.style.display ="none";
    }
    else{
        secondvideo1.muted = true;
        mutepng1.style.display = "none";
        imgvol1.style.display ="block";
    }
});
//4th video 
var boxplay2 = document.getElementById('bx2');

boxplay2.addEventListener('click',()=>{
    var imgvol2 =  document.getElementById('imv2');
var mutepng2 =  document.getElementById('mut2');
let secondvideo2 = document.getElementById('secondvideo2');

    if(secondvideo2.muted){
        secondvideo2.muted = false;
        mutepng2.style.display = "block";
        imgvol2.style.display ="none";

  
    }
    else{
        secondvideo2.muted = true;
        mutepng2.style.display = "none";
        imgvol2.style.display ="block";
    }


});
//5th video 
var boxplay3 = document.getElementById('bx3');

boxplay3.addEventListener('click',()=>{
    var imgvol3=  document.getElementById('imv3');
var mutepng3 =  document.getElementById('mut3');
let secondvideo3 = document.getElementById('secondvideo3');

    if(secondvideo3.muted){
        secondvideo3.muted = false;
        mutepng3.style.display = "block";
        imgvol3.style.display ="none";

  
    }
    else{
        secondvideo3.muted = true;
        mutepng3.style.display = "none";
        imgvol3.style.display ="block";
    }


});
//6th video 
var boxplay4 = document.getElementById('bx4');

boxplay4.addEventListener('click',()=>{
    var imgvol4 =  document.getElementById('imv4');
var mutepng4 =  document.getElementById('mut4');
let secondvideo4 = document.getElementById('secondvideo4');

    if(secondvideo4.muted){
        secondvideo4.muted = false;
        mutepng4.style.display = "block";
        imgvol4.style.display ="none";

  
    }
    else{
        secondvideo4.muted = true;
        mutepng4.style.display = "none";
        imgvol4.style.display ="block";
    }


});
//7th video
var boxplay5 = document.getElementById('bx5');

boxplay5.addEventListener('click',()=>{
    var imgvol5 =  document.getElementById('imv5');
var mutepng5 =  document.getElementById('mut5');
let secondvideo5 = document.getElementById('secondvideo5');

    if(secondvideo5.muted){
        secondvideo5.muted = false;
        mutepng5.style.display = "block";
        imgvol5.style.display ="none";

  
    }
    else{
        secondvideo5.muted = true;
        mutepng5.style.display = "none";
        imgvol5.style.display ="block";
    }


});
//8th video 
var boxplay6 = document.getElementById('bx6');

boxplay6.addEventListener('click',()=>{
    var imgvol6 =  document.getElementById('imv6');
var mutepng6 =  document.getElementById('mut6');
let secondvideo6 = document.getElementById('secondvideo6');

    if(secondvideo6.muted){
        secondvideo6.muted = false;
        mutepng6.style.display = "block";
        imgvol6.style.display ="none";

  
    }
    else{
        secondvideo6.muted = true;
        mutepng6.style.display = "none";
        imgvol6.style.display ="block";
    }


});


//2nd part 1video


var boxplay11 = document.getElementById('bx11');

boxplay11.addEventListener('click',()=>{
    var imgvol11 =  document.getElementById('imv11');
var mutepng11 =  document.getElementById('mut11');
let secondvideo11 = document.getElementById('secondvideo11');

    if(secondvideo11.muted){
        secondvideo11.muted = false;
        mutepng11.style.display = "block";
        imgvol11.style.display ="none";

  
    }
    else{
        secondvideo11.muted = true;
        mutepng11.style.display = "none";
        imgvol11.style.display ="block";
    }


});

// 2nd part 2nd video 
var boxplay12 = document.getElementById('bx12');

boxplay12.addEventListener('click',()=>{
    var imgvol12 =  document.getElementById('imv12');
var mutepng12 =  document.getElementById('mut12');
let secondvideo12 = document.getElementById('secondvideo12');

    if(secondvideo12.muted){
        secondvideo12.muted = false;
        mutepng12.style.display = "block";
        imgvol12.style.display ="none";

  
    }
    else{
        secondvideo12.muted = true;
        mutepng12.style.display = "none";
        imgvol12.style.display ="block";
    }


});
//2nd conatiner 3rd video 
var boxplay13 = document.getElementById('bx13');

boxplay13.addEventListener('click',()=>{
    var imgvol13 =  document.getElementById('imv13');
var mutepng13 =  document.getElementById('mut13');
let secondvideo13 = document.getElementById('secondvideo13');

    if(secondvideo13.muted){
        secondvideo13.muted = false;
        mutepng13.style.display = "block";
        imgvol13.style.display ="none";

  
    }
    else{
        secondvideo13.muted = true;
        mutepng13.style.display = "none";
        imgvol13.style.display ="block";
    }


});


//2nd part 4th video
var boxplay14 = document.getElementById('bx14');

boxplay14.addEventListener('click',()=>{
    var imgvol14 =  document.getElementById('imv14');
var mutepng14 =  document.getElementById('mut14');
let secondvideo14 = document.getElementById('secondvideo14');

    if(secondvideo14.muted){
        secondvideo14.muted = false;
        mutepng14.style.display = "block";
        imgvol14.style.display ="none";

  
    }
    else{
        secondvideo14.muted = true;
        mutepng14.style.display = "none";
        imgvol14.style.display ="block";
    }


});

//2nd part 5th video 
var boxplay15 = document.getElementById('bx15');

boxplay15.addEventListener('click',()=>{
    var imgvol15 =  document.getElementById('imv15');
var mutepng15 =  document.getElementById('mut15');
let secondvideo15 = document.getElementById('secondvideo15');

    if(secondvideo15.muted){
        secondvideo15.muted = false;
        mutepng15.style.display = "block";
        imgvol15.style.display ="none";

  
    }
    else{
        secondvideo15.muted = true;
        mutepng15.style.display = "none";
        imgvol15.style.display ="block";
    }


});

//2nd part 6th video 
var boxplay16 = document.getElementById('bx16');

boxplay16.addEventListener('click',()=>{
    var imgvol16 =  document.getElementById('imv16');
var mutepng16 =  document.getElementById('mut16');
let secondvideo16 = document.getElementById('secondvideo16');

    if(secondvideo16.muted){
        secondvideo16.muted = false;
        mutepng16.style.display = "block";
        imgvol16.style.display ="none";

  
    }
    else{
        secondvideo16.muted = true;
        mutepng16.style.display = "none";
        imgvol16.style.display ="block";
    }


});

var clickame = document.getElementById('clickame');
clickame.onclick = function(){
    let secondvideo16 = document.getElementById('secondvideo16');
    let videosrc= secondvideo16.src;
    var a = document.createElement('a');
    a.href=videosrc;
    a.download ="video.mp4";
   
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    

}; 