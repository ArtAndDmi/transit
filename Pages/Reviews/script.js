
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper

        breakpoint = window.matchMedia(breakpoint)

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings)

            if (callback) {
                callback(swiper)
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings)
            } else {
                if (swiper !== undefined) swiper.destroy(true, true)
                return
            }
        }

        breakpoint.addEventListener('change', checker)
        checker()
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex)
            })
        }
    }

    resizableSwiper(
        '(max-width: 2000px)',
        '.slider-1',
        {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 3,
            navigation: {
                prevEl: '#leftArrow',
                nextEl: '#rightArrow',
            },
        },
        someFunc
    )

    resizableSwiper(
        '(max-width: 480px)',
        '.slider-1',
        {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 2,
            navigation: {
                prevEl: '#leftArrow',
                nextEl: '#rightArrow',
            },
        },
        someFunc
    )
})


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
        firstLine.style.display = 'none'
        navMenu.style.display = 'block'
        navMenu.style.transition = '.2s'
        document.body.style.overflowY = 'hidden'
        setTimeout(() => {
            navMenu.style.transform = 'translateX(-3vw)'
        }, 1)

        thirdLine.setAttribute('y', '-2')
        thirdLine.setAttribute('x', '13')
        thirdLine.setAttribute('width', '2')
        thirdLine.setAttribute('height', '27')


        isActive = true

    } else {
        menuIcon.style.rotate = '0deg'
        firstLine.style.display = 'block'
        navMenu.style.transition = '.2s'
        navMenu.style.transform = 'translateX(100vw)'
        document.body.style.overflowY = 'auto'

        setTimeout(() => {
            navMenu.style.display = 'none'
        }, 200)
        thirdLine.setAttribute('y', '20')
        thirdLine.removeAttribute('x')
        thirdLine.setAttribute('width', '27')
        thirdLine.setAttribute('height', '2')


        isActive = false


    }
})






