let toggleBtn = document.querySelector('.toggle-btn')
let body = document.querySelector('body')

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    body.classList.toggle('active')
})
