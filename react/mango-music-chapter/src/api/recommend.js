export function getNewAlbum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                img: '',
                name: '断桥残雪',
                singer: '许嵩',
                publicTime: '2018-01-28'
            }])
        }, 3000);
    })
}