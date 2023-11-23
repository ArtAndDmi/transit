const menuIcon = document.getElementById('mobileHeaderBurgerSvg')
const firstLine = document.getElementById('firstLine')
const secondLine = document.getElementById('secondLine')
const thirdLine = document.getElementById('thirdLine')
const navMenu = document.getElementById('navMenu')
let isActive = false

menuIcon.addEventListener('click', () => {
    menuIcon.style.transition = '.2s'
    if (!isActive) {
        menuIcon.style.rotate = '45deg'
        navMenu.style.display = 'block'
        navMenu.style.transition = '.2s'
        document.body.style.overflowY = 'hidden'
        setTimeout(() => {
            navMenu.style.transform = 'translateX(-3vw)'
        }, 1)

        firstLine.setAttribute('d', 'M10 18H26')
        thirdLine.setAttribute('d', 'M18 10 L18 26')



        isActive = true

    } else {
        menuIcon.style.rotate = '0deg'
        navMenu.style.transition = '.2s'
        navMenu.style.transform = 'translateX(100vw)'
        document.body.style.overflowY = 'auto'

        setTimeout(() => {
            navMenu.style.display = 'none'
        }, 200)

        firstLine.setAttribute('d', 'M10 12H26')
        thirdLine.setAttribute('d', 'M10 24H26')

        isActive = false


    }
})

function redirectToURL(url) {
    window.location.href = url
}

const modalBtn = document.getElementById('modalBtn')
const modal = document.getElementById('modal')
const modalBody = document.getElementById('modalBody')
let modalActive = false
modalBtn.addEventListener('click', () => {
    modal.style.opacity = '0'
    modal.style.display = 'flex'
    setTimeout(() => {
        modal.style.opacity = '1'
    },1)


})

modal.addEventListener('click', () => {
    modal.style.opacity = '0'

    setTimeout(() => {
        modal.style.display = 'none'
    },200)
})


document.getElementById('modalButton').addEventListener('click', () => {
    modal.style.opacity = '0'

    setTimeout(() => {
        modal.style.display = 'none'
    },200)
})
