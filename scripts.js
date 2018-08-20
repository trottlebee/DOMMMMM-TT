document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";
    document.body.appendChild(flexContainer);

    function getRandomColor() {
        let r = Math.floor((Math.random() * 255) + 1)
        let g = Math.floor((Math.random() * 255) + 1)
        let b = Math.floor((Math.random() * 255) + 1)
        let colorStr = "rgb(" + r + ", " + g + ", " + b + ")"
        return colorStr;
    }

    btn.addEventListener("click", function () {
        let div = document.createElement("div");
        div.className = "divSquare";
        flexContainer.appendChild(div);
        div.id = document.getElementsByClassName("divSquare").length;
        attachDivEventListeners(div);
    });

    function attachDivEventListeners(div) {
        div.addEventListener("mouseover", function () {
            let idText = document.createTextNode(div.id.toString());
            div.appendChild(idText);
        });

        div.addEventListener("mouseout", function () {
            div.removeChild(div.firstChild);
        });

        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor();
        });

        div.addEventListener("dblclick", function () {
            let len =
                document.getElementsByClassName("divSquare").length;
            let nextSquare =
                document.getElementById(div.id).nextElementSibling;
            let previousSquare =
                document.getElementById(div.id).previousElementSibling;

            if (div.id % 2 == 0) {
                if (div.id >= len) {
                    alert("There are no boxes after this one!");
                } else {
                    nextSquare.parentNode.removeChild(nextSquare);
                }
            } else {
                if (previousSquare == null) {
                    alert("There are no boxes before one!");
                } else {

                    previousSquare.parentNode.removeChild(previousSquare);
                }
            }
        });
    };
});