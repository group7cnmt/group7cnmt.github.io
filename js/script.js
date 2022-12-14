window.addEventListener('load', function(){
    this.document.querySelector('.loader').style.display = 'none';
});
var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
interval=setInterval(function(){ 
  percent++; 
  cnt.innerHTML = percent; 
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==100){
    setTimeout(() => {
        percent = 0;
    }, 100);
  }
},75);
AOS.init();
// Menu btn
const menuBtn = document.querySelector('.menu_btn_blog');
const nav = document.querySelector('nav');
let isMenu = false;
menuBtn.addEventListener('click', function(){
    if (!isMenu) {
        this.classList.add('active');
        nav.classList.add('active');
        isMenu = true;
    } else{
        this.classList.remove('active');
        nav.classList.remove('active');
        isMenu = false;
    }
});
// animate navbar
function navScroll() {
    var lastScrollTop = 0, delta = 50;
    $(window).scroll(function(){
        var nowScrollTop = $(this).scrollTop();
        if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
            if (nowScrollTop > lastScrollTop){
                nav.classList.remove('sticky');
                nav.classList.add('animate');
            } else {
                nav.classList.remove('animate');
                nav.classList.add('sticky');
            }
            lastScrollTop = nowScrollTop;
            if (nowScrollTop < 50) {
                nav.classList.remove('sticky');
            }
        }
    });
}
navScroll();

let daysToExpire = new Date(2147483647 * 1000).toUTCString();
function getCookie(cName) {
    let name = cName + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}

// day night mode
const main = document.querySelector('.main');
const day = document.querySelector('.day_icon');
const night = document.querySelector('.night_icon');
function dayNight(){
    day.addEventListener('click', function(){
        main.classList.remove('night');
        main.classList.add('day');
        document.cookie = `theme=day; expires=${daysToExpire}`;
    });
    night.addEventListener('click', function(){
        main.classList.remove('day');
        main.classList.add('night');
        document.cookie = `theme=night; expires=${daysToExpire}`;
    });
}
dayNight();
if (getCookie('theme') == 'day') {
    main.classList.remove('night');
    main.classList.add('day');
} else if (getCookie('theme') == 'night') {
    main.classList.remove('day');
    main.classList.add('night');
}
// Read more 
function readMoreFnc() {
    const readMore = document.querySelectorAll('.read_more');
    const readMoreBtn = document.querySelectorAll('.read_more_btn');
    for (let i = 0; i < readMore.length; i++) {
    readMoreBtn[i].addEventListener('click', function(){
        readmore(readMore[i], readMoreBtn[i]);
    })
    }
    function readmore(readM, readMbtn) { 
        if (readMbtn.innerHTML == ' Read more ...') {
            readM.style.display = 'block';
            readMbtn.innerHTML = 'Read Less';
        } else{
            readM.style.display = 'none';
            readMbtn.innerHTML = ' Read more ...';
        }
    }
}

readMoreFnc();
// glide slider
const config = {
    type: 'carousel',
    perView: 1,
    startAt: 3,
    gap: 50,
    autoplay: 4000,
    600: {
        gap: 15
    },
    hoverpause: true
}
new Glide('.glide', config).mount();
// animate icon
const projectsIcons = document.querySelectorAll('#animateIcon');
const iconLove = document.querySelectorAll('#animateIcon');
function projectAnimate() {
    for (let i = 0; i < projectsIcons.length; i++) {
        projectsIcons[i].addEventListener('click', function(){
            iconHover(this);
        });
        projectsIcons[i].addEventListener('mouseover', function(){
            iconHover(this);
        });
        projectsIcons[i].addEventListener('mouseout', function(){
            iconHoverOut(this);
        });
        iconLove[i].addEventListener('click', function(){
            this.classList.toggle('active');
        });
    }
    function iconHover(icons){
        icons.classList.remove('far');
        icons.classList.add('fas');
    }
    function iconHoverOut(icons){
        if (!icons.classList.contains('active')) {   
            icons.classList.remove('fas');
            icons.classList.add('far');
        }
    }
}
projectAnimate();
// service card animate
const serviceCard = document.querySelectorAll('.service_card');
const learnMore = document.querySelectorAll('.learn_more');
const learnBack = document.querySelectorAll('.learn_back');
for (let i = 0; i < learnMore.length; i++) {
    learnMore[i].addEventListener('click', function(){
        serviceCard[i].classList.add('active');
    })    
    learnBack[i].addEventListener('click', function(){
        serviceCard[i].classList.remove('active');
    })    
}
// Comment select option
const select = document.querySelectorAll('.select');
const selectInput = document.querySelectorAll('.select_input');
const options = document.querySelectorAll('.options_item');
let activeOption = 0;
function comment_inputs() {
    window.addEventListener('click', function(e){
        for (let i = 0; i < select.length; i++) {
            if(e.target != selectInput[i]){
                select[i].classList.remove('active');
                options[i].classList.remove('active');
            } else{
                select[i].classList.toggle('active');
                options[i].classList.toggle('active');
            }
        }
    });
    options.forEach((item, i) => {
        item.addEventListener('mousemove', function(){
            hoverOptions(i);
        });
    });
    function hoverOptions(i){
        options[activeOption].classList.remove('active');
        options[i].classList.add('active');
        activeOption = i;
        for (let j = 0; j < select.length; j++) {
            if (select[j].classList.contains('active')) {
                setValue(j);
            }
        }
    }
    function setValue(j){
        selectInput[j].value = selectInput[j].innerHTML = options[activeOption].innerHTML;
    };
}
comment_inputs();
const iframePdf = document.querySelector('.iframe_wrap');
const viewCvBtn = document.querySelector('.cv_view');
const navList = document.querySelector('.nav_list');
const menuIcon = document.querySelector('.menu_btn');
const menuSpan = document.querySelector('.menu_btn_span');
window.addEventListener('click', function(e) {
    if(e.target == iframePdf || e.target == viewCvBtn){
        e.preventDefault();
        iframePdf.style.display = 'block';
    } else{
        iframePdf.style.display = 'none';
    }
    if (isMenu) {   
        if (e.target == menuIcon || e.target == menuSpan || e.target == navList) {
            iframePdf.style.display = 'none';
        } else{
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
            isMenu = false;
        }
    }
});
const comment = document.querySelectorAll('.comment');
const commentEditForm = document.querySelectorAll('.comment_edit_form');
const editCommentBtn = document.querySelectorAll('#edit');
const delCommentBtn = document.querySelectorAll('#delete');
const deleteAlert = document.querySelector('.delete_alert');
const cancelCommentBtn = document.querySelectorAll('.cancel_comment_btn');
const commentText = document.querySelectorAll('.comment_text');
for (let i = 0; i < editCommentBtn.length; i++) {   
    let commentWidth = comment[i].offsetWidth;
    editCommentBtn[i].addEventListener('click', function(e){
        e.preventDefault();
        commentText[i].style.display = 'none';
        commentEditForm[i].style.display = 'block';
        comment[i].style.width = commentWidth + 'px';
    });
    cancelCommentBtn[i].addEventListener('click', function(){
        commentText[i].style.display = 'block';
        commentEditForm[i].style.display = 'none';
    });
    delCommentBtn[i].addEventListener('click', function(e){
        e.preventDefault();
        let delHref = this.getAttribute('href');
        deleteAlert.querySelector('.btn').href = delHref;
    });
}
window.addEventListener('click', function(e){
    for (let i = 0; i < delCommentBtn.length; i++) { 
        if (e.target != delCommentBtn[i] && e.target != delCommentBtn[i].querySelector('i') && e.target != deleteAlert) {
            deleteAlert.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else{
            deleteAlert.classList.add('active');
            document.body.style.overflow = 'hidden';
            break;
        }
    }
});

