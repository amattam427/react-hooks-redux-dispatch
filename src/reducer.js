let state = { count: 0 }

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}


function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

function dispatch(action){
  state = changeState(state, action);
  render();
}

render();



dispatch({type: "counter/increment"});
//   //=>{count:1}

dispatch({type: "counter/increment"});
//   //=>{count:2}

// dispatch({type: "counter/increment"})
  //=>{count:3}

// let state = { count: 0 };
// let action = { type: "counter/increment" };

//state = changeState(state, action);
