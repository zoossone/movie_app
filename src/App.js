import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props)
    console.log("hello");
  }

  state = {
    count: 0
  }

  add = () => {
    this.setState(cur => ({count: cur.count + 1})) // setState를 해줄때 this.state.*** 등으로 직접 접근하는 방식은 옳지 않다. current를 사용하는 방법이 좋다.
  }//state는 object이므로 setState는 항상 객체를 넣어줘야한다.
  
  minus = () =>  {
    this.setState(cur => ({count: cur.count - 1}))
  }

  componentDidMount() { // component의 life cycle 1.생성자- 2.렌더- 3.컴포넌트 렌더 or 업데이트 렌더 - 4. 컴포넌트 죽음
    console.log("Component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {

  }

  render() {
    console.log("I'm rendering");
    return (<div>
      <h1>The number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>)
  }
}

export default App;
