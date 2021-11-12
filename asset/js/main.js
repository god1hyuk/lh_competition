// About Us
function aboutUsSlider() {
    window.onload = function () {
        const aboutUs = document.querySelector('.aboutus_page');
        const skip = document.querySelector('.skip_wrap');
        aboutUs.style.transition = 'opacity 3s';
        aboutUs.style.opacity = 1;
        skip.style.visibility = 'visible';
        skip.style.opacity = 1;
        const aboutUsItem = document.querySelectorAll('.aboutUs .swiper-slide');
        const img = document.querySelectorAll('.aboutUs .swiper-slide img');
        const textBar = document.querySelectorAll('.aboutUs .text_wrap');
        const text = document.querySelectorAll('.aboutUs h1');
        for (let i = 0; i < aboutUsItem.length; i++) {
            setInterval(function () {
                aboutUsAni.zoomOut(img[i]);
                // aboutUsAni.textBar(textBar[i]);
                // aboutUsAni.text(text[i]);
            }, 1000);
        }
    }

    const aboutUsSlider = new Swiper(".aboutUs", {
        effect: "fade",
        speed: 2000,
        // loop: false,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 각 슬라이드 별 애니메이션
    // const aboutUsAni = {
    //     zoomOut: function (t) {
    //         t.style.transition = 'transform 1.2s';
    //         t.style.transform = 'scale(1)';
    //         // alert('zoomOut');
    //     },
    //     textBar: function (cur) {
    //         alert('textBar');
    //     },
    //     text: function (cur) {
    //         alert('text');
    //     },
    // };
}

// 메인페이지
function mainSlider() {
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
    
    sliderWrapper.style.right = -(sliderItem[curIndex+1].offsetWidth) + 'px';
    sliderItem[curIndex+1].className += ' slider_current';
    pagination[curIndex].className += 'active';
    console.log(pagination[curIndex].classList);
    
    // 다음 버튼 클릭 시 이동
    sliderNext.addEventListener('click', function () {
        // 다중클릭 방지
        this.setAttribute('disabled', 'disabled');
        setTimeout(function () {
            sliderNext.removeAttribute('disabled');
        }, 1300);
    
        curIndex++;
    
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
    
    // 이전 버튼 클릭 시 이동
    sliderPrev.addEventListener('click', function () {
        // 다중클릭 방지
        this.setAttribute('disabled', 'disabled');
        setTimeout(function () {
            sliderPrev.removeAttribute('disabled');
        }, 1300);
    
        curIndex--;
    
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
}

$(function () {
    $('.main_page .dDay_list li').click(function () {
        location.href = 'competition_info.html';
    });
});

// Archiving
let arch_li = document.querySelectorAll('.arch_list .bg');
for (let i=0; i<arch_li.length; i++) {
    arch_li[i].style.backgroundImage = 'url(asset/images/archiving' + i + '.jpg)';
};


// 서브페이지

// 서브페이지 헤더
$(function () {      
    $(window).scroll(function () {
        let sTop = $(this).scrollTop();
        
        if(sTop > 0) {
            $('.sub_page header').css('border-bottom', '1px solid #e3e3e3');
        } else {
            $('.sub_page header').css('border-bottom', 'none');
        }
    });
}); 

// 상세정보 페이지 로드
window.onload = function () {
    const mainContent = document.querySelectorAll('.post .main_content');
    for (let i = 0; i < mainContent.length; i++) {
        mainContent[i].style.opacity = 1;
    }
}

// 모달
$(function () {
    $('#modal_on').click(function () {
        const modal_id = $(this).attr('data-tab');
        $('#' + modal_id).fadeIn(300);
        $('body').css('overflow', 'hidden'); 
    });
    $('#modal_off').click(function () {
        const modal_id = $(this).attr('data-tab');
        $('#' + modal_id).fadeOut(300);
        $('body').css('overflow-y', 'visible'); 
    })
});

// 탭
$(function () {
    $('.tab_index button').click(function () {
        $('.tab_index button').removeClass('active');
        $(this).addClass('active');
    });
});

// 공모소식
$(function () {
    $('.sub_page .tab_index button').click(function () {
        const tab_id = $(this).attr('data-tab');
        $('.sub_page .tab_index li button').removeClass('active');
        $('.sub_page .tab_content').removeClass('active');
        $(this).addClass('active');
        $('#' + tab_id).addClass('active');
        if($('.winner_info .tab_index')) {
            $('#scroll_index4').children('h4').children('strong').children('span').text(parseInt(tab_id.substring(3)) + 1);
        }
    });
});

// 공모소식 상세정보
$(function () {
    $('.bookmark_btn').click(function () {
        $(this).toggleClass('active');
    });
});

// 페이지 이동

$(function () {
    $('.main_page .arch_list li').click(function () {
        location.href = 'winner_info.html';
    });
    $('.main_page .archiving .more_btn').click(function () {
        location.href = 'winner_page.html';
    });
    $('.competition_page .album_type li, .competition_page .list_type li').click(function () {
        location.href = 'competition_info.html';
    });
    $('.winner_page .album_type li, .winner_page .list_type li').click(function () {
        location.href = 'winner_info.html';
    });
});

// 스크롤 인덱스
function scrollIndex() {
    $(function () {
        const sIndex = $('.sub_page .scroll_index li');
        const stickyPoint = sIndex.offset().top - sIndex.height() - 300;
        
        $(window).scroll(function () {
            if($(window).scrollTop() >= stickyPoint) {
                $('.sub_page .scroll_index').addClass('sticky');
            } else {
                $('.sub_page .scroll_index').removeClass('sticky');
            }
    
            for (let i = 0; i < sIndex.length; i++) {
                const sIndexOffset = $('#scroll_index' + i).offset().top - 300;
            
                if($(window).scrollTop() >= sIndexOffset) {
                    $(sIndex).removeClass('active');
                    $(sIndex).eq(i).addClass('active');
                } else if($(window).scrollTop() < $('#scroll_index' + 0).offset().top - 300) {
                    $(sIndex).removeClass('active');
                }
    
                sIndex.eq(i).click(function () {
                    $(window).scrollTop(sIndexOffset);
                });
                sIndex.eq(0).click(function () {
                    $(window).scrollTop(stickyPoint);   
                });
            }
        })
    });
}

// 아코디언
$(function () {
    $('.acc_content').hide();
    $('.download_page .accordion > li:first-child .acc_content').show();
    $('.accordion_btn').click(function () {
        $('.accordion_btn').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.acc_content').stop().slideToggle(300);
        $('.acc_content').not($(this).stop().next()).slideUp(300);
    });
    $('.winner_info .scroll_index > li:last-child').mouseover(function () {
        $(this).children('.acc_content').stop().slideDown(300);
    });
    $('.winner_info .scroll_index > li:last-child').mouseout(function () {
        $(this).children('.acc_content').stop().slideUp(300);
    });
});

// 공모결과
$(function () {
    $('.check_list input[type="checkbox"]').click(function () {
        if($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
});

// 상세조건
$(function () {
    $('.req_wrap').hide();
    $('.req_btn').click(function () {
        $(this).next('.req_wrap').fadeToggle(200);
    });
    $('.req_wrap .close_btn').click(function () {
        $(this).parent('.req_wrap').fadeOut(200);
    });
});

// 캘린더 팝업 (임시)
// FullCalendar (캘린더 팝업)
document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'dayGridMonth,listMonth prev,next today'
        },
        initialView: 'dayGridMonth',
        initialDate: '2021-09-24',
        titleFormat: function(date) {            
            return date.date.year + ' . ' + (('00' + (date.date.month + 1)).toString().slice(-2))
        },    
        editable: true,                
        selectable: true,
        businessHours: true,
        dayMaxEvents: true,
        fixedWeekCount: false,
        listWeek: true,
        events: [
            {
                color: '#dae5fd',
                title: '성남판교대장지구 A-10BL 공동주택 설계공모',
                start: '2021-09-01'
            }, {
                color: '#fed9db',
                title: '고양일산 및 홍성오관 행복주택 설계공모',
                start: '2021-09-03',
            }, {
                color: '#dae5fd',
                title: '경산대임 B-1BL 공동주택 설계용역',
                start: '2021-09-15',
            }, {
                color: '#fed9db',
                title: '국토지리정보원 및 익산송학 공공청사 복합개발사업 설계공모',
                start: '2021-09-20',
            }, {
                color: '#dae5fd',
                title: '한남대 캠퍼스 혁신파크 HUB동 설계공모',
                start: '2021-09-23',
            }, 
            // {
            //     groupId: 999, 
            //     title: 'Repeating Event',
            //     start: '2020-09-09T16:00:00'
            // },
        ],        
    });
    calendar.render();

});