const sliderWrapper = document.querySelector('.slider_wrapper');
const itemAll = document.querySelectorAll('.slider_item');
const itemMarginLeft = Number(parseFloat(window.getComputedStyle(itemAll[0]).getPropertyValue('margin-left')));

let curIndex = 0;
console.log(curIndex);

const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');
const clonedFirst = itemAll[0].cloneNode(true);
const clonedSecond = itemAll[1].cloneNode(true);
const clonedLast = itemAll[itemAll.length-1].cloneNode(true);
sliderWrapper.append(clonedFirst);
sliderWrapper.append(clonedSecond);
sliderWrapper.prepend(clonedLast);

const sliderItem = [];
for (item of sliderWrapper.children) {
    sliderItem.push(item);
}

sliderWrapper.style.right = -(itemAll[0].offsetWidth + itemMarginLeft) + 'px';
itemAll[0].style.transform = 'translateY(0)';
sliderItem[0].style.transform = 'translateY(0)';
sliderItem[curIndex].style.opacity = 0;

console.log(sliderItem[curIndex + 1]);

sliderNext.addEventListener('click', function () {
    curIndex++;

    // console.log(itemAll[curIndex]);
    console.log(sliderItem[curIndex + 1]);

    sliderWrapper.style.transition = 'right 1.2s';
    sliderItem[curIndex + 1].style.transition = 'transform 1.2s';
    sliderItem[curIndex].style.transition = 'all 1.2s';
    sliderItem[curIndex + 1].style.transform = 'translateY(0)';
    sliderWrapper.style.right = -(itemAll[0].offsetWidth + itemMarginLeft) * (curIndex + 1) + 'px';
    sliderItem[curIndex].style.opacity = 0;

    if (curIndex > itemAll.length-2) {
        setTimeout(function () {
            curIndex = -1;
            console.log(curIndex);
            for (item in sliderItem) {
                sliderItem[item].style.transition = 'all 0s';
                sliderItem[item].style.opacity = 1;
                sliderItem[item].style.transform = 'translateY(11.0878vw)';
            }
            sliderWrapper.style.transition = 'right 0s';
            sliderItem[curIndex+1].style.transform = 'translateY(0)';
            sliderWrapper.style.right = -(itemAll[0].offsetWidth) * (curIndex + 1) + 'px';
        }, 1200);
    }

    console.log(curIndex);
});

sliderPrev.addEventListener('click', function () {
    curIndex--;

    console.log(sliderItem[curIndex + 1]);

    sliderWrapper.style.transition = 'right 1.2s';
    sliderItem[curIndex+1].style.transition = 'all 1.2s';
    sliderItem[curIndex+2].style.transition = 'transform 1.2s';
    sliderWrapper.style.right = -(itemAll[0].offsetWidth + itemMarginLeft) * (curIndex + 1) + 'px';
    sliderItem[curIndex+1].style.transform = 'translateY(0)';
    sliderItem[curIndex+1].style.marginLeft = '14.0305vw';
    sliderItem[curIndex+1].style.opacity = 1;
    sliderItem[curIndex+2].style.transform = 'translateY(11.0878vw)';
    
    if (curIndex < 0) {
        setTimeout(function () {
            curIndex = itemAll.length-1;
            console.log(curIndex);
            for (item in sliderItem) {
                sliderItem[item].style.transform = 'translateY(0)';
            }
            sliderWrapper.style.transition = 'right 0s';
            sliderItem[curIndex+1].style.transition = 'transform 0s';
            sliderWrapper.style.right = -(itemAll[0].offsetWidth + itemMarginLeft) * (curIndex + 1) + 'px';
            sliderItem[curIndex+2].style.transform = 'translateY(11.0878vw)';
            sliderItem[curIndex].style.opacity = 1;
        }, 1200);
    }
    
    console.log(curIndex);
});

// 아카이빙
const arch_li = document.querySelectorAll('.arch_list li');
for (let i=0; i<arch_li.length; i++) {
    arch_li[i].style.backgroundImage = 'url(asset/images/archiving' + i + '.jpg)';
};