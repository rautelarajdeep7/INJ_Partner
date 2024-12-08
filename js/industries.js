// --------------------------------------- Animation JS ------------------------------------------------


// animate__animated animate__animate__fadeInUp
let forIndustryItem = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.industry_item_box');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.industry_item');
    let animation_item2 = document.querySelector('.industry_item_box');


    let delay = 0.2;

    if (view_height - item_top >= 100) {

        animation_item2.setAttribute("style", "animation-delay: -0.4s");
        animation_item2.classList.add('animate__animated');
        animation_item2.classList.add('animate__fadeInUp');

        animation_item.forEach((item)=>{
            item.setAttribute("style",`animation-delay: ${delay}s`);
            delay = delay+0.1
        })

        animation_item.forEach((item)=>{
            item.classList.add('animate__fadeInUp');

            setTimeout(()=>{
                item.classList.remove('animate__fadeInUp');
            },1500)
        })
        

        clearInterval(forIndustryItem);
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
