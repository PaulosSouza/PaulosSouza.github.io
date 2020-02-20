const Resources = {
  SelectOneElement: function (element) {
    return document.querySelector(element)
  },
  SelectAllElements: function (element) {
    return document.querySelectorAll(element)
  }
}

const WebSite = {
  Start: function() {
    // Navbar
    this.Navbar()

    //Portfolio
    this.Portfolio()
  },
  Navbar: function () {
    const menuBars = Resources.SelectOneElement('.menu__bar')
    const menuList = Resources.SelectOneElement('.menu__list')
    const iconClose = Resources.SelectOneElement('.menu__close')

    menuBars.addEventListener('click', function () {
      menuList.classList.toggle('open')
    })

    iconClose.addEventListener('click', function () {
      menuList.classList.toggle('open')
    })
  },
  Portfolio: function () {
    const cards = Resources.SelectAllElements('.portfolio__card')
    
    cards.forEach(card => {
      card.addEventListener('click', function (){
        card.classList.toggle('active')
      })
    })
  }
}

WebSite.Start()