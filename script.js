$(".domain1").click(function() {
    $('html,body').animate({
        scrollTop: $(".domain").offset().top-200},
        'slow');
});//scrolls down to domain
$(".testi").click(function() {
    $('html,body').animate({
        scrollTop: $(".testimonial").offset().top-200},
        'slow');
}); //scrolls down to testimonial
let swip=0;
let link= document.getElementsByClassName("link");
let currval=1;
function prepress(){    // used for pagination and for swiper
    if(currval!=1){
        for(l of link){
            l.classList.remove('active');
        }
        currval--; 
        link[currval-1].classList.add("active");
        link[currval].classList.add("active");
        document.getElementById("swip").style.transform=`translate(${swip+48}%,0)`;
        document.getElementById("swip").style.transition=`all 2s`;
        swip+=48;
    }
}
function menu(){
    if(document.getElementById("menu").style.display=="none")
    document.getElementById("menu").style.display="flex";
    else{
        document.getElementById("menu").style.display="none";
    }
}
function nexpress(){ // used for pagination and for swiper
    if(currval<4){
        for(l of link){
            l.classList.remove('active');
        }
        currval++; 
        link[currval-1].classList.add("active");
        link[currval].classList.add("active");
        document.getElementById("swip").style.transform=`translate(${swip-48}%,0)`;
        document.getElementById("swip").style.transition=`all 2s`;
        swip-=48;
   }
}