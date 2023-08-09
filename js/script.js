
const button = document.createElement("input")
button.type = 'button'
button.value = 'Close'
button.id = 'close-btn'
button.addEventListener('click', ()=>closeModal())
function closeModal(){
        const modal = document.querySelector("#quit-smoking-modal");
        console.log(modal)
        modal.style.display = 'none'
    }
    function openModal(){
         document.querySelector("#quit-smoking-modal").style.display = 'flex'
    }
    function submit(){
     const form = document.getElementById("form-container");
     form.innerHTML =
       '<div id="submition"><i class="fa-solid fa-check"></i>Your Response Have Been Submitted Successfully, Thank You!</div> ';
     form.appendChild(button)

    }

    //progress button
 let calcScrollValue = () => { 
  let scrollProgress = document.getElementById("progress");
   let progressValue = document.getElementById("progress-value"); 
   let pos = document.documentElement.scrollTop; 
   let calcHeight = 
      document.documentElement.scrollHeight - 
      document.documentElement.clientHeight; 
   let scrollValue = Math.round((pos * 100) / calcHeight); 
   if (pos > 100) { 
      scrollProgress.style.display = "grid"; 
 } else { 
      scrollProgress.style.display = "none"; 
 } 
 scrollProgress.addEventListener("click", () => { 
      document.documentElement.scrollTop = 0; 
 }); 
 scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`; }; 
 window.onscroll = calcScrollValue; 
 window.onload = calcScrollValue;