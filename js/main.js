let btn = document.querySelector('.main_btn-arrow');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('features').scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
});

/* let slides = document.getElementsByClassName('imaggg'),
    prevBtn = document.getElementById('slider_btn-left'),
    nextBtn = document.getElementById('slider_btn-right'),
    slideIndex = 2;
ShowSlides(slideIndex);



function ShowSlides(n) {
    if (n < 1) slideIndex = slides.length;
    else if (n > slides.length) slideIndex = 1;
    for (let i = 0; i < slides.length; i++){
        slides[i].classList.remove('slider_resize');
        slides[i].classList.add('slider_small');
    }
    
    if(slideIndex == 3)slides[slideIndex - 1].parentElement.classList.remove('rr');
    else slides[2].parentElement.classList.add('rr');
    slides[slideIndex - 1].classList.remove('slider_small');
    slides[slideIndex - 1].classList.add('slider_resize');
    
}

function plusSlide(n) {

    ShowSlides(slideIndex += n);
}

prevBtn.onclick = function () {
    plusSlide(-1);
}
nextBtn.onclick = function () {
    plusSlide(1);
}
 */

let burgerBtn = document.querySelector('.header_btn');
let btnClick = false;
let menuList = document.querySelector('.menu_list');
let headerMenu = document.querySelector('.header_menu')
burgerBtn.addEventListener('click', function(event){
    let start = 0.1;
    if(btnClick) {
/*         let timer = setInterval(function() {
            headerMenu.style.opacity = start ;
            start += 0.2;
    
            
           
            if (start > 1.2) clearInterval(timer);
    
        }, 0); */
        // headerMenu.classList.add('posit');
        /* menuList.style.position = 'fixed'; */
        
        headerMenu.style.display = 'block';
        burgerBtn.classList.add('open');
/*         menuList.classList.add('active');
        menuList.classList.remove('hidden');
        headerMenu.style.cssText = "z-index:10;";   */
        btnClick = false;
        return;
    }
    else{
        burgerBtn.classList.remove('open');
        
        // headerMenu.classList.remove('posit');
        
        /* headerMenu.style.opacity = 0;
        headerMenu.style.cssText = "z-index:-10;"; 
        menuList.classList.add('hidden');
        menuList.classList.remove('active'); */
        btnClick = true;
    }
});


$(function(){
    $('.multiple-items').slick({
        nextArrow: '<button type="slick-btn" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="slick-btn" class="slick-btn slick-prev"></button>',
        arrow:true,
        infinite:true,
        centerMode:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:'0px',
        
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            },
            {
                breakpoint: 340,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  centerMode:false,
                  centerPadding:'0px'
                }
              }
          ]
          
    });
    
    $('.header_btn').on('click', function(){
        $('.menu_list ').slideToggle();
        
    });
    

});

