document.addEventListener("DOMContentLoaded", () => {
    const FAQboxes = document.querySelectorAll(".FAQ-box")

    FAQboxes.forEach(box => {
        box.addEventListener("click", () => {
        
            const valueNumber = box.getAttribute("data-value");
            const correspondingDescription = document.querySelector(`.FAQ-descriptions[data-value="${valueNumber}"]`);
            box.classList.toggle('active');
            correspondingDescription.classList.toggle('active');
        });
    });
});


const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkMode = localStorage.getItem('darkmode')

if(hasDarkMode == null) {
    if(window.matchMedia('(darkmode-switch: dark)').matches){
        enableDarkMode()
    }   else {
        disableDarkMode()
    }
}   else if(hasDarkMode === 'on') {
    enableDarkMode()
}   else if(hasDarkMode === 'off') {
    disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    }   else{
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
})


function enableDarkMode () {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode () {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}