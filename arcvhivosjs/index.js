
document.addEventListener("DOMContentLoaded", () => {

    const listItems = [...document.querySelectorAll(".nav_items")]
    const input_nav = document.querySelector(".nav_input")
    listItems.map((intems) => {
        intems.addEventListener("click", (e) => {
            if (input_nav.checked) {
                input_nav.checked = false;
            }
        })

    })
    //_______________________________________________________________
    const list_before = [...document.querySelectorAll(".elemento_before")];
    const intems = [...document.querySelectorAll(".nav_items")];
    // const list_after=[...document.querySelectorAll(".elemento_after")];
    const list_section = [...document.querySelectorAll(".section")]

    intems.map((intem) => {
        intem.addEventListener("click", (e) => {
            list_before.map((item) => { item.classList.remove("active") })
            list_before[parseInt(intem.dataset.id)].classList.add("active")
        })

    })
    // _____________________________________________________________
    let h = window.innerHeight / 3 * 2;
    function activeItem() {
        if (intems[0].getBoundingClientRect().top < h) {
            list_before[0].classList.add("active");

            list_section.map(section => {
                if (section.getBoundingClientRect().top < h) {
                    list_before.map(span => { span.classList.remove("active") })
                    list_before[parseInt(section.dataset.id)].classList.add("active")

                }
            })
        }

    }
    activeItem();

    //__________________________________________________________________
    window.addEventListener("scroll", (e) => {
        activeItem();

    })







})











