let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

// dayNight.addEventListener("click", () => {
//     banner.classList.toggle("night");
// });
dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night")
})

let typingEffect=new Typed("#text",{
    strings:['Full Stack Developer',"MERN Stack Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});
  function navigateToContact() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

