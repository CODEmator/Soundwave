    //select img and navigation element
    const mobileBtn = document.getElementById("menuCta");
    const menubar = document.querySelector("nav");
    const screenBlur = document.querySelector("section");
    //select login menu button and signin section
    const loginBtn = document.getElementById("logIn");
    const loginBar = document.querySelector('#login__Bar');

    //toggle variable
    let toggle = true;

    //listen for click events
    mobileBtn.addEventListener("click", () => {
        //toggle
        toggle = !toggle;
        if(toggle){
            mobileBtn.src = '../assets/Menu-close.svg';
            menubar.classList.add("menu-btn");
            screenBlur.classList.add("add-blur");
        }
        else{
            mobileBtn.src = '../assets/menu_icon.svg'
            menubar.classList.remove("menu-btn");
            screenBlur.classList.remove("add-blur");
            loginBar.classList.remove("show__signin");
        }
    });
    

    //events on login click
    loginBtn.addEventListener("click", () => {
        toggle = !toggle;
        if(toggle){
            loginBar.classList.remove("show__signin");
            screenBlur.classList.remove("add-blur");  
        }
        else{
            loginBar.classList.add("show__signin");
            screenBlur.classList.add("add-blur");
            menubar.classList.remove("menu-btn");
            mobileBtn.src = '../assets/menu_icon.svg';
        }
    });

    window.addEventListener("click", function(e) {
        if (e.target === loginBar) {
            loginBar.classList.remove("show__signin");
            screenBlur.classList.remove("add-blur");
        }
    })


    // //Variable for loin and joinnow button on join page
    // const signinBtn = document.getElementById("signIn");
    // signupBtn = document.getElementById("signUp")
    // joinForm = document.querySelector("#join__Form");
    // signinForm = document.querySelector("#login__Form"); 


    // //events on clicks
    // signinBtn.addEventListener("click", () => {
    //     joinForm.classList.add("remove-form");
    //     signinForm.classList.add("add-form");
    // });

//    // signupBtn.addEventListener("click", () => {
//         signinForm.classList.remove("add-form");
//         joinForm.classList.remove("remove-form");
//     })
