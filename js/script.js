
function closeModal(){
        const modal = document.querySelector("#quit-smoking-modal");
        console.log(modal)
        modal.style.display = 'none'
    }
    function openModal(){
         document.querySelector("#quit-smoking-modal").style = 'flex'
    }
    function submit(){
     document.getElementById('form-container').innerHTML = 'Thank you for submitting'
    }