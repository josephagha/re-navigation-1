import '../src/scss/main.scss'
import '../src/fonts/icons/icons.css'
import '../src/fonts/fonts.css'
import './app.scss'

// menu

// let navbarLevel1 = document.querySelector('.navbar__nav--level-1')
// let flyoutBg = document.querySelector('.navbar__flyout-bg')

// navbarLevel1.addEventListener('mouseover', () => {
//   classChange([flyoutBg], 'remove', ['navbar__flyout-bg-close'])
//   classChange([flyoutBg], 'add', ['navbar__flyout-bg-open'])
// })
// navbarLevel1.addEventListener('mouseout', () => {
//   classChange([flyoutBg], 'add', ['navbar__flyout-bg-close'])
//   classChange([flyoutBg], 'remove', ['navbar__flyout-bg-open'])
// })

// login box

// let avatarRef = document.querySelector('.avatar_ref')
// let avatarIcon = document.querySelector('.aicon-avatar')
// let navbarLogin = document.querySelector('.navbar__login')
// let flyoutBgLogin = document.querySelector('.navbar__login__flyout-bg')
// let navbarLogout = document.querySelector('.navbar__logout')
// let flyoutBgLogout = document.querySelector('.navbar__logout__flyout-bg')
// let isLoginOpen

// document.addEventListener('click', evt => {
//   let targetElement = evt.target

//   do {
//     if (
//       targetElement == avatarRef ||
//       targetElement == flyoutBgLogin ||
//       targetElement == navbarLogin ||
//       targetElement == flyoutBgLogout ||
//       targetElement == navbarLogout
//     ) {
//       if (targetElement == avatarRef) {
//         if (isLoginOpen) {
//           if (navbarLogin) {
//             loginMenu('remove', 'login')
//           } else {
//             loginMenu('remove', 'logout')
//           }

//           isLoginOpen = false
//         } else {
//           isLoginOpen = true
//           // close mobile menu
//           if (isBurgerIconOpen) {
//             burgerIconAnimation(false)
//           }
//           if (navbarLogin) {
//             loginMenu('add', 'login')
//           } else {
//             loginMenu('add', 'logout')
//           }
//         }
//       } else {
//         isLoginOpen = true

//         if (navbarLogin) {
//           loginMenu('add', 'login')
//         } else {
//           loginMenu('add', 'logout')
//         }
//       }
//       return
//     } else {
//       if (
//         document.querySelector('.navbar__login-open') ||
//         document.querySelector('.navbar__logout-open')
//       ) {
//         if (navbarLogin) {
//           loginMenu('remove', 'login')
//         } else {
//           loginMenu('remove', 'logout')
//         }
//       }
//     }

//     targetElement = targetElement.parentNode
//   } while (targetElement)
// })

// mobile menu and burger Icon

// let burgerIcon = document.querySelector('.navbar__burger')
// let searchBlock = document.querySelector('.navbar__item--search')
// let item = document.querySelectorAll('.submenu-header')
// let isBurgerIconOpen

// burgerIcon.addEventListener('click', function() {
//   if (!isBurgerIconOpen) {
//     burgerIconAnimation(true)
//   } else {
//     burgerIconAnimation(false)
//   }
// })

// dropdown menu level 2

// let accordion = document.getElementsByClassName('submenu-header')

// for (let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function(e) {
//     let currentlySubMenuItem = this.nextElementSibling.querySelector(
//       '.submenu-item',
//     )

//     for (let i = 0; i < accordion.length; i++) {
//       let child = accordion[i].nextElementSibling
//       if (
//         this === accordion[i] &&
//         !accordion[i].classList.contains('submenu-header-active')
//       ) {
//         accordion[i].classList.add('submenu-header-active')
//         child.style.maxHeight = child.scrollHeight + 'px'
//       } else {
//         accordion[i].classList.remove('submenu-header-active')
//         if (child) {
//           child.style.maxHeight = null
//         }
//       }
//     }

//     currentlySubMenuItem.classList.toggle('dropdown__menu--level-2-item-open')

//     let allOpenSubMenuItem = document.querySelectorAll(
//       '.dropdown__menu--level-2-item-open',
//     )
//     for (let index = 0; index < allOpenSubMenuItem.length; index++) {
//       if (currentlySubMenuItem != allOpenSubMenuItem[index]) {
//         allOpenSubMenuItem[index].classList.remove(
//           'dropdown__menu--level-2-item-open',
//         )
//       }
//     }
//   })
// }

// help function

// let loginMenu = (action, logType) => {
//   let navbar = logType == 'login' ? navbarLogin : navbarLogout
//   let flyoutBg = logType == 'login' ? flyoutBgLogin : flyoutBgLogout

//   classChange([avatarIcon.parentNode, navbar, flyoutBg], action, [
//     'aicon-avatar-active',
//     `navbar__${logType}-open`,
//     `navbar__${logType}__flyout-bg-open`,
//   ])
//   if (action == 'add') {
//     if (document.querySelector(`.navbar__${logType}-close`)) {
//       classChange([navbar, flyoutBg], 'remove', [
//         `navbar__${logType}-close`,
//         `navbar__${logType}__flyout-bg-close`,
//       ])
//     }
//   } else {
//     classChange([navbar, flyoutBg], 'add', [
//       `navbar__${logType}-close`,
//       `navbar__${logType}__flyout-bg-close`,
//     ])
//   }
// }

// let burgerIconAnimation = open => {
//   if (open == true) {
//     isBurgerIconOpen = true

//     classChange([burgerIcon, navbarLevel1, searchBlock], 'add', [
//       'burger-icon-active',
//       'is-open',
//       'search__container__open',
//     ])
//     classChange([burgerIcon], 'remove', ['burger-icon-not-active'])

//     for (let index = 0; index < item.length; index++) {
//       item[index].classList.add('item-header-appear')
//     }
//   } else {
//     isBurgerIconOpen = false

//     classChange([burgerIcon, navbarLevel1, searchBlock], 'remove', [
//       'burger-icon-active',
//       'is-open',
//       'search__container__open',
//     ])
//     classChange([burgerIcon], 'add', ['burger-icon-not-active'])

//     for (let index = 0; index < item.length; index++) {
//       item[index].classList.remove('item-header-appear')
//     }
//   }
// }

// let classChange = (selector = [], type, className = []) => {
//   for (let index = 0; index < selector.length; index++) {
//     if (type == 'add') {
//       selector[index].classList.add(className[index])
//     } else {
//       selector[index].classList.remove(className[index])
//     }
//   }
// }
