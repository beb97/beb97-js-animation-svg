( function animateAside() {
        let path = document.querySelector("svg path")
        let from = path.getAttribute("d");
        let to = path.dataset.to;


        let isSideBarOpen = false;
        document.querySelector("body").addEventListener("click", function (e) {
            if(isSideBarOpen) {
                isSideBarOpen = false
                document.querySelector("aside").classList.remove("openSidebar");

                // CLOSING
                dynamics.animate(path, {
                    d: from
                }, {
                    type: dynamics.easeIn,
                    duration: 200
                })

            } else {
                isSideBarOpen = true
                document.querySelector("aside").classList.add("openSidebar");

                // OPENING
                dynamics.animate(path, {
                    d: to
                }, {
                    type: dynamics.easeOut,
                    duration: 300
                })

            }
        })

    document.querySelector("aside").addEventListener("click", function (e) {
        console.log(e.target);
        document.querySelector("h1").innerText = e.target.closest("a").innerText;
        e.preventDefault();
        e.stopPropagation();
    })
    }
)();

