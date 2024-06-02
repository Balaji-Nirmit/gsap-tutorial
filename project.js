var main =document.querySelector("body")
var cursor=document.querySelector("#cursor")
var image=document.querySelector("#image")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        opacity:1,
        ease:"back.out"
    })
});
image.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more";
    gsap.to(cursor,{
        scale:4
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1
    })
})
// side menu

var open=document.querySelector("#open i")
var close=document.querySelector("#close i")
var navigation=document.querySelector("#navigation")
var tl=gsap.timeline()
tl.to(open,{
    opacity:0,
    scale:0,
})
tl.to(navigation,{
    x:0,
    opacity:1,
    duration:0.4,
})
tl.from(`#navigation h2`,{
    x:-60,
    opacity:0,
    stagger:0.2
})
tl.pause()

open.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse();
})

// main heading animation
var h1=document.querySelector("#text h1")
var h1text=h1.textContent
var clutter=""
var splitedtext=h1text.split("")
splitedtext.forEach(function(e,index){
    if(index<=splitedtext.length/2){
            clutter+=`<span class="a">${e}</span>`}
    else{
        clutter+=`<span class="b">${e}</span>`
    }
});

h1.innerHTML=clutter
//this will convert <h1>hello</h1> to 
//                         <span>h</span>
//                         <span>e</span>
//                         <span>l</span>
//                         <span>l</span>
//                         <span>o</span>

gsap.from("#text .a",{
    delay:0.5,
    y:50,
    stagger:0.2,
    opacity:0
    // note that span is inline element and y will not work directly on it since it transform translate y so check css
})
gsap.from("#text .b",{
    delay:0.5,
    y:50,
    stagger:-0.2,
    opacity:0
    // note that span is inline element and y will not work directly on it since it transform translate y so check css
})