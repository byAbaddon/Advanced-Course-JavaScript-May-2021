function attachGradientEvents() {  //solution with JQuery
    $('#gradient').mousemove((e) => {
        $("#result").text(~~(e.offsetX / e.target.clientWidth * 100) + '%')
    })
}

// //----------------------------(2)--------------------------

function attachGradientEvents() {
    document.querySelector('#gradient').addEventListener('mousemove', (e) => {
        document.querySelector('#result').textContent = ~~(e.offsetX / e.target.clientWidth * 100) + '%'
    })
}

