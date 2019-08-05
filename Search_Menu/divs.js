let div = document.createElement("div");
div.setAttribute("class", "row");
document.body.appendChild(div);

let divLeftMenu = document.createElement("div");
divLeftMenu.setAttribute("class", "left");
divLeftMenu.setAttribute("style", "background-color:#bbb;");
div.appendChild(divLeftMenu);

let menuTitle = document.createElement("h2");
menuTitle.textContent = "Menu";
divLeftMenu.appendChild(menuTitle);

let divRightContent = document.createElement("div");
div.appendChild(divRightContent);
divRightContent.setAttribute("class", "right");
divRightContent.setAttribute("style", "backgroundcolor:#ddd;");

divRightContent.innerHTML = `<h2>Page Content</h2>
<p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
<p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
<p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
<p>Some text..</p>`;