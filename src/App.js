import { useEffect,useState } from 'react';
import './App.css';

function App() {
   
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  

  return (
    
    <>
    <div className="App">
      <div className='heding'>
           <p className='welcome'>Welcome back! 👋</p>
            <h2>Sign in to your account</h2> </div>

      <div className='email'>
          <p>Your email</p>
          <input type='text' className='input1' /> </div>
      <div className='password'>
          <p>Password</p>
          <input type='text' className='input2' />
          </div>
      <div className='btn1'>
          <button className='btn' onClick={fetchData}> <b> CONTINUE </b></button> </div>

      <div className='forget'> <a href='' >Forget your password</a> </div>

      
      
    </div>

    <div className='App2'>Don't have any account<a href='#' >  Sign up</a></div>
    </>
  );
}

export default App;