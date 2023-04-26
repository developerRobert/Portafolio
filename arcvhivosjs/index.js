import { arrayProject } from "./data.js";



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

// ____________________________________________________________________
 // filtro de proyectos
    const contenedor=document.querySelector(".section_project_card")
    const btns=document.querySelectorAll(".btns")  

    function filtro(array) {
        if (array.length === 0) {
            contenedor.innerText = " No se encontro proyectos ";
        }else{
            contenedor.innerHTML="";
        }

        array.map((value)=>{
            const card=document.createElement("DIV");
            card.innerHTML=`
            <div class="project_cards">
            <img src=${value.imagen} class="cards_img">
            <h3 class="project_cards_titulo">${value.name}</h3>
            <div class="project_cards_infor">
                <p class="project_cards_text">${value.descripcion}</p>
                <a href=${value.link}  class="project_cards_btn ">See</a>
               
            </div>
        </div> 
            `

            contenedor.appendChild(card);
        })
    }
    filtro(arrayProject);

    for (let i = 0; i < btns.length; i++) {
        // console.log(i)
        btns[i].addEventListener("click",(e)=>{
            let show= e.target.innerText.toLowerCase();
            if (show === "all") {
                filtro(arrayProject)
            }else{
                let fil=arrayProject.filter((valor)=>(valor.category.toLowerCase() === show ))
                filtro(fil)
            }
            

        })
        
    }

   







})











