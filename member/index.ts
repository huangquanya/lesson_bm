// console.log('hellow member')

// 1. 写死了，不能动态更新
// 2. js uuid npm包
// 3. 数据不严谨
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
    tel: number;
    hometown: string;
}




const members: MembersEntity[] = [
    {
        id: 1314,
        name: '黄',
        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg',
        tel: 18100000000,
        hometown:'湖北'
    },
    {
        id: 520,
        name:'张',
        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg',
        tel: 18100000000,
        hometown:'湖北'
    },
    {
        id: 1000,
        name: `晓`,
        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg',
        tel: 18100000000,
        hometown:'湖北'
    }
]
function render() {
    const tbody = document.querySelector('#member tbody');
    tbody.innerHTML = members.map((member) => {
        return`
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>
                <img src="${member.avatar}" />
            </td>
            <td>${member.tel}</td>
            <td>${member.hometown}</td>
        </tr>
        `
    }).join("")
}
render();

const submit = document.querySelector('.submit');
function addItem(event) {
    event.preventDefault();
    const idInput = (document.querySelector('#idInput') as HTMLInputElement).value;
    const nameInput = (document.querySelector('#nameInput') as HTMLInputElement).value;
    const avatarInput = (document.querySelector('#avatarInput') as HTMLInputElement).value;
    const telInput = (document.querySelector('#telInput') as HTMLInputElement).value;
    const hometownInput = (document.querySelector('#hometownInput') as HTMLInputElement).value;
    let obj = {
        id: Number(idInput),
        name: nameInput,
        avatar: avatarInput,
        tel: Number(telInput),
        hometown: hometownInput
    }
    members.push(obj);
    render();
}
//获取指定form中的所有的<input>对象  
// function getElements() {
//     event.preventDefault();  
//     var form = submit;  
//     var elements = new Array();  
//     var tagElements = form.querySelectorAll('.form-control').values; 
//     console.log(tagElements) ;
//     for (let j = 0; j < tagElements.length; j++){ 
//        elements.push(tagElements[j]); 
//     } 
//     let obj = {
//         id: Number(elements[0]),
//         name: elements[1],
//         avatar: elements[2],
//         tel: Number(elements[3]),
//         hometown: elements[4]
//     }
//     members.push(obj);
//     render();
//   }
submit.addEventListener('submit',addItem)
