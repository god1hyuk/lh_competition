const sliderWrapper = document.querySelector('.slider_wrapper');
const itemAll = document.querySelectorAll('.slider_item');
const itemMarginLeft = Number(parseFloat(window.getComputedStyle(itemAll[1]).getPropertyValue('margin-left')));

let curIndex = 0;
console.log(curIndex);

const slidePrev = document.querySelector('#slidePrev');
const slideNext = document.querySelector('#slideNext');
const clonedFirst = itemAll[0].cloneNode(true);
const clonedSecond = itemAll[1].cloneNode(true);
const clonedLast = itemAll[itemAll.length-1].cloneNode(true);

const sliderItem = [];
for (item of itemAll) {
    sliderItem.push(item);
}

sliderItem[0].style.transform = 'translateY(0)';

slideNext.addEventListener('click', function () {
    curIndex++;

    if (curIndex > sliderItem.length-1) {
        // sliderItem[curIndex].style.transform = 'translateY(' + 300 + 'px)';
        curIndex = 0;
    }

    sliderWrapper.style.transition = 'right 1.5s';
    sliderItem[curIndex].style.transition = 'transform 1.5s';
    // sliderItem[curIndex-1].style.transition = '1.5s';
    sliderItem[curIndex].style.transform = 'translateY(0)';
    sliderWrapper.style.right = -(itemAll[0].offsetWidth + itemMarginLeft) * (curIndex) + 'px';
    // sliderWrapper.style.right = -(itemAll[0].offsetWidth) * curIndex + 'px';
    // sliderItem[curIndex-1].style.marginLeft = 0 + 'px';

    console.log(curIndex);
});

// slidePrev.addEventListener('click', function () {

// });

// 아카이빙
const arch_li = document.querySelectorAll('.arch_list li');
for (let i=0; i<arch_li.length; i++) {
    arch_li[i].style.backgroundImage = 'url(asset/images/archiving' + i + '.jpg)';
};