# gsap-tutorial
we have 2 option here to start with gsap 
<p>gsap.to()=> when we use to, it animates the object from initial orientation to the final orientation written in the gsap code</p>
<p>gsap.from()=> when we use from, it animates the object from thw orientation specified in gsap to its inital position</p>
<hr>
<h2>stagger</h2>

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/79725365-aae3-4206-90bc-e6a4a688dd0a)

<p>Suppose we have multiple h1 and we want to apply the animation on each one by one so we use stagger</p>
stagger:1 this means that each element will take 1second each for the animation. can be neagtive also so will work in reverse order.
<h2>Repeat</h2>
repeat will repeat the animation 
<p><strong>repeat:n</strong></p>
<p>here animation will be done  n+1 times where n>1</p>
<p>if n=negative then infinite</p>
<p>but it always animate in one direction</p>
so to make it work bidirectionally set <strong>yoyo:true</strong>
<h2>time line</h2>
when a time line is created the all the gsap created using that timeline will work in sequence one after another 

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/2c69c015-af43-4e3e-8958-4e6e1b756e5c)
