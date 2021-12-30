import logo from './logo.svg';
import './App.css';
import './styles/output.css'
import Login from './components/Login';


function App() {

  const userToDB = async (userInput) => {
    // console.log(userInput);
    const res = await fetch("http://localhost:8085/auth/login", 
    {method: 'POST',
    headers:{'Content-type' : 'application/json'},
    body: JSON.stringify(userInput)
    })

    const data = await res.text()
    console.log(data)
} 

  return (
    <div className="App">
      <Login
      userAuth={userToDB}
      />
    </div>
  );
}

export default App;
