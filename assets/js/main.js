window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(service)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu .${sectionId}`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  if (sectionBoundaries && section !== home) {
    document
      .querySelector(`#navigation .button-header`)
      .classList.remove('d-none')
  }

  if (sectionBoundaries && section === home) {
    document.querySelector(`#navigation .button-header`).classList.add('d-none')
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document.getElementById('navigation').classList.add('scape')
  } else {
    document.getElementById('navigation').classList.remove('scape')
  }

  if (window.scrollY >= 200) {
    document.getElementById('navigation').classList.add('fixed')
  } else {
    document.getElementById('navigation').classList.remove('fixed')
  }
})
