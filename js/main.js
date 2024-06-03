const search_btn = document.querySelector('.search_show_btn');
const close_btn = document.querySelector('.close_btn');
const overlay_btn = document.querySelector('.overlay');
const search_bar = document.querySelector('.search_bar_section');
search_btn.addEventListener('click', () => {
    search_bar.classList.toggle('active')
})
close_btn.addEventListener('click', () => {
    search_bar.classList.toggle('active')
})
overlay_btn.addEventListener('click', () => {
    search_bar.classList.toggle('active')
})

    


    