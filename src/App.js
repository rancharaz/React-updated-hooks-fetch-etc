import './App.css';
import React, { useState, useReducer, useRef, useEffect } from 'react';
import GithubUser from './GithubUser';
/* import Aboutus from './Aboutus';
 */import Gallery from './Gallery';
import Contactus from './Contactus';
import { Link, Outlet } from 'react-router-dom'
/* import Lift from './Lift';
 */


export const Aboutus = () => {
  return (
    <div>
      <nav>
        <Link to="/homepage">Homepage</Link> |
        <Link to="/aboutus"> About us</Link> |
        <Link to="/gallery"> Gallery</Link>

      </nav>

      <h1>About us</h1>
      <h1><Outlet /></h1>

    </div>
  )
}
/* 
custom hook

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);

  return [
    {
      value,
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initalValue)
  ]
}
 */


/* 
 graphQL
const query = `
query{
    allLifts{
      name
      elevationGain
      status
    }
  }

`;
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
}

const Lift = ({ name, elevationGain, status }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain}</p>
      <p>{status}</p>
    </div>
  )
}
 */
/* 
  render props

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 },

]

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? renderEmpty : <ul>
    {data.map((item) => (
      <li key={item.name}>
        {renderItem(item)}
      </li>
    )

    )}
  </ul>
}
 */

function App() {





  /*   
    graphQL
  
  const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://snowtooth.moonhighway.com/', opts)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [])
  
    if (loading) {
      return <h1>Loading</h1>
    }
    if (error) return <pre>{JSON.stringify(error)}</pre>
  
    if (!data) return null;
  
    return (
      <>
        {data.data.allLifts.map((lift) => (
          <Lift name={lift.name} elevationGain={lift.elevationGain} status={lift.status} />
        ))}
      </>
    )
   */




  /* 


  using fetch loading etc
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://api.github.com/users/rancharaz')
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [])
  
    if (loading) {
      return <h1>Loading</h1>
    }
    if (error) return <pre>{JSON.stringify(error)}</pre>
  
    if (!data) return null;
  
    return (
      <GithubUser login={data.login} avatar={data.avatar_url} />
    )
  
   */



  /*   
  custom hook
  const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("");
    const submit = (e) => {
      e.preventDefault()
      alert(`${titleProps.value} and ${colorProps.value}`)
      resetTitle();
      resetColor()
  
  
    } */



  /*   const [checked, setChecked] = useState(false)  useState*/
  /*   const [checked, setChecked] = useReducer((checked) => (!checked), false)  useReducer*/




  /* 

  useRef()
  
  const textTitle = useRef();
    const hexcolor = useRef();
  
    const submit = (e) => {
      e.preventDefault()
      const title = textTitle.current.value;
      const color = hexcolor.current.value;
  
      alert(`${title} and ${color}`)
  
  
      textTitle.current.value = "";
      hexcolor.current.value = "";
    }
   */

  /* 
    use State

    const [title, setTitle] = useState("")
    const [color, setColor] = useState("#rrggbb")
  
  
    const submit = (e) => {
      e.preventDefault()
      alert(`${title} and ${color}`)
      setTitle("");
      setColor("#rrggbb")
  
  
    } */



  return (
    <div className="App">
      <header className="App-header">
        {/*   
        useState
        <input type="checkbox" name="" id="" value={checked} onChange={() => setChecked(!checked)} />
        <label htmlFor="">{checked ? "checked" : "not checked"}</label>
        
        useReducer
        <input type="checkbox" name="" id="" value={checked} onChange={setChecked} />
        <label htmlFor="">{checked ? "checked" : "not checked"}</label> */}



        {/*       useRef()
        
        <form onSubmit={submit}>
          <input ref={textTitle} type="text" name="" id="" placeholder='color title ...' />
          <input ref={hexcolor} type="color" name="" id="" />
          <button>Add</button>
        </form> */}




        {/*   
          useState
        
        <form onSubmit={submit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="" id="" placeholder='color title ...' />
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} name="" id="" />
          <button>Add</button>
        </form> */}


        {/*  custom hook
        <form onSubmit={submit}>
          <input {...titleProps} type="text" name="" id="" placeholder='color title ...' />
          <input {...colorProps} type="color" name="" id="" />
          <button>Add</button>
        </form>
 */}


        {/* 
        render props
        
        <List data={tahoe_peaks} renderEmpty={<p>This list is empty</p>}
          renderItem={item => <> {item.name} - {item.elevation} ft</>}

        /> */}




        <nav>
          <Link to="/homepage">Homepage</Link> |
          <Link to="/aboutus"> About us</Link> |
          <Link to="/gallery"> Gallery</Link>

        </nav>







      </header>
    </div>
  );
}

export default App;
