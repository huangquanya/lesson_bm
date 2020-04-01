const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function handleMove(e) {
    // console.log(e.pageY)
    const y = e.pageY - this.offsetTop;//offsetTop获取某个doom结构到浏览器结构的距离
    const percent = y / this.offsetHeight//offsetHeight用于获取某doom结构的高度
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent*100)+'%';
    const playbackRate = percent * ( max - min ) + min;
    
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;


}

speed.addEventListener('mousemove', handleMove)