import React, { Component } from 'react';
import { List, Avatar } from 'antd';

class Content extends Component {
  constructor(props) {
    super(props);
    
  }

 
  

  render() {

    const list = this.props.list
    return (
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a key={item.id}>edit</a>]}>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.lession}
        /><div>{item.index}</div>
          </List.Item>
        )}
      />
    );
        }

}


export default Content;