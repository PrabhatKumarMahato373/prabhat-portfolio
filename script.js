// Typing Effect

const roles = [
    "Java Developer",
    "Frontend Developer",
    "Web Designer",
    "B.Tech CSE Student"
];

let index = 0;
let char = 0;
let current = "";
let typing = true;

const heading = document.querySelector(".hero-text h2");

function type(){

if(typing){

current = roles[index].substring(0,char++);

heading.textContent=current;

if(char>roles[index].length){

typing=false;

setTimeout(type,1200);

return;

}

}else{

current=roles[index].substring(0,char--);

heading.textContent=current;

if(char<0){

typing=true;

index++;

if(index===roles.length){

index=0;

}

}

}

setTimeout(type,120);

}

type();



// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// Contact Form

document.querySelector(".contact-form").addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent.");

});

/* Animated Counter */

const counters=document.querySelectorAll(".stat-box h2");

const speed=80;

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

const count=parseInt(counter.getAttribute("data-count"))||0;

const increment=Math.ceil(target/speed);

if(count<target){

counter.setAttribute("data-count",count+increment);

counter.innerText=count+increment+"+";

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});


/* Active Navbar */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-150;

if(pageYOffset>=top){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});