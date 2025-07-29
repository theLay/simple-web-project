// 모바일 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글 버튼 추가
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none'; // 기본적으로 숨김
    
    header.insertBefore(mobileMenuBtn, nav);
    
    // 화면 크기에 따라 버튼 표시 여부 결정
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            nav.classList.add('mobile-nav');
        } else {
            mobileMenuBtn.style.display = 'none';
            nav.classList.remove('mobile-nav');
            nav.style.display = 'block';
        }
    }
    
    // 초기 화면 크기 확인
    checkScreenSize();
    
    // 화면 크기 변경 시 확인
    window.addEventListener('resize', checkScreenSize);
    
    // 모바일 메뉴 버튼 클릭 이벤트
    mobileMenuBtn.addEventListener('click', function() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });
});

// 간단한 이미지 슬라이더 (나중에 구현 예정)
function createImageSlider() {
    console.log('이미지 슬라이더 기능은 아직 구현되지 않았습니다.');
}
