import { Base } from './base'

export class Navbar extends Base {
  connected() {
    let navbarLevel1 = document.querySelector('.navbar__nav--level-1')

    let flyoutBg = document.querySelector('.navbar__flyout-bg')
    let OpenFlyoutBg = 'navbar__flyout-bg-open'
    let closeFlyoutBg = 'navbar__flyout-bg-close'

    this.addEvent(window, 'resize', () => {
      closeSubmenu()
    })

    this.addEvent(navbarLevel1, 'mouseover', () => {
      this.removeClass(flyoutBg, closeFlyoutBg)
      this.addClass(flyoutBg, OpenFlyoutBg)
    })

    this.addEvent(navbarLevel1, 'mouseout', () => {
      this.addClass(flyoutBg, closeFlyoutBg)
      this.removeClass(flyoutBg, OpenFlyoutBg)
    })

    let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click'

    // login box
    let loginRef = document.querySelector('.login_ref')
    let avatarIcon = document.querySelector('.aicon-avatar')
    let navbarLogin = document.querySelector('.navbar__login')
    let flyoutBgLogin = document.querySelector('.navbar__login__flyout-bg')
    let navbarLogout = document.querySelector('.navbar__logout')
    let flyoutBgLogout = document.querySelector('.navbar__logout__flyout-bg')
    let isLoginOpen

    this.addEvent(window, touchEvent, e => {
      if (navbarLogin.contains(e.target) || flyoutBgLogin.contains(e.target)) {
        return
      } else if (loginRef.contains(e.target)) {
        burgerIconAnimation()
        !isLoginOpen
          ? toggleLoginMenu('add', 'login')
          : toggleLoginMenu('remove', 'login')
      } else {
        isLoginOpen ? toggleLoginMenu('remove', 'login') : null
      }
    })

    let toggleLoginMenu = (action, logType) => {
      let navbar = logType == 'login' ? navbarLogin : navbarLogout
      let flyoutBg = logType == 'login' ? flyoutBgLogin : flyoutBgLogout

      if (action == 'add') {
        isLoginOpen ? toggleLoginMenu('remove', 'login') : null

        if (document.querySelector(`.navbar__${logType}-close`)) {
          this.removeClass(navbar, `navbar__${logType}-close`)
          this.removeClass(flyoutBg, `navbar__${logType}__flyout-bg-close`)
        }
        this.addClass(avatarIcon, 'aicon-avatar-active')
        this.addClass(navbar, `navbar__${logType}-open`)
        this.addClass(flyoutBg, `navbar__${logType}__flyout-bg-open`)

        isLoginOpen = true
      } else {
        this.removeClass(avatarIcon, 'aicon-avatar-active')
        this.removeClass(navbar, `navbar__${logType}-open`)
        this.removeClass(flyoutBg, `navbar__${logType}__flyout-bg-open`)

        this.addClass(navbar, `navbar__${logType}-close`)
        this.addClass(flyoutBg, `navbar__${logType}__flyout-bg-close`)

        isLoginOpen = false
      }
    }

    // mobile menu and burger Icon
    let burgerIcon = document.querySelector('.navbar__burger')
    let searchBlock = document.querySelector('.navbar__item--search')
    let item = document.querySelectorAll('.submenu-header')
    let isBurgerIconOpen

    this.addEvent(burgerIcon, touchEvent, e => {
      !isBurgerIconOpen ? burgerIconAnimation(true) : burgerIconAnimation()
    })

    let burgerIconAnimation = (open = false) => {
      if (open == true) {
        isBurgerIconOpen = true

        this.addClass(burgerIcon, 'burger-icon-active')
        this.addClass(navbarLevel1, 'is-open')
        this.addClass(searchBlock, 'search__container__open')

        this.removeClass(burgerIcon, 'burger-icon-not-active')

        for (let index = 0; index < item.length; index++) {
          this.addClass(item[index], 'item-header-appear')
        }
      } else {
        isBurgerIconOpen = false

        this.removeClass(burgerIcon, 'burger-icon-active')
        this.removeClass(navbarLevel1, 'is-open')
        this.removeClass(searchBlock, 'search__container__open')

        this.addClass(burgerIcon, 'burger-icon-not-active')

        for (let index = 0; index < item.length; index++) {
          item[index].classList.remove('item-header-appear')
        }

        closeSubmenu()
      }
    }

    // dropdown menu level 2
    let accordion = document.getElementsByClassName('submenu-header')
    let currentlySubMenuItem

    for (let i = 0; i < accordion.length; i++) {
      this.addEvent(accordion[i], touchEvent, function() {
        currentlySubMenuItem = this.nextElementSibling.querySelector(
          '.submenu-item',
        )

        for (let i = 0; i < accordion.length; i++) {
          let submenuItem = accordion[i].nextElementSibling
          if (
            this === accordion[i] &&
            !accordion[i].classList.contains('submenu-header-active')
          ) {
            accordion[i].classList.add('submenu-header-active')
            submenuItem.style.maxHeight = submenuItem.scrollHeight + 'px'
          } else {
            accordion[i].classList.remove('submenu-header-active')
            if (submenuItem) {
              submenuItem.style.maxHeight = null
            }
          }
        }

        currentlySubMenuItem.classList.toggle(
          'dropdown__menu--level-2-item-open',
        )

        let allOpenSubMenuItem = document.querySelectorAll(
          '.dropdown__menu--level-2-item-open',
        )
        for (let index = 0; index < allOpenSubMenuItem.length; index++) {
          if (currentlySubMenuItem != allOpenSubMenuItem[index]) {
            allOpenSubMenuItem[index].classList.remove(
              'dropdown__menu--level-2-item-open',
            )
          }
        }
      })
    }

    let closeSubmenu = () => {
      if (document.querySelector('.submenu-header-active')) {
        document.querySelector(
          '.submenu-header-active',
        ).nextElementSibling.style.maxHeight = null

        document
          .querySelector('.submenu-header-active')
          .classList.remove('submenu-header-active')
      }
    }
  }
}

customElements.define('aida-navbar', Navbar)
