// Hero Text Code Starts Here---------------
let words =  document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i*80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i * 80)
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)

// Hero Text Code End Here---------------

// Professional Skill Code Starts Here ----Circle Skills----

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
var dots = elem.getAttribute("data-dots");
var marked = elem.getAttribute("data-percent");
var percent = Math.floor(dots*marked/100);
var points = "";
var rotate = 360 / dots;

for(let i=0; i<dots; i++){
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
}
elem.innerHTML = points;

const pointsMarked = elem.querySelectorAll('.points');
for(let i = 0; i<percent; i++)
{
    pointsMarked[i].classList.add('marked'); 
}
}) 

// Professional Skill Code Ends Here ----Circle Skills----

// Portfolio Section Code Starts Here----------
var mixer = mixitup('.portfolio-gallery')

// Active Menu Section Code Starts Here----------
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky Navbar Code Starts Here----------

const header =document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

// Toggle Navbar Icon Code Starts Here----------
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

// Parallax----------

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show-items");
        }
        else
        {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// Resume Modal

const modal = document.getElementById("cvModal");
const btn = document.getElementById("downloadBtn");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
