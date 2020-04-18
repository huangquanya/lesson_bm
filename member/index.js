// console.log('hellow member')
var members = [
    {
        id: 1314,
        name: '黄',
        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg',
        tel: 18100000000,
        hometown: '湖北'
    },
    {
        id: 520,
        name: '张',
        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg',
        tel: 18100000000,
        hometown: '湖北'
    },
    {
        id: 1000,
        name: "\u6653",
        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170724/ad28da0d658b43aba84ce91df9cacdad.jpeg',
        tel: 18100000000,
        hometown: '湖北'
    }
];
function render() {
    var tbody = document.querySelector('#member tbody');
    tbody.innerHTML = members.map(function (member) {
        return "\n        <tr>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>\n                <img src=\"" + member.avatar + "\" />\n            </td>\n            <td>" + member.tel + "</td>\n            <td>" + member.hometown + "</td>\n        </tr>\n        ";
    }).join("");
}
render();
var submit = document.querySelector('.submit');
function addItem(event) {
    event.preventDefault();
    var idInput = document.querySelector('#idInput').value;
    var nameInput = document.querySelector('#nameInput').value;
    var avatarInput = document.querySelector('#avatarInput').value;
    var telInput = document.querySelector('#telInput').value;
    var hometownInput = document.querySelector('#hometownInput').value;
    var obj = {
        id: Number(idInput),
        name: nameInput,
        avatar: avatarInput,
        tel: Number(telInput),
        hometown: hometownInput
    };
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
submit.addEventListener('submit', addItem);
