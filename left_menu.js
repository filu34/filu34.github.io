
        //Input for a search text area. 
        let input = document.createElement("input");
        divLeftMenu.appendChild(input);

        const inputAttr = ["type:text", "id:mySearch", "placeholder:Search..", "title:Type in a category"];

        for(let i = 0; i < inputAttr.length; i++) {

            let subInputAtr = inputAttr[i].split(":");
            let attribute = subInputAtr[0];
            let value = subInputAtr[1];

            input.setAttribute(attribute, value);
        };

        let ul = document.createElement("ul");
        ul.setAttribute("id", "myMenu");
        divLeftMenu.appendChild(ul);

        const myMenu = ["HTML", "CSS", "JavaScript", "PHP", "Python", "jQuery", "SQL", "Bootstrap", "Node.js"]; 

        for(let i = 0; i < myMenu.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li);
            
            let anchor = document.createElement("a");
            li.appendChild(anchor);
            anchor.setAttribute("href", "#");

            anchor.textContent = myMenu[i];
        };

        function searchFunction() {

            let filter = input.value.toUpperCase();
            let liArray = document.querySelectorAll("li");

            for(let i = 0; i < liArray.length; i++) {
                let anchorList = liArray[i].querySelector("a");

                if (anchorList.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    liArray[i].style.display = "";
                } else {
                    liArray[i].style.display = "none";
                };
            };
        };

        input.addEventListener("keyup", searchFunction);