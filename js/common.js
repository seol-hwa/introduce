header();
introduce();
about();
portfolio();
contact();
systemMode();

function header() {
    const head = document.querySelector('#gnb');
    const body = document.querySelector('body');
    const lis = document.querySelectorAll('.gnb-list li');
    const menus = document.querySelectorAll('.gnb-menu');
    const intro = document.querySelectorAll('.intro');
    const introCon = document.querySelector('.introduce-container');
    const upContent = document.querySelectorAll('.upContent');
    const section = document.querySelectorAll('.section');

    window.addEventListener('scroll', function () {
        const mainHeight = introCon.offsetHeight;

        if (-(mainHeight - 164) > introCon.getBoundingClientRect().top) {
            classAllRemove(intro, 'on');
            if (-(mainHeight - 84) >= introCon.getBoundingClientRect().top) {
                head.classList.add('on');
                section.forEach((item, index) => {
                    let sectionScroll = item.getBoundingClientRect().top;

                    if (mainHeight / 2 > sectionScroll && sectionScroll > 0) {
                        menuToggle(index);
                    }
                })
            } else {
                head.classList.remove('on');
                menuToggle(0);
            }

        } else {
            intro.forEach(all => {
                all.classList.add('on');
            })
        }

        upContent.forEach(item => {
            const contentScroll = item.getBoundingClientRect().top;
            if (mainHeight - 164 > contentScroll) {
                item.classList.add('on');
            } else {
                item.classList.remove('on');
            }
        })
    })

    function menuToggle(num) {
        classAllRemove(menus, 'on');
        menus[num].classList.add('on');
        classAllRemove(lis, 'on');
        lis[num].classList.add('on');
    }


    pcGnb();
    mobileGnb();
    function pcGnb() {

        menus.forEach((menu, index) => {
            menu.addEventListener('click', function (e) {
                const offsetAbsolute = (window.pageYOffset + section[index].getBoundingClientRect().top) - 160;
                e.preventDefault();

                classAllRemove(menus, 'on');
                this.classList.add('on');
                classAllRemove(lis, 'on');
                lis[index].classList.add('on');

                window.scrollTo({ left: 0, top: offsetAbsolute, behavior: 'smooth' });
            });
        });
    }
    function mobileGnb() {
        const btn = document.querySelector('.mobile-gnb-btn');
        const gnbWrap = document.querySelector('.mobile-wrap');
        const mobileMenus = document.querySelectorAll('.mobileMenu');
        let openCheck = false;

        btn.addEventListener('click', function () {
            if (openCheck == false) {
                gnbWrap.classList.add('on');
                body.style.overflow = 'hidden';
                openCheck = true;
            } else {
                gnbWrap.classList.remove('on');
                body.style.overflow = 'visible';
                openCheck = false;
            }
        });
        mobileMenus.forEach((menu, index) => {
            menu.addEventListener('click', function (e) {
                const offsetAbsolute = (window.pageYOffset + section[index].getBoundingClientRect().top) - 100;
                e.preventDefault();

                classAllRemove(menus, 'on');
                this.classList.add('on');
                classAllRemove(lis, 'on');
                lis[index].classList.add('on');

                window.scrollTo({ left: 0, top: offsetAbsolute, behavior: 'smooth' });

                gnbWrap.classList.remove('on');
                body.style.overflow = 'visible';
                openCheck = false;
            });

        });

    }
}
function introduce() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            this.classList.add('off');
        })
    })
}
function about() {
    const img = document.querySelector('.about-img');
    let imgAbsolute = window.pageYOffset + img.getBoundingClientRect().top;
    const aboutBox = document.querySelector('.about-box');
    let aboutBoxAbsoluteBot = window.pageYOffset + aboutBox.getBoundingClientRect().top;
    let imgAbsoluteBot = aboutBoxAbsoluteBot + aboutBox.clientHeight - img.offsetHeight - 150;


    window.addEventListener('scroll',function(){
        parallaxScroll(imgAbsolute, imgAbsoluteBot);
    });

    function parallaxScroll(imgAbsolute, imgAbsoluteBot) {
        const bodyTop = document.querySelector('body').getBoundingClientRect().top;

        if (window.matchMedia('(max-width:1024px)').matches == true) {

            if (bodyTop <= -(imgAbsolute - 150) && bodyTop > -imgAbsoluteBot) {
                img.classList.add('onFixed');
                img.classList.remove('onBottom');
            } else if (bodyTop <= -imgAbsoluteBot) {
                img.classList.remove('onFixed');
                img.classList.add('onBottom');
            } else {
                img.classList.remove('onFixed');
            }
        }
    }

    window.addEventListener('resize', function () {
        imgAbsolute = window.pageYOffset + img.getBoundingClientRect().top;
        aboutBoxAbsoluteBot = window.pageYOffset + aboutBox.getBoundingClientRect().top;
        imgAbsoluteBot = aboutBoxAbsoluteBot + aboutBox.clientHeight - img.offsetHeight - 150;

        parallaxScroll(imgAbsolute, imgAbsoluteBot);
    });
}
function portfolio(){
    const title =document.querySelectorAll('.portfolio-title');
    const portfolioItem=document.querySelectorAll('.portfolio-item');

    portfolioItem.forEach((item,index)=>{
        item.addEventListener('mouseenter',function(){
            title[index].classList.add('hov');
        })
        item.addEventListener('mouseleave',function(){
            title[index].classList.remove('hov');
        })
    })
}
function contact(){
    const send=document.querySelectorAll('.send');
    const contactBox=document.querySelectorAll('.contact-box');
    const title=document.querySelectorAll('.contact-title');

    send.forEach((item,index)=>{
        item.addEventListener('mouseenter',function(){
            contactBox[index].classList.add('hov');
            title[index].classList.add('hov');
        })
        item.addEventListener('mouseleave',function(){
            contactBox[index].classList.remove('hov');
            title[index].classList.remove('hov');
        })
    })
}


//declare
function classAllRemove(target, class_name) {
    target.forEach(all => {
        all.classList.remove(class_name);
    });
}