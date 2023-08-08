
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
     form.innerHTML = 'Your Response Have Been Submitted Successfully, Thank You! '
     form.appendChild(button)

    }