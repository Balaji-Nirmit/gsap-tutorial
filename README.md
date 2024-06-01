# gsap-tutorial
we have 2 option here to start with gsap 
<p>gsap.to()=> when we use to, it animates the object from initial orientation to the final orientation written in the gsap code</p>
<p>gsap.from()=> when we use from, it animates the object from thw orientation specified in gsap to its inital position</p>
<hr>
<h2>stagger</h2>
gsap.from('h1',{
    y:30,
    opacity:0,
    duration:1,
    delay:2,
    stagger:1
}) 
<p>Suppose we have multiple h1 and we want to apply the animation on each one by one so we use stagger</p>
stagger:1 this means that each element will take 1second each for the animation. can be neagtive also so will work in reverse order.
