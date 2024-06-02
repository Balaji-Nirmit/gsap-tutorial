gsap.to("#box1",{
    x:1000,
    y:300,
    duration:2,
    delay:2,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
})

gsap.from('#box2',{
    x:1000,
    y:300,
    duration:2,
    delay:2,
    rotate:360,
    backgroundColor:"red",
})
gsap.from('h1',{
    y:30,
    opacity:0,
    duration:1,
    delay:2,
    stagger:1,
    repeat:-1,
    yoyo:true
})
// #timeline
var tl=gsap.timeline()
tl.to('#box3',{
    x:1000,
    duration:2,
    rotate:360,
    repeat:-1,
    yoyo:true
})
tl.to('#box4',{
    x:1000,
    duration:2,
    rotate:360,
    repeat:-1,
    yoyo:true
})
tl.to('#box5',{
    x:1000,
    duration:2,
    rotate:360,
    repeat:-1,
    yoyo:true
})

// creating animation for nav bar using timeline
var navtl=gsap.timeline()
navtl.from('#navleft',{
    y:-30,
    opacity:0,
    duration:0.5,
})
navtl.from('#n1',{
    y:-30,
    opacity:0,
    duration:0.5,
})
navtl.from('#n2',{
    y:-30,
    opacity:0,
    duration:0.5,
})
navtl.from('#n3',{
    y:-30,
    opacity:0,
    duration:0.5,
})
navtl.from('#n4',{
    y:-30,
    opacity:0,
    duration:0.5,
})
// scrolltrigger.html starts

gsap.from("#a",{
    rotate:720,
    opacity:0,
    scale:0,
    duration:2,
    delay:1
})
gsap.from("#b",{
    rotate:720,
    opacity:0,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:"#pageb #b",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:2
    }
})
// experience animation
gsap.to("#pagec h2",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#pagec",
        scroller:"body",
        markers:true,
        start:"top top",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

// svg.html
var path=`M 10 100 Q 500 100 990 100`;
var finalPath=`M 10 100 Q 500 100 990 100`;
var svg=document.querySelector("#pagee");
svg.addEventListener("mousemove",function(dets){
    path=`M 10 80 Q ${dets.x} ${dets.y} 990 80`
    gsap.to("#pagee svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

svg.addEventListener("mouseleave",function(dets){
    gsap.to("#pagee svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(2,0.2)"
    })
})