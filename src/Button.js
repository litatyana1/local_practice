function App() {

    const helloClick = () => {
        console.log('HELLO!!!')
    };

    const plusNumber = (n) => {
        console.log('Number ' , n)
    };

    return (
     <div className="App">
         <button onClick={helloClick}>Hello</button>
         <button onClick={() => console.log('Plus')}>Plus</button>
         <button onClick={() => plusNumber(123)}>Plus Number</button> 
    </div>
    );
}

export default App;