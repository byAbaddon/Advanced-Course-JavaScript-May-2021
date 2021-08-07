
function solve() {
    const html = {
        row: r =>
            document
                .querySelector(`#exercise > table > tbody > tr:nth-child(${r})`)
                .querySelectorAll("td > input"),
        outputDiv: document.querySelector("#check p"),
        table: document.querySelector("#exercise > table"),
        inputs: document.getElementsByTagName("input"),
    }

    const getDataMatrix = () => {
        const cell = []

        for (let i = 0; i < 3; i++) {
            const values = Array.from(html.row(i + 1)).map(
                x => Number(x.value) || 0
            )
            cell.push(values)
        }

        return cell
    }

    const isValid = m => {

        const checkRepeatance = arr =>
            arr.some((x, i) => arr.slice(i + 1).some(y => y === x))

        for (let i = 0; i < m[0].length; i++) {
            let column = []
            for (let j = 0; j < m.length; j++) {
                column.push(m[j][i])
            }

            if (checkRepeatance(m[i]) || checkRepeatance(column)) return false
            column = []
        }

        return true
    }

    document.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {

            const changeOutput = (b = "", m = "", c = "") => {
                html.table.style.border = b
                html.outputDiv.innerHTML = m
                html.outputDiv.style.color = c
            }

            if (e.target.innerHTML.includes("Check")) {
                isValid(getDataMatrix())
                    ? changeOutput(
                          "2px solid green",
                          "You solve it! Congratulations!",
                          "green"
                      )
                    : changeOutput(
                          "2px solid red",
                          "NOP! You are not done yet...",
                          "red"
                      )
            } else {
                changeOutput()
                Array.from(html.inputs).map(x => (x.value = ""))
            }
        }
    })
}


//--------------------------------(2)------------- needed to fix for Judge

function solve() {
    const html = {
        allTr: [...document.querySelectorAll('tr')].filter((el, i) => i > 1 && i < 5),
        btnQuick: document.querySelectorAll('button')[0],
        btnClear: document.querySelectorAll('button')[1],
        checkResult : document.querySelector('#check > p')
    }

    let checkResultSet = new Set()

    html.allTr.forEach(el => {
        let rowResult = [...el.children].map(td => Number(td.children[0].value)).reduce((a, b) => a + b)
        checkResultSet.add(rowResult)
    })

    for (let i = 0; i < 3; i++) {
        let colResult = html.allTr.map(el => Number(el.children[i].lastElementChild.value)).reduce((a, b) => a + b)
        checkResultSet.add(colResult)
    }
    
    html.btnQuick.addEventListener('click', function (e) {
        if (checkResultSet.size == 1 && [...checkResultSet][0] != 0) {
            document.querySelector('table').style = 'border: 2px solid green'
            html.checkResult.style = 'color : green'
            html.checkResult.textContent = 'You solve it! Congratulations!'
        } else {
            document.querySelector('table').style = 'border: 2px solid red'
            html.checkResult.style = 'color : red'
            html.checkResult.textContent = 'NOP! You are not done yet...!'
        }
        
    })

    html.btnClear.addEventListener('click', function () {
        html.allTr.forEach(el => {
            [...el.children].map(td => Number(td.children[0].value = ''))
        })
    })
}
