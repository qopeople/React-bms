
export default (state=[], action) => {
    switch (action.type) {
      case 'INCREMENT':{
        if(state.indexOf(action.text)==-1){
          return [...state,action.text]
      }
        return state;
      }
      case 'DECREMENT':{
        let restate = state; 
        let index = restate.indexOf(action.text);
       
        if (index > -1) {
          restate.splice(index, 1);
      }
      return restate;
    }
      default:
        return state
    }
  }
  