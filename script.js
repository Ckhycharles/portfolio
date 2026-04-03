// typing animation

const textToType="I'm Charles  Nguthu"
const typedContent=document.querySelector(".typed-content")
let currentText=""
let isTyping=true

function typeCharacters(){

if(isTyping){

if(currentText.length<textToType.length){

currentText+=textToType[currentText.length]
typedContent.textContent=currentText

setTimeout(typeCharacters,100)

}else{

isTyping=false

setTimeout(eraseCharacters,3000)

}

}

}

function eraseCharacters(){

if(!isTyping){

if(currentText.length>0){

currentText=currentText.slice(0,-1)
typedContent.textContent=currentText

setTimeout(eraseCharacters,100)

}else{

isTyping=true

setTimeout(typeCharacters,500)

}

}

}

typeCharacters()


// rotating role animation

const roles=["Machine Learning Engineer","Web Developer","Data Analyst","Data Scientist"]
const roleElement=document.querySelector(".rotating-role")

function startRoleRotation(){

roleElement.textContent=roles[0]

setTimeout(()=>changeRole(1),1000)
setTimeout(()=>changeRole(2),3000)
setTimeout(()=>changeRole(3),6000)
setTimeout(()=>startRoleRotation(),9000)

}

function changeRole(index){

roleElement.style.opacity="0"

setTimeout(()=>{

roleElement.textContent=roles[index]
roleElement.style.opacity="1"

},150)

}

startRoleRotation()


// hamburger menu

const hamburger=document.querySelector(".hamburger")

const nav=document.querySelector(".nav-links")

hamburger.addEventListener("click",()=>{

nav.classList.toggle("active")

})


// theme toggle

const toggle=document.getElementById("themeToggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-theme")

})


// animated skills

const skills=document.querySelectorAll(".skill-progress")

function animateSkills(){

skills.forEach(skill=>{

skill.style.width=skill.dataset.progress+"%"

})

}

window.addEventListener("scroll",animateSkills)


// page animation

const faders=document.querySelectorAll(".fade")

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

faders.forEach(el=>observer.observe(el))


// chart removed - replaced with tools section


// testimonials carousel

const testimonials=document.querySelectorAll('.testimonial')
const indicators=document.querySelectorAll('.indicator')
let currentTestimonial=0

function showTestimonial(index){

testimonials.forEach((testimonial,i)=>{
testimonial.classList.remove('active')
indicators[i].classList.remove('active')
})

testimonials[index].classList.add('active')
indicators[index].classList.add('active')
currentTestimonial=index
}

function nextTestimonial(){

currentTestimonial=(currentTestimonial+1)%testimonials.length
showTestimonial(currentTestimonial)
}

function prevTestimonial(){

currentTestimonial=currentTestimonial===0?testimonials.length-1:currentTestimonial-1
showTestimonial(currentTestimonial)
}

// auto cycle every 5 seconds
setInterval(nextTestimonial,5000)

// indicator click handlers
indicators.forEach((indicator,index)=>{
indicator.addEventListener('click',()=>showTestimonial(index))
})

// keyboard navigation
document.addEventListener('keydown',(e)=>{
if(e.key==='ArrowLeft') prevTestimonial()
if(e.key==='ArrowRight') nextTestimonial()
})


// contact form removed - replaced with direct contact links

// Display current year and Monday greeting
function initializeFooter(){
    const currentYear = new Date().getFullYear()
    const currentDay = new Date().getDay()

    document.getElementById("currentYear").innerText = currentYear

    const dayElement = document.getElementById("dayMessage")
    let message = ""
    switch(currentDay){
        case 0: // Sunday
            message = "Enjoy your Sunday!"
            break
        case 1: // Monday
            message = "Have a nice Monday!"
            break
        case 2: // Tuesday
            message = "Happy Tuesday! Keep pushing!"
            break
        case 3: // Wednesday
            message = "It's Wednesday—halfway there!"
            break
        case 4: // Thursday
            message = "Almost Friday! Have a great Thursday!"
            break
        case 5: // Friday
            message = "Happy Friday! The weekend is here!"
            break
        case 6: // Saturday
            message = "Enjoy your Saturday! Relax and recharge."
            break
    }
    dayElement.textContent = message
}

initializeFooter()

// Download CV button (client-side) - uses HTML download attr on the <a> element
const downloadCvBtn = document.getElementById('downloadCvBtn')
if (downloadCvBtn) {
  downloadCvBtn.addEventListener('click', () => {
    // For some browsers, setting the href + download on <a> is enough.
    // This event exists to allow future analytics or UI feedback.
    console.log('Download CV requested:', downloadCvBtn.href)
  })
}