import Counter from './Counter.js'

(function() {
    const app = document.querySelector('#app')

	const counter = new Counter({ root: app })
	counter.init()

    const button = document.createElement('button')
    button.textContent = 'START'
    button.onclick = () => counter.start()
    app.appendChild(button)
})()
