const API_URL = "http://localhost:3000";
 
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState ===4 && this.status === 200){
       const data = JSON.parse(this.response);
       const HTMLResponse = document.querySelector('#container');
        
       const tpl = data.map((post) => `<a class="title-post" data-toggle="modal" data-target="#exampleModalCenter""><li>${post.title}</li></a>`);
       HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}/posts`);
xhr.send();

