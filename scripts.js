
function toggleMenu() {
    let menuList = document.getElementById('menuList');
    let menuIcon = document.getElementById('menuIcon').children[0];
    menuList.classList.toggle('active');
    
    
    if (menuList.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

function closeMenu() {
    let menuList = document.getElementById('menuList');
    let menuIcon = document.getElementById('menuIcon').children[0];
    menuList.classList.remove('active');
    
    
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
}
