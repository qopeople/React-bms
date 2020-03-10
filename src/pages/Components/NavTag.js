import React, { Component } from 'react';
import {  Tag, Tooltip } from "antd";
import "../../styles/home-layout.css";
import store  from '../../redux/store';
class NavTag extends Component{
    constructor(props){
        super(props);
        this.state = {
            tags: []
          };
          store.subscribe(()=>{
            this.setState({
                tags :store.getState()
            })
           
          });
        //   this.handleChange = this.handleChange.bind(this); 
    }
    handleChange(tagName){
        this.props.onHandle(tagName);
    }
      handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
        store.dispatch({ type: 'DECREMENT',text:removedTag}) //更新state
      };
    
    render(){
        const { tags } = this.state;
        const {currentpage} = this.props;
        return(
      <div className="yy-tags">
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 20;
                  const tagElem = (
                    <Tag
                      key={tag}
                      closable
                      onClose={() => this.handleClose(tag)}
                      color={tag==currentpage?'green':'blue'}
                      onClick={this.handleChange.bind(this,tag)}
                    >
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                    tagElem
                  );
                })}
              </div>
        );
    }
}
export default NavTag;