const Elements = [ "title", "subtitle", "button1", "button2", "about-title", "about-text", "services-title", "services-description", "list-project", "title-partenaires", "title-galerie", "title-avis", "description-contact", "title-contact", "list-contact", "title-acces", "copyright", "button_form" ];

let request = new XMLHttpRequest();

// Lien de la requête à modifier si l'emplacement du fichier json se trouve ailleurs
request.open('GET', "https://sevensoulsss.github.io/digital-consultant-web/config/messages.json");

request.responseType = 'json';
request.send();

request.onload = function() {

    Elements.forEach(element => {

        const Tag = document.getElementById(element);
        
        if(Array.isArray(request.response["main"][element])){
            let count = 0;
            
            Tag.childNodes.forEach(child => {

                if(child.localName && child.localName === "p" && (request.response["main"][element])){ //  !request.response["main"][element][count].title
                    child.innerHTML = request.response["main"][element][count];
                }else if(child.localName && child.localName === "div"){
                    child.childNodes.forEach(childs => {
                        if(childs.localName && childs.localName === "h5") childs.innerHTML = request.response["main"][element][count].title;
                        if(childs.localName && childs.localName === "p") childs.innerHTML = request.response["main"][element][count].content;
                    })
                    count += 1;
                }
            })
        }else if(Tag && Tag.localName){
            Tag.innerHTML = request.response["main"][element];
        }
    })

    
    request.response["images"].forEach(image => {
        const Carousel = document.getElementById("original");

        const Edit = Carousel.cloneNode(true);

        const List = document.getElementById("list");

        Edit.childNodes[1].src = `${window.location.href.replace("index.html" , "") + `public/images/carousel/${image}`}`

        List.appendChild(Edit)
    })
    
    request.response["avis"].forEach(avis => {
        const Avis = document.getElementById("original-avis");

        const Edit = Avis.cloneNode(true);

        const List = document.getElementById("list-avis");
        
        const Childs = Edit.childNodes[3].childNodes;

        Childs[1].innerHTML = avis.name; // Name group
        Childs[3].innerHTML = `❝ ${avis.content} ❞`; // Content
        Childs[5].innerHTML = avis.author; // Author

        List.appendChild(Edit)
    })
}