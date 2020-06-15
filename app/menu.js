document.querySelector('.js-menu-button').addEventListener('click', (e) => {
    if(e.target.getAttribute('class') === 'menu-list-element-a')
        alert('click' + e.target.innerText);
}, false);