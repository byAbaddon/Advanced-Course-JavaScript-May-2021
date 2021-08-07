function attachEventsListeners() {
    const html = {
        from: document.querySelector('#inputUnits'),
        to: document.querySelector('#outputUnits'),
        input: document.querySelector('#inputDistance'),
        output: document.querySelector('#outputDistance'),
    }
    const convert = (v, to, sign) => {
        const signs = {
            '/': (a, b) => a / b,
            '*': (a, b) => a * b
        }
        return signs[sign](v, to)
    }

    const values = {
        km: 1,
        m: 1000,
        cm: 100000,
        mm: 1000000,
        mi: 0.621371,
        yrd: 1093.61,
        ft: 3280.84,
        in: 39370.1,
    }

    document.body.addEventListener('click', e => {
        html.output.textContent = ''
        if (e.target.id === 'convert') {
            const [from, to, inputValue] = [
                html.from.value,
                html.to.value,
                Number(html.input.value),
            ]

            html.output.value = convert(
                convert(inputValue, values[from], '/'),
                values[to], '*')
        }
    })
}