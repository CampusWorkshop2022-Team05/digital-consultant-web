function addComment() {
    const all_comment = document.getElementsByTagName("article")

    const article = document.createElement('article')
    article.id = "comment-" + all_comment.length
    article.className = "comment border rounded p-2 mb-3"

    const header = document.createElement('header')
    header.className = "mb-2 border-bottom"
    article.prepend(header)

    const strong = document.createElement('strong')
    strong.className = "d-block"
    const name = document.getElementById('nom').value
    strong.innerText = name
    header.prepend(strong)

    const time = document.createElement('time')
    date = getDate()
    time.dateTime = date[0]
    time.className = "d-block fst-italic"
    time.innerText = date[1]
    header.append(time)

    const p = document.createElement('p')
    const message = document.getElementsByTagName('textarea')[0].value
    p.innerText = message
    article.append(p)


    document.getElementById('avis-list').append(article)
}

function getDate() {
    const date = new Date(Date.now())
    const allMonths = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    const annee = date.getFullYear()
    const mois = date.getMonth()
    const day = date.getDate()
    const heure = date.getHours()
    const minute = date.getMinutes()
    const date_time = annee + "-" + (mois+1) + "-" + day + " " + heure + ":" + minute + ":" + date.getSeconds()
    const inner_text = "le " +  day + " " + allMonths[mois] + " " + annee + " à " +  heure + "h" + minute
    return [date_time, inner_text]
}

document.getElementsByTagName('form')[1].addEventListener (
    'submit',
    function (event) {
        event.preventDefault()
        addComment()
        document.getElementById('nom').value = ""
        document.getElementsByTagName('textarea')[0].value = ""

    }
)


function addArticle(){
    
    const all_comment = document.getElementsByTagName("article")

    const article = document.createElement('article')
    article.id = "comment-" + all_comment.length
    article.className = "comment border rounded p-2 mb-3"

    const header = document.createElement('header')
    header.className = "mb-2 border-bottom"
    article.prepend(header)

    const strong = document.createElement('strong')
    strong.className = "d-block"
    const name = document.getElementById('nom').value
    strong.innerText = name
    header.prepend(strong)

    const time = document.createElement('time')
    date = getDate()
    time.dateTime = date[0]
    time.className = "d-block fst-italic"
    time.innerText = date[1]
    header.append(time)

    const p = document.createElement('p')
    const message = document.getElementsByTagName('textarea')[0].value
    p.innerText = message
    article.append(p)

    document.getElementById('avis-list').append(article)
}