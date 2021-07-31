function extract(content) {
  let text = document.getElementById('content')
  return text.innerHTML
    .match(/(?!\()[\w*\s*\d*]*(?=\))/gm)
    .filter(x => x != '')
    .join('; ')
}

