import './App.css';
import {User} from "./User";
import {useState} from "react";


function App() {


  const [count , setCount] = useState(0);

  const increaseCount = () => {
    setCount(count+1);
  }
  const decreaseCount = () => {
    setCount(count-1);
  }
  const setZero = () => {
    setCount(0);
  }



  // Dark MOde Toggle Using states hook
  // const [ textColor , setTextColor] = useState("white")

  // const toggle = () => {
  //   textColor === "black" ? setTextColor("white") : setTextColor("black");
  // }


  // Toggle using State hooks
  // const [showText , setShowText] = useState(false);
  // const toggleShow = () => {
  //     setShowText(!showText);
  // }

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }

  // const [age, setAge] = useState(0);

  // const increaseAge = () => {
  //   setAge(age+1)
  // }

  // const isRed = true;
  // const name = ["Anakin" , "Luke" , "ObiWan" , "Leia" , "Han" , "Padme"]
  // const lis = name.map( (ele) => {
  //   return ele
  // })
  // const users = [
  //   {name : "Jake" , age : 21},
  //   {name : "Ryan" , age : 22},
  //   {name : "Marshal" , age : 21},
  // ];


  // const planets = [
  //   { name : "Mars" , isGasPlanet : false },
  //   { name : "Earth" , isGasPlanet : false },
  //   { name : "Jupiter" , isGasPlanet : true },
  //   { name : "Venus" , isGasPlanet : false },
  //   { name : "Neptune" , isGasPlanet : true },
  //   { name : "Uranus" , isGasPlanet : true },

  // ];



  return (
    <div className="App">



      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
      <br />
      <button onClick={setZero}>Set to Zero</button>
      <br />
      {count}



      {/* Dark mode toggle using react states hooks */}
      {/* <button onClick={toggle}>Dark/Light Mode</button>
      <br />
      <h1 style={{color: textColor }}>Whoops!</h1> */}


      {/* <button onClick={toggleShow} >Hello There</button>
      { showText === true && <h1>General Kenobi</h1>} */}


      {/* <input type="text" onChange={handleInputChange}/>
      <br />
      {inputValue} */}

{/* 
      {age}
      <br />
      <button onClick={increaseAge} >Increase Age</button> */}

      {/* {users.map( (user,key) => {
        return <User name={user.name} age={user.age} />
      })} */}

      {/* {planets.map( (planet,key) => 
        (!planet.isGasPlanet) && <h1> {planet.name}</h1>
      )} */}

      {/* {users.map( (user,key) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
          </div>
        );
      })} */}

      {/* Using Lists */}
      {/* {lis}
      {name.map((value , key) => {
        return <h1>{value}</h1>
      })} */}


      {/* Ternanry operators and Conditional Rendering */}
      {/* {age >= 18 ? <h1>Over-Age</h1> : <h1>underage</h1> }
      <h1 style={{color: isRed ? "red" :"salmon", backgroundColor:"lightgray"}}>Feel the Force around you!</h1> 
      {isRed && <button>Welcome to the Dark Side</button> } */}

      {/* <h1 className="text">
        Aman Upadhyay
      </h1> */}
      {/* <Desc name="Luke Skywalker" age={21} job="Jedi" />
      <Desc name="Darth Vader" age={30} job="Jedi" />
      <Desc name="Obi-Wan Kenobi" age={45} job="Jedi" />


      <Job salary={100000} position="Senior SDE" company="Amazon" />
      <Job salary={90000} position="Junior SDE" company="Microsoft" />
      <Job salary={100000} position="Project Manager" company="De Shaw" /> */}

      
    </div>
  
  );
}

// const Desc = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.job}</h2>
      
//     </div>
//   );
// };

// const Job = (props) => {
//   return (
//       <div>
//         <h1>{props.salary}</h1>
//         <h1>{props.position}</h1>
//         <h1>{props.company}</h1>
//       </div>
//     );
// };



export default App;
