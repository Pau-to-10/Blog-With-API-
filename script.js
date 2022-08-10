const API_URL = "http://localhost:3000";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState ===4 && this.status === 200){
       console.log(this.response);
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}/posts`);
xhr.send();

