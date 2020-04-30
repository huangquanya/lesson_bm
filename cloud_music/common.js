
window.onload = function() {
    const tabLinks = this.document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
        }, false)
    })
    
    
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
  
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
  
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })  
      fetch('http://localhost:3000/banner').then(data => data.json()).then(data => {
            document.querySelector('.swiper-wrapper').innerHTML = data
            .banners.map(function(arr) {
                 return `
                 <div class="swiper-slide">
                     <img class="focus-item-img" src="${arr.imageUrl}">
                   </div>
                 `
            }).join('')
        })
}
