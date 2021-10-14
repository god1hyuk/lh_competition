// 메인 슬라이더
const sliderWrapper = document.querySelector('.slider_wrapper');
const itemAll = document.querySelectorAll('.slider_item');
const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');
const pagination = document.querySelectorAll('.sPagination span');
const clonedFirst = itemAll[0].cloneNode(true);
const clonedSecond = itemAll[1].cloneNode(true);
const clonedLast = itemAll[itemAll.length-1].cloneNode(true);
sliderWrapper.appendChild(clonedFirst);
sliderWrapper.appendChild(clonedSecond);
sliderWrapper.insertBefore(clonedLast, itemAll[0]);
const sliderItem = sliderWrapper.children;

let curIndex = 0;
console.log(curIndex);

sliderWrapper.style.right = -(sliderItem[curIndex+1].offsetWidth) + 'px';
sliderItem[curIndex+1].className += ' slider_current';
pagination[curIndex].className += 'active';
console.log(pagination[curIndex].classList);

sliderNext.addEventListener('click', function () {
    // 다중클릭 방지
    this.setAttribute('disabled', 'disabled');
    setTimeout(function () {
        sliderNext.removeAttribute('disabled');
    }, 1300);

    curIndex++;
    console.log(curIndex);

    sliderWrapper.style.transition = 'right 1.3s';
    sliderWrapper.style.right = -(itemAll[0].offsetWidth) * (curIndex + 1) + 'px';
    for (let i=0; i<sliderItem.length-1; i++) {
        sliderItem[i].className = sliderItem[i].className.replace(' slider_current', '');
        sliderItem[i].style.transition = 'all 1.3s';
        sliderItem[i].firstElementChild.style.transition = 'translate 1.3s';
    }
    sliderItem[curIndex+1].className += ' slider_current'
    sliderItem[curIndex].style.opacity = 0;

    if (curIndex === itemAll.length) {
        curIndex = 0;
        console.log(curIndex);
        pagination[curIndex].className += 'active';
        setTimeout(function () {
            sliderWrapper.style.transition = 'right 0s';
            sliderWrapper.style.right = -(itemAll[0].offsetWidth) * (curIndex + 1) + 'px';
            for (let i=0; i<sliderItem.length-1; i++) {
                sliderItem[i].className = sliderItem[i].className.replace(' slider_current', '');
                sliderItem[i].style.transition = 'all 0s';
                sliderItem[i].style.opacity = 1;
                sliderItem[i].firstElementChild.style.transition = 'translate 0s';
            }
            sliderItem[curIndex+1].className += ' slider_current';
        }, 1300);
    }

    // 페이지네이션
    for (let i=0; i<pagination.length; i++) {
        pagination[i].className = pagination[i].className.replace('active', '');
        pagination[i].style.transition = 'background .13s';
    }
    pagination[curIndex].className += 'active';
});

sliderPrev.addEventListener('click', function () {
    // 다중클릭 방지
    this.setAttribute('disabled', 'disabled');
    setTimeout(function () {
        sliderPrev.removeAttribute('disabled');
    }, 1300);

    curIndex--;
    console.log(curIndex);

    sliderWrapper.style.transition = 'right 1.3s';
    sliderWrapper.style.right = -(itemAll[0].offsetWidth) * (curIndex + 1) + 'px';

    for (let i=0; i<sliderItem.length-1; i++) {
        sliderItem[i].className = sliderItem[i].className.replace(' slider_current', '');
        sliderItem[i].style.transition = 'all 1.3s';
        sliderItem[i].style.opacity = 1;
        sliderItem[i].firstElementChild.style.transition = 'translate 1.3s';
    }
    sliderItem[curIndex+1].className += ' slider_current';

    if (curIndex === -1) {
        curIndex = itemAll.length-1;
        console.log(curIndex);
        pagination[curIndex].className += 'active';
        setTimeout(function() {            
            sliderWrapper.style.transition = 'right 0s';
            sliderWrapper.style.right = -(itemAll[0].offsetWidth) * (curIndex + 1) + 'px';
            for (let i=0; i<sliderItem.length-1; i++) {
                sliderItem[i].className = sliderItem[i].className.replace(' slider_current', '');
                sliderItem[i].style.transition = 'all 0s';
                sliderItem[i].style.opacity = 1;
                sliderItem[i].firstElementChild.style.transition = 'translate 0s';
            }
            sliderItem[curIndex+1].className += ' slider_current';
        }, 1300);
    }

    // 페이지네이션
    for (let i=0; i<pagination.length; i++) {
        pagination[i].className = pagination[i].className.replace('active', '');
        pagination[i].style.transition = 'background .13s';
    }
    pagination[curIndex].className += 'active';
});

// 페이지네이션 클릭 시 이동
$(function() {
    $(pagination).click(function () {
        $(pagination).removeClass('active');
        $(this).addClass('active');
        curIndex = $(this).data('value');
        sliderWrapper.style.transition = 'right 1.3s';
        sliderWrapper.style.right = -(itemAll[0].offsetWidth) * (curIndex + 1) + 'px';
        for (let i=0; i<sliderItem.length-1; i++) {
            sliderItem[i].className = sliderItem[i].className.replace(' slider_current', '');
            sliderItem[i].style.opacity = 1;
        }
        sliderItem[curIndex+1].className += ' slider_current';
        sliderItem[curIndex].style.opacity = 0;
    });
});

// 로드 시 메인 슬라이더 트랜지션 방지
window.onload = function () {
    sliderWrapper.style.transition = 'none';
    for (let i=0; i<sliderItem.length; i++) {
        sliderItem[i].style.transition = 'none';
        sliderItem[i].firstElementChild.style.transition = 'none';
    }
}

// Archiving
let arch_li = document.querySelectorAll('.arch_list .bg');
for (let i=0; i<arch_li.length; i++) {
    arch_li[i].style.backgroundImage = 'url(asset/images/archiving' + i + '.jpg)';
};