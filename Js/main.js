    //select img and navigation element
    const mobileBtn = document.getElementById("menuCta");
    nav = document.querySelector("nav");

    //toggle variable
    let toggle = true;

    //listen for click events
    mobileBtn.addEventListener("click", () => {
        //toggle
        toggle = !toggle;
        if(toggle){
            mobileBtn.src = '../assets/Menu-close.svg';
            nav.classList.add("menu-btn");
        }
        else{
            mobileBtn.src = '../assets/menu_icon.svg'
            nav.classList.remove("menu-btn");
        }
    });
