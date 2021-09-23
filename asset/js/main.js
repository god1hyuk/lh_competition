// 인트로 페이지
const loadingPage = document.querySelector('.loading_page');
const introLogo = document.querySelector('.loading_page .logo');

setTimeout(() => {
    introLogo.style.transition = 'opacity 1s';
    introLogo.style.opacity = 1;

    // 타이핑 효과
    let typingBool = false;
    let typingIndex = 0;
    let typingText = document.querySelector('.typing_text').textContent;
    const typingFx = document.querySelector('.typing');
    typingText = typingText.split(''); 

    setTimeout(() => {
        if (typingBool == false) {
            typingBool = true;
            var typingInt = setInterval(typing, 120);
        }

        function typing () {
            if (typingIndex < typingText.length) {
                typingFx.append(typingText[typingIndex]);
                typingIndex++;
            } else if (typingIndex == typingText.length) {
                clearInterval(typingInt);
                setTimeout(() => {
                    makeLoader(101, loader, '#f27214');
                    loader.style.opacity = 1;
                }, 500);
            }
        }

        // 로더
        const loader = document.querySelector('.loader');
        const progressNum = document.querySelector('.loader .inner');
        loader.style.transition = 'opacity .5s';
        loader.style.opacity = 0;

        const makeLoader = (percent, classname, color) => {
            let i = 0;
            let loaderFn = setInterval(function () {
                if (i < percent) {
                    colorFn(i, classname, color);
                    progressNum.textContent = i + " %";
                    i++;
                } else {
                    clearInterval(loaderFn);
                    setTimeout(() => {
                        loadingPage.style.transition = 'opacity 1s';
                        loadingPage.style.opacity = 0;
                    }, 500);
                    setTimeout(() => {
                        location.href = 'index.html';
                    }, 2000);
                }
            }, 50);
        }

        const colorFn = (i, classname, color) => {
            classname.style.background = 'conic-gradient(' + color + ' 0%' + i + '%, #ececec ' + i + '% 100%)';
        }

    }, 1000);

}, 1000);

// 팝업
const body = document.body;
const modal = document.querySelectorAll('.modal_bg');
const modal_on = document.querySelectorAll('#modal_on');
const modal_close = document.querySelectorAll('.modal_close');


for (let i=0; i<modal.length; i++) {
    modal_on[i].addEventListener('click', function () {
        body.style.overflow = 'hidden';
        modal[i].classList.add('active');
    });
    modal_close[i].addEventListener('click', function () {
        body.style.overflow = 'visible';
        modal[i].classList.remove('active');
    });
}

// 메인 슬라이더
const sliderWrapper = document.querySelector('.slider_wrapper');
const itemAll = document.querySelectorAll('.slider_item');
const itemMarginLeft = Number(parseFloat(window.getComputedStyle(itemAll[0]).getPropertyValue('margin-left')));

let curIndex = 0;
console.log(curIndex);

const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');
const pagination = document.querySelectorAll('.sPagination span');
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

    for (let i=0; i<pagination.length; i++) {
        pagination[i].classList.remove('active');
        pagination[i].style.transition = 'background .13s';
    }
    pagination[curIndex].classList.add('active');

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

    for (let i=0; i<pagination.length; i++) {
        pagination[i].classList.remove('active');
        pagination[i].style.transition = 'background .13s';
    }
    if (curIndex >= 0) {
        pagination[curIndex].classList.add('active');
    }

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

        pagination[pagination.length-1].classList.add('active');

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