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



let forLeadership = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.leadership');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.leadership>div');

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

        clearInterval(forLeadership);
    }

}, 100);

let forBespoke = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.bespoke');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.bespoke_boxes');

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
        

        clearInterval(forBespoke);
    }

}, 100);

let forFinancial = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.financial_research');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.financial_research_boxes');

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
        

        clearInterval(forFinancial);
    }

}, 100);


let forProcurement = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.procurement');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.procurementchild_box');

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
        

        clearInterval(forProcurement);
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