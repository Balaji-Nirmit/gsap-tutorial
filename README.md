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

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/0bbd3170-aa86-43e6-a53e-547e451258fb)


<hr>

<h2>Scrolltrigger</h2>

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/e14df076-906d-4656-b444-680d1c541005)

here important is <strong>scrub</strong>

<p>scrub takes either true or false or from 1 to 5</p>
what happens is that when we use scroltrigger the animation completes itself even when start line is touched so scrub distributes the animation throughout the start-end area and based on number from 1 to 5 smootheness is defined (1 being less smooth and 5 highest)
<p>also using scrub animation is become bidirectional that is it works in reverse manner when going up</p>
<h3>pin</h3>
pin property taked true or false only and when used trigger will take parent element of the element on which gsap animation has to be applied.
<p>pin does one very interesting this is that it stops the scrolling until some animation is completed</p>
<p>take the following aniamtion as example</p>


<hr>

<h2>SVG</h2>
<p>SVG is scalable vector graphics</p>

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/9b47f5d7-d1ff-44e9-ab18-229ceb5345fe)

<p>The whole SVG canvas here is 200px by 200px in size. However, the viewBox attribute defines the portion of that canvas to display. These 200x200 pixels display an area that starts at user unit (0,0) and spans 100x100 user units to the right and to the bottom. This effectively zooms in on the 100x100 unit area and enlarges the image to double size.</p>

<h3>Basic shapes</h3>

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/3e212f09-d3d9-4e0c-ade7-36ad462f326b)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/af0ecc8e-d1eb-485b-bffe-0fe40e9cac98)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/1a414cc7-7dd9-490b-bc37-4e3d7a7e1367)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/ae622783-fb4d-4b6e-893a-35c76ec40464)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/410678af-f252-4e3b-82bf-37cc5db41a18)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/a90a2a1a-f171-45e7-b8a5-e9fb21863396)


<hr>

<h3>svg Path</h3>

defined by one parameter d:
<p> it takes line commands or curve commands</p>
* line command are of 5 types 

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/f5cacee1-faf8-4227-98d7-38afdc9a15e0)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/08663392-26d6-4483-8815-f5b3c4f79d57)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/5b7cdd10-4c58-43a8-b263-767c74aa8d9e)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/26508e98-48b1-4587-933f-c7ccefdfb401)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/0cafc654-f829-4bee-a91d-395fbd241d0c)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/d90447cd-8c3e-4bdb-a729-b993acce687f)

* curve commands are of 3 types

 ![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/c1f12b44-0a78-4d5b-9dc8-f041c613a74e)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/cf2ea912-b25d-4453-829d-700e1a110955)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/4dbd78f7-e547-4ed2-a676-5c1a59d2212c)

![image](https://github.com/Balaji-Nirmit/gsap-tutorial/assets/132046259/b78f9dc0-7dd6-4b60-b34f-0caaae5138ce)

here we are using two things <strong>attr</strong> using which we can change the attributes of a tag and <strong>ease</strong>

<h3>ease</h3>
In GSAP (GreenSock Animation Platform), the "ease" property is used to define the easing behavior of animations. Easing controls the rate of change of an animation over time, affecting how the animation accelerates or decelerates.
<p>use this link to work with different eases <a href="https://gsap.com/docs/v3/Eases/" target="_blank"> click here for eases</a></p>
