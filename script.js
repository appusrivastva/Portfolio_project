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

const form = document.getElementById('contact');


  form.addEventListener('submit', (event) => {
    event.preventDefault(); // फॉर्म को डिफ़ॉल्ट रूप से सबमिट होने से रोकता है


  });
