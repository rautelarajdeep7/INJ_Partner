function get_in_touch() {
    document.querySelector(".backdrop_hide_get_in_touch").classList.toggle("backdrop_show_get_in_touch");
    document.getElementsByTagName("body")[0].classList.toggle("body_overflow_stop");
    document.querySelector(".get_in_touch_form_hide").classList.toggle("get_in_touch_form_show")
}

// --------------------------------------- Animation JS ------------------------------------------------

let forService = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.service_set_forth');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item1 = document.querySelectorAll('.service_set_forth_child_item');

    if (view_height - item_top >= 10) {

        animation_item1.forEach((item) => {
            item.classList.add('animate__fadeInUp');
        })

        clearInterval(forService);
    }

}, 100);


// let forClient = setInterval(() => {

//     let view_height = window.innerHeight;

//     let select_item = document.querySelector('.our_client');
//     let item_top = select_item.getBoundingClientRect().top;

//     let animation_item2 = document.querySelector('.our_client>div');

//     if (view_height - item_top >= 10) {

//         animation_item2.classList.add('animate__fadeInUp');

//         clearInterval(forClient);
//     }

// }, 100);

let forClient = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.our_client');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.clients_list_box>div>div');

    let delay = 0.2;

    if (view_height - item_top >= 10) {

        animation_item.forEach((item)=>{
            item.setAttribute("style",`animation-delay: ${delay}s`);
            delay = delay+0.1
        })

        animation_item.forEach((item)=>{
            item.classList.add('animate__zoomIn');
            item.classList.add('animate__animated')

        })
        

        clearInterval(forClient);
    }

}, 100);


let forExpertise = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.expertise');
    let item_top = select_item.getBoundingClientRect().top;

    let animation_item = document.querySelectorAll('.expertise_item');

    let delay = 0.2;

    if (view_height - item_top >= 100) {

        animation_item.forEach((item) => {
            item.setAttribute("style", `animation-delay: ${delay}s`);
            delay = delay + 0.1
        })

        animation_item.forEach((item) => {
            item.classList.add('animate__fadeInUp');
        })

        clearInterval(forExpertise);
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




// ----------------------------------------------------------------------------------

//Card Counter Increment 
let card = document.querySelectorAll(".counter>div>div:nth-child(1)");

// This function increments the numbers inside card
function counter_cards_interval() {
    let interval_time = 80;
    let card1, card2, card3;

    let n1 = 1;
    card1 = setInterval(() => {
        card[0].innerHTML = `<div>${n1}+</div>`;
        n1++;
        if (n1 == 16) {
            clearInterval(card1);
        }
    }, interval_time);


    let n2 = 1;
    card2 = setInterval(() => {
        card[1].innerHTML = `<div>${n2}+</div>`;
        n2++;
        if (n2 == 13) {
            clearInterval(card2);
        }
    }, interval_time);

    let n3 = 1;
    card3 = setInterval(() => {

        card[2].innerHTML = `<div>${n3}+</div>`;
        n3++;
        if (n3 == 10) {
            clearInterval(card3);
        }
    }, interval_time);


}

let counter_call = setInterval(() => {

    let view_height = window.innerHeight;

    let select_item = document.querySelector('.counter');
    let item_top = select_item.getBoundingClientRect().top;

    if (view_height - item_top >= 260) {
        counter_cards_interval();
        clearInterval(counter_call);
    }

}, 500)