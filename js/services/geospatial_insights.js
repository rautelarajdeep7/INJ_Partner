// --------------------------------------- Animation JS ------------------------------------------------

let forContentBox = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.content');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item2 = document.querySelector('.content');

    if (view_height - item_top >= 100) {

        animation_item2.setAttribute("style", "animation-delay: -0.4s");
        animation_item2.classList.add('animate__animated');
        animation_item2.classList.add('animate__fadeInUp');

        clearInterval(forContentBox);
    }

}, 100);



let forLocation = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.location');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.location>div');

    let delay = 0.2;

    if (view_height - item_top >= 10) {

        animation_item.forEach((item)=>{
            item.setAttribute("style",`animation-delay: ${delay}s`);
            delay = delay+0.15;
        })

        animation_item.forEach((item)=>{
            item.classList.add('animate__fadeInUp');
            item.classList.add('animate__animated');
        })

        setTimeout(()=>{
            animation_item.forEach((item)=>{
                item.classList.remove('animate__fadeInUp');
                item.classList.remove('animate__animated');
            })
        },1000)

        clearInterval(forLocation);
    }

}, 100);


let forMarket = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.market');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.market>div');

    let delay = 0.2;

    if (view_height - item_top >= 10) {

        animation_item.forEach((item)=>{
            item.setAttribute("style",`animation-delay: ${delay}s`);
            delay = delay+0.15;
        })

        animation_item.forEach((item)=>{
            item.classList.add('animate__fadeInUp');
            item.classList.add('animate__animated');
        })

        setTimeout(()=>{
            animation_item.forEach((item)=>{
                item.classList.remove('animate__fadeInUp');
                item.classList.remove('animate__animated');
            })
        },1000)

        clearInterval(forMarket);
    }

}, 100);


let forCustomer = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.customer');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.customer>div');

    let delay = 0.2;

    if (view_height - item_top >= 10) {

        animation_item.forEach((item)=>{
            item.setAttribute("style",`animation-delay: ${delay}s`);
            delay = delay+0.15;
        })

        animation_item.forEach((item)=>{
            item.classList.add('animate__fadeInUp');
            item.classList.add('animate__animated');
        })

        clearInterval(forCustomer);
    }

}, 100);


let forFooter = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('footer');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelector('.footer_logo');

    if (view_height - item_top >= 200) {

        animation_item.classList.add('animate__zoomIn');
        clearInterval(forFooter);
    }

}, 100);