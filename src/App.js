function App() {

  const names = [
      {
          id: '1',
          title: 'Alice',
          phone: '800 500'
      },
      {
      
          id: '22a',
          title: 'Bob',
          phone: '500 200'
      },
  ];

  return (
   <div>
       <ul>
       {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}
       </ul>
      </div>
  );
}

export default App;