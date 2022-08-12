let modalHtml;
const API_URL = "http://localhost:3000";

const container = document.querySelector("#container");
const tpl = document.createElement("div");

fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            let elem = document.createElement('p');
            elem.setAttribute("id", "div-post");
            elem.setAttribute("data-bs-toggle", "modal");
            elem.setAttribute("data-bs-target", `#staticBackdrop${post.id}`);

            let pTitle = document.createElement("p");
            pTitle.setAttribute("class", "pTitle");

            container.appendChild(elem);
            elem.appendChild(pTitle);
            pTitle.appendChild(document.createTextNode(`${post.title}`));

            modalHtml =
            `<div class="modal fade" id="staticBackdrop${post.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">${post.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p id="modal-post-body">${post.body}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>`;
        elem.insertAdjacentHTML("afterbegin", modalHtml);
    });
});


