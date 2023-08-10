
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
     const form = document.getElementById("form");
     form.innerHTML =
       '<div id="submission"><i class="fa-solid fa-check"></i>Your Response Have Been Submitted Successfully, Our team will contact you as soon as Possible with more details about this the plan of this journey, Don\'t worry at all, We\'re here for you </div> ';
     form.appendChild(button)
    }
    function toggleDropList(){
     let dropListElements = document.querySelectorAll('.toggle')
     const dropList = document.querySelector("#droplist");
     const computedStyle = window.getComputedStyle(dropList)
      if (computedStyle.display === "flex") {
        dropList.style.display = "none";
      } else {
        dropList.style.display = "flex";
      }
    }

    document.querySelector('#drop-btn').addEventListener('click', toggleDropList)
    document.querySelector('.toggle').addEventListener('click', toggleDropList)
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