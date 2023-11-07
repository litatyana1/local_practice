function App() {

    const helloClick = () => {
        console.log('HELLO!!!')
    };

    const plusNumber = (n) => {
        console.log('Number ' , n)
    };

    const onChangeName = (event) => {
        console.log(event.target.value)
        
    };


    return (
     <div className="App">
         <button onClick={helloClick}>Hello</button>
         <button onClick={() => console.log('Plus')}>Plus</button>
         <button onClick={() => plusNumber(123)}>Plus Number</button> 

         <hr/>
         
         <input onChange={onChangeName}/>

         </div>
    );
}

export default App;