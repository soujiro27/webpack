'use strict'

import renderToDOM from './renderToDOM'
import makeMessage from './makeMessage'

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    // todoOK
    resolve('I am from Venezuela :)')
  }, 3000)
})

module.exports = {
  firstMessage: 'Hello-World from a module',
  delayedMessage: async () => {
    const message = await waitTime;
    // console.log(message)
    
    // Method imported from the renderToDOM module
    renderToDOM(makeMessage(message))
  }
}
