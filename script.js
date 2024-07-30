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

const form = document.getElementById('contactForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // फॉर्म को डिफ़ॉल्ट रूप से सबमिट होने से रोकता है

    // फॉर्म डेटा को एक ऑब्जेक्ट में संग्रहित करें
    const formData = new FormData(form);

    // AJAX अनुरोध भेजें
    fetch('https://formspree.io/f/mqazpbjp', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data   
 => {
      messageDiv.textContent = 'Your message has been sent!';
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      messageDiv.textContent = 'An error occurred. Please try again later.';
    });
  });
