// const Child = props => {
  //   return (
  //     <div>
  //       <h3>jsx -- {props.title}</h3>
  //       <button onClick={() => props.setTitle(Date.now() + '')}>jsx</button>
  //     </div>
  //   )
  // }
  
  // 解构写法

  import menu from './components/menu/demo-playground'

  console.log(menu)
  
  const Child = ({ title, setTitle }) => {
    const clickFun = function () {
      return setTitle(Date.now() + '')
    }
    return (
      <div>
        <h3>jsx -- {title}</h3>
        <button onClick={clickFun}>jsx</button>
        {/* <button onClick={() => changeTitle(setTitle)}>jsx</button> */}
      </div>
    )
  }


  
  export default Child
  