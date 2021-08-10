function getArticleGenerator(articles) {
    return () => articles.length 
        ? document.getElementById('content').innerHTML += `<article>${articles.splice(0, 1)}</article>` : null      
}


