function extractText() {
    let list = document.getElementById('items').querySelectorAll('li')
    let textArea = document.getElementById('result')
    let collection = []

    for (const el of list) {
        collection.push(el.textContent)    
    }
    
    textArea.textContent = collection.join('\n')
}