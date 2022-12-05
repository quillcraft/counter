export default class Counter {
	constructor(props) {
		this.root = props.root
		this.number = Math.round(Math.random() * 1e6)

		this.format = /\d+/
		this.doc = window.getComputedStyle(document.documentElement)
		this.numWidth = +this.doc.getPropertyValue('--num-width').match(this.format)[0]
		this.numHeight = +this.doc.getPropertyValue('--num-height').match(this.format)[0]
		this.numDigits = +this.doc.getPropertyValue('--num-digits').match(this.format)[0]

		this.counter = document.createElement('div')
		this.counter.classList.add('counter')
	}

	init() {
		String(this.number).split('').forEach((m, i) => {
			const roller = document.createElement('div')
			roller.classList.add('roller')
			roller.style.top = `0px`
			roller.style.left = `${i * this.numWidth}px`

			const range = new Array(10).fill(0)
			range.forEach((n, j) => {
				const digit = document.createElement('div')
				digit.classList.add('digit')

				digit.textContent = j
				roller.appendChild(digit)
			})

			this.counter.appendChild(roller)
		})

		this.root.appendChild(this.counter)
	}

	start() {
		const number = Math.round(Math.random() * 1e6)
		const rollers = Array.from(this.counter.children)
		rollers.forEach((roller, i) => {
			const m = String(number).split('')[i]
			roller.style.top = `${-m * this.numHeight}px`
			roller.style.left = `${i * this.numWidth}px`
		})
	}
}
