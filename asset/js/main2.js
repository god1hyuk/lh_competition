
// 메인 페이지

// 메인 슬라이더
$(document).ready(function () {
    const sliderWrapper = $('.main_slider .slider_wrapper');
    const sliderItem = $('.main_slider .slider_item');
    const sliderItem_width = sliderItem[0].clientWidth;
    const itemMarginLeft = Number(parseFloat(window.getComputedStyle(sliderItem[0]).getPropertyValue('margin-left')));
    const clonedFirst = sliderItem[0].cloneNode(true);
    const clonedLast = sliderItem[sliderItem.length-1].cloneNode(true);
    sliderWrapper.append(clonedFirst);
    sliderWrapper.prepend(clonedLast);
    
    let slideCount = 0;
    console.log(slideCount);
    sliderWrapper.css('right', -(sliderItem_width + itemMarginLeft) * (slideCount + 1) + 'px');
    sliderItem[0].style.transform = 'translateY(0)';

    $('.main_slider #sliderNext').on('click', function () {
        slideCount++;
        console.log(slideCount);
        sliderWrapper.css('transition', 'right 1.2s');
        sliderWrapper.css('right', -(sliderItem_width + itemMarginLeft) * (slideCount + 1) + 'px');
        sliderItem[slideCount].style.transform = 'translateY(0)';
        if(slideCount > sliderItem.length -2) {
            setTimeout(function () {
                slideCount = -1;
                sliderWrapper.css('transition', '0s');
                sliderWrapper.css('right', -(sliderItem_width + itemMarginLeft) * (slideCount + 1) + 'px');
                $('.main_slider .slider_item').css('transform', 'translateY(10.9896vw)');
                console.log(slideCount);
            }, 1200);
        }
    });
    $('.main_slider #sliderPrev').on('click', function () {
        slideCount--;
        console.log(slideCount);
        sliderWrapper.css('transition', 'right 1.2s');
        sliderWrapper.css('right', -(sliderItem_width + itemMarginLeft) * (slideCount + 1) + 'px');
        sliderItem[slideCount+1].style.transform = 'translateY(10.9896vw)';
        if(slideCount < 0) {
            setTimeout(function () {
                slideCount = 4;
                sliderItem[0].style.transform = 'translateY(0)';
                sliderWrapper.css('transition', '0s');
                sliderWrapper.css('right', -(sliderItem_width + itemMarginLeft) * (slideCount + 1) + 'px');
                console.log(slideCount);
            }, 1200);
        }
    });
});