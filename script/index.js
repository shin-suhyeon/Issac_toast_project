const visual = new Swiper('.visual',{
    autoplay:{delay:3000},
    /* effect:'fade', */
    effect:'horizontal',
    pagination: {
        el: '.bg1 .swiper-pagination',
    },
})

const toast = new Swiper('.toast',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop:'true',
})
const set = new Swiper('.set',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop:'true',
})
const side = new Swiper('.side',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop:'true',
})
const drink = new Swiper('.drink',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop:'true',
})
const all = new Swiper('.all',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    loop:'true',
})
const alram = new Swiper('.alram',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    loop:'true',
})
const event = new Swiper('.event',{
    autoplay:{delay:3000},
    direction:'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    loop:'true',
})

/* navi */
const nav  =document.querySelector('nav')
const gnb  =document.querySelectorAll('.gnb')
const nav_bg  =document.querySelector('.nav_bg')
const snb =document.querySelectorAll('.snb')
nav_bg.style.height = '0'
nav_bg.style.transition = 'height 0.3s'
for(let i of snb)
    {i.style.height = '0'; 
    i.style.overflow = 'hidden'
    i.style.transition = 'height 0.3s'}
nav.addEventListener('mouseover',()=>{
    nav_bg.style.height = '180px';
    for(let i of snb){
        i.style.height = '180px'; 
    }
})
nav.addEventListener('mouseout',()=>{
    nav_bg.style.height = '0';
    for(let i of snb){
        i.style.height = '0'; 
    }
})
