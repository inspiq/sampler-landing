function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal__overlay d-flex justify-content-center align-items-center" data-close="true">
      <div class="modal__window">
        <div class="modal__header text-center">
          <span class="modal__title">АВТОРИЗАЦИЯ</span>
          <span class="modal__close" data-close="true">&times;</span>
        </div>
        <hr class="modal__hr">
        <div class="modal__content d-flex justify-content-center flex-column align-items-center">
          <form class="d-flex flex-column modal__form" action="" method="">
            <input type="text" class="modal__input" placeholder="E-mail">
            <input type="password" class="modal__input mt-2" placeholder="Пароль">
          </form>
          <button class="modal__btn-auth">Авторизоваться</button>
          <hr class="modal__hr-down">
          <a href="" class="mt-1"><span class="modal__help">Забыл(а) пароль?</span></a>
          <a href=""><span class="modal__help">Зарегистрироваться</span></a>
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal)
  return modal
}

$.modal = function(options) {
  const ANIMATION_SPEED = 350,
  $modal = _createModal(options)
  let closing = false,
  destroyed = false

  const modal = {
    open() {
      document.body.style.overflow = 'hidden';
      if (destroyed) {
        return console.log('Modal is destroyed')
      }
      !closing && $modal.classList.add('open')
    },
    close() {
      document.body.style.overflow = 'visible';
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)
    },
  }

  const listener = event => {
    if(event.target.dataset.close) {
      modal.close()
    }
  }

  $modal.addEventListener('click', listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', listener)
      destroyed = true
    }
  })
}