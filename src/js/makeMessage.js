'use strict'

function makeMessage(msg) {
  const el = document.createElement('p')
  el.textContent = msg
  return el
}

export default makeMessage
