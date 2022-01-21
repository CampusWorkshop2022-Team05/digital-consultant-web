function addComment(name, message){
    
    const CommentEdit = document.getElementById("comment-0")

    const Clone = CommentEdit.cloneNode(true)

    const CommentList = document.getElementById("comments-list")

    const Cloned = CommentList.appendChild(Clone)

    const Author = Cloned.getElementsByTagName("strong")[0];

    Author.innerHTML = name

    const Time = Cloned.getElementsByTagName("time")[0];

    const Timestamp = new Date()

    const options = { day: 'numeric', month: 'long', year: 'numeric', hourCycle: "h24", day: "numeric", hour: "2-digit", minute: "2-digit" };

    Time.innerHTML = `le ${(Timestamp.toLocaleDateString("fr", options)).replace(/\, /g, " à ").replace(":", "h")}<button class="btn-class btn-prm" onclick="EditComment()">Edit</button>`

    const Description = Cloned.getElementsByTagName("p");

    Description[0].innerHTML = message
}

function EditComment(){
    
    const InputButton = document.getElementsByTagName("input");

    const Name = document.getElementById("nom");

    Name.setAttribute("value", "")

    const Content = document.getElementById("message-content");

    Content.setAttribute("value", "")

    InputButton[1].defaultValue = "Update"

    console.log("ok")
}

function onReceived(){ // event.preventDefault() pour empêcher le refresh plutôt que d'utiliser le return false

    const Name = document.getElementById("nom").value

    const Content = document.getElementById("message-content").value

    if(Name === "" || Content === "") return;

    addComment(Name, Content)

    document.getElementById("new-comment").reset()
}