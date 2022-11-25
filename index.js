(function() {
    const app = document.querySelector('#app')
    const range = new Array(10).fill(0)
 
    const format = /\d+/
    const doc = window.getComputedStyle(document.documentElement)
    const numWidth = +doc.getPropertyValue('--num-width').match(format)[0]
    const numHeight = +doc.getPropertyValue('--num-height').match(format)[0]
    const numDigits = +doc.getPropertyValue('--num-digits').match(format)[0]

    let number = Math.round((10 ** numDigits) * Math.random())

    const initCounter = () => {
        const counter = document.createElement('div')
        counter.classList.add('counter')

        String(number).split('').forEach((m, i) => {
            const roller = document.createElement('div')
            roller.classList.add('roller')
            roller.style.top = `${-m * numHeight}px`
            roller.style.left = `${i * numWidth}px`

            range.forEach((n, j) => {
                const div = document.createElement('div')
                div.classList.add('digit')
                div.textContent = j
                roller.appendChild(div)
            })

            counter.appendChild(roller)
        })

        app.appendChild(counter)
    }

    const updateCounter = () => {
        const rollers = Array.from(document.querySelectorAll('.roller'))

        number = Math.round((10 ** numDigits) * Math.random())
        String(number).split('').forEach((m, i) => {
            const roller = rollers[i]
            roller.style.top = `${-m * numHeight}px`
            roller.style.left = `${i * numWidth}px`
        })
    }

    initCounter()

    const button = document.createElement('button')
    button.textContent = 'refresh'
    button.onclick = () => updateCounter()
    app.appendChild(button)
})()
