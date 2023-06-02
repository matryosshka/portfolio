document.querySelectorAll('a.menu__nav').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    const href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const topOffset = 40
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})