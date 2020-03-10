import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class EditableTagGroup extends React.Component {
  state = {
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
   
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

 

//   handleInputConfirm = () => {
//     const { inputValue } = this.state;
//     let { tags } = this.state;
//     if (inputValue && tags.indexOf(inputValue) === -1) {
//       tags = [...tags, inputValue];
//     }
//     console.log(tags);
//     this.setState({
//       tags,
//       inputVisible: false,
//       inputValue: '',
//     });
//   };



  render() {
    const { tags } = this.state;
    return (
      <div>
       
    
      </div>
    );
  }
}

ReactDOM.render(<EditableTagGroup />, mountNode);