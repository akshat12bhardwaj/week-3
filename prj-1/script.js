const btn = document.querySelector('.toggle-btn')

btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode')
    btn.classList.toggle('btn-change-mode')
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent='Dark Mode'
    }
    else{
        btn.textContent='Light Mode'
    }

}
)