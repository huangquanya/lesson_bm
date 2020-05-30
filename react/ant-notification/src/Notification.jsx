import React from 'react';
import ReactDom from 'react-dom';

class Notification extends React.Component {
    // 定义一个类class的属性
    state = {
        visiable: false,
        title: null
    }
    open = ({title}) => {
        this.setState({
            visiable: true,
            title
        })
    }
    close = () => {
        this.setState({
            visiable: false
        })
    }
    render() {
        const { visiable, title } = this.state;
        return(
            <div className={ visiable ? 'show' : 'hidden'}>
                { title }
            </div>
        )
    }
}
// 生成实例 被react封装起来了
function createNotification() {
    // const div = document.createElement('div');
    const ref = React.createRef();
    // ref 就是拿到react内部封装类上的实例
    // 有实例就可以调用上面的方法
    // ref.current = new Notification();
    // ref = new Notification(); ref.current.open  ref.current.close
    // ReactDom.render(<Notification ref={ref} />, div);
    // document.body.appendChild(div);
    ReactDom.render(<Notification ref={ref} />,
        document.querySelector('#notification') );
    return {
        open: ref.current.open,
        close: ref.current.close
    }
}
let notification = null;
if(!notification) {
    const { open, close } = createNotification();
    notification = {
        open,
        close
    }
}

export default notification;