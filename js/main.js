function show(){
    const sidebar = document.querySelector('.sidebar')
    const menu = document.querySelector('.menu')
    menu.style.display = 'none'
    sidebar.style.display = 'flex'
}
function hide(){
    const sidebar = document.querySelector('.sidebar')
    const menu = document.querySelector('.menu')
    menu.style.display = 'flex'
    sidebar.style.display = 'none'
}