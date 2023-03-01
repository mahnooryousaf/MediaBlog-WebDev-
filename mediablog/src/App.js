import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import Home from "./components/home/home"
// import DataPage from "./components/data/data"
// import { useState } from 'react'

// function data_intake() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const handleOnSubmit = async (e) => {
//       e.preventDefault();
//       let result = await fetch(
//       'http://localhost:5000/register', {
//           method: "post",
//           body: JSON.stringify({ name, email }),
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       })
//       result = await result.json();
//       console.warn(result);
//       if (result) {
//           alert("Data saved succesfully");
//           setEmail("");
//           setName("");
//       }
//   }
//   return (
//       <>
//           <h1>This is React WebApp </h1>
//           <form action="">
//               <input type="text" placeholder="name" 
//               value={name} onChange={(e) => setName(e.target.value)} />
//               <input type="email" placeholder="email" 
//               value={email} onChange={(e) => setEmail(e.target.value)} />
//               <button type="submit" 
//               onClick={handleOnSubmit}>submit</button>
//           </form>

//       </>
//   );
// }

// export default data_intake;


function App() {
  return (
    <Router>
    <Switch>
    
    <Route path="/data" component={DataPage} />
    <Route exact  path="/" component={Home} />
      
   
  </Switch>
  </Router>
  );
}

export default App;
