//-------------------------------------copy past first solution--------------100pts  This man is really run mad  ;)  I'm too..............
/*
I wont waste my time with this particular bullshit.
I wrote it the worst possible way i could and only then it was 100/100.
Judge tests BS on this one. Most of the tests are broken or written by
drunk ungraduated "wonderkids", since the same test that says an element is undefined in judge,
posted in chrome console, gets the element.
Sooo, what it is judge? You mocking? Nah.
*/

function solve() {
    const getSection = n =>
        document.querySelector(`body > main > div > section:nth-child(${n}) > div:nth-child(2)`)
    const html = {
        task: document.getElementById("task"),
        description: document.getElementById("description"),
        date: document.getElementById("date"),
        open: getSection(2),
        inProgress: getSection(3),
        completed: getSection(4),
    }
    const isValidInput = arr => arr.every(x => x !== "")
    const btnComponent = (c, t) => `<button class=${c}>${t}</button>`
    const btnSectionComp = arrTuples =>
        `<div class="flex">${arrTuples.map(x => btnComponent(x[0], x[1])).join("")}</div>`

    function firstTemp(h, desc, date, c1, t1, c2, t2) {
        const wrapper = document.createElement("article")
        wrapper.innerHTML = `<h3>${h}</h3><p>Description: ${desc}</p><p>Due Date: ${date}</p>
${
    c1
        ? btnSectionComp([
              [c1, t1],
              [c2, t2],
          ])
        : ""
}`

        return wrapper
    }

    document.addEventListener("click", e => {
        e.preventDefault()
        if (e.target.tagName === "BUTTON") {
            const [t, d, date] = [html.task.value, html.description.value, html.date.value]
            const actions = {
                "": add,
                green: e => start(e),
                orange: e => finish(e),
                red: e => remove(e),
            }

            function add() {
                debugger
                if (isValidInput([t, d, date])) {
                    const a = firstTemp(t, d, date, "green", "Start", "red", "Delete")
                    html.open.appendChild(a)
                    html.task.value = ""
                    html.description.value = ""
                    html.date.value = ""
                }
            }

            function start(e) {
                debugger
                let parent = e.parentNode.parentNode
                const [text, desc, date] = Array.from(parent.children)
                    .slice(0, 4)
                    .map(x => x.innerHTML)
                const a = firstTemp(
                    text,
                    desc.split(": ").filter(x => x !== "")[1],
                    date.split(": ").filter(x => x !== "")[1],
                    "red",
                    "Delete",
                    "orange",
                    "Finish"
                )
                html.inProgress.appendChild(a)
                parent.outerHTML = ""
            }

            function finish(e) {
                let parent = e.parentNode.parentNode
                const [text, desc, date] = Array.from(parent.children)
                    .slice(0, 4)
                    .map(x => x.innerHTML)
                const a = firstTemp(
                    text,
                    desc.split(": ").filter(x => x !== "")[1],
                    date.split(": ").filter(x => x !== "")[1]
                )
                html.completed.appendChild(a)
                parent.outerHTML = ""
            }

            function remove(e) {
                let parent = e.parentNode.parentNode

                parent.outerHTML = ""
            }

            actions[e.target.className](e.target)
        }
    })
}


//-----------------------------------------------------(2)----with jQuery-----------WTF  Fucking Judge 87pts-----------------------------

function solve() {

    const $task = $('#task')
    const $desc = $('#description')
    const $date = $('#date')

    let $openSec = $('section:eq(1) div:eq(1)') // Open section
    let $progSec = $('section:eq(2) div:eq(1)') // InProgress section
    let $compSec = $('section:eq(3) div:eq(1)') // Complete section


    function createDomElement(elementType, text, classes, attributes, event) {
        let element = ''
        if (elementType) {
            element = $(`<${elementType}>`)
        }

        if (text) {
            element.text(text)
        }

        if (classes) {
            element.addClass(classes)
        }

        if (attributes) {
            attributes.forEach((el) => element.attr(el.k, el.v)) //[{}]   [{k:'id', v:'btn'}, ]   ....

            if (event) {
                element.on(event.eventName, eventFunction.func) //{}    {eventName : 'click' , eventFunction: doSomething} 
            }
        }

        return element

    }


    const btnAdd = $('#add').on('click', function (e) {
        e.preventDefault();

        if ($task.val() && $desc.val() && $date.val()) {

            let article = createDomElement('article')
            let h3 = createDomElement('h3', $task.val())
            let p1 = createDomElement('p', `Description: ${$desc.val()}`)
            let p2 = createDomElement('p', `Due Date: ${$date.val()}`)
            let div = createDomElement('div', undefined, 'flex')
            let btn1 = createDomElement('button', 'Start', 'green')
            let btn2 = createDomElement('button', 'Delete', 'red')

            article.append(h3)
            article.append(p1)
            article.append(p2)

            div.append(btn1)
            div.append(btn2)
            article.append(div)

            $openSec.append(article)
        }
    })


    $openSec.on('click', function (e) { // Open section
        if (e.target.className === 'red') {
            e.target.parentNode.parentNode.remove()
        } else {
            $progSec.append(e.target.parentNode.parentNode)
            $(e.target).attr('class', 'orange') //.addClass('orange')
            $(e.target).insertAfter($(e.target).next())
        }
    })


    $progSec.on('click', function (e) { // InProgram section
        if (e.target.className === 'red') {
            e.target.parentNode.parentNode.remove()
        } else {
            $compSec.append(e.target.parentNode.parentNode)
            e.target.parentNode.remove()
        }
    })

}




//-----------------------------------------------------(3)---------------WTF ???
function solve() {
    const html = {
        task: document.getElementById("task"),
        desc: document.getElementById("description"),
        date: document.getElementById("date"),
        addButton: document.getElementById("add"),
    }

    let sections = document.getElementsByTagName("section")
    let open = sections[1]
    let inProgress = sections[2]
    let complete = sections[3]


    function labelsInfo(argThis) {
        return Array.from(argThis.parentNode.parentNode.children).map(el => el.textContent)
    }



    html.addButton.addEventListener('click', function (e) {
        e.preventDefault()
        if (html.task.value && html.desc.value && html.date.value) {
            open.innerHTML += `<article>
                                     <h3>${html.task.value}</h3>
                                     <p>Description: ${html.desc.value}</p>
                                     <p>Due Date: ${html.date.value}</p>
                                    <div class='flex'>
                                     <button class="green">Start</button>
                                     <button class="red">Delete</button> 
                                    </div>
                               </article>
                              `

            let startBtn = open.querySelector('.green')
            startBtn.addEventListener('click', function (e) {
                [task, desc, data] = labelsInfo(this)
                inProgress.innerHTML += `<article>             
                                              <h3>${task}</h3>
                                              <p>${desc}</p>
                                              <p>${data}</p>
                                            <div class='flex'>
                                              <button class="red">Delete</button> 
                                              <button class="orange">Finish</button>
                                            </div>
                                        </article>`
                this.parentNode.parentNode.remove()


            })


            let delBtn = open.querySelector('.red')
            delBtn.addEventListener('click', function (e) {
                this.parentNode.parentNode.remove()
            })

        }

    })

    inProgress.addEventListener('click', function (e) {
        if (e.target.textContent == 'Finish') {
            labelsInfo(this)
            complete.children[1].innerHTML +=
                `<article>
                    <h3>${task}</h3>
                    <p>${desc}</p>
                    <p>${data}</p>
                </article>
               `
            e.target.parentNode.parentNode.remove()

        }


        if (e.target.textContent == 'Delete') {
            e.target.parentNode.parentNode.remove()
        }
    })

}