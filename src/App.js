import React from "react";
import './App.css'
import Nav from "./Nav";
import Chipta from './Chipta';
import Xarita from './Xarita';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profil from "./Profil";
import { Link } from "react-router-dom";
import Mehmonxonalar from "./Mehmonxonalar";
import Money from "./images/money.png";
import Sales from "./images/sales.png";
import Users from "./images/users.png";
import Clients from "./images/clients.png";


function App() {
    return(
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/chipta" element={<Chipta/>}/>
            <Route path="/xarita" element={<Xarita/>}/>
            <Route path="/mehmonxonalar" element={<Mehmonxonalar/>}/>
            <Route path="/profil" element={<Profil/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
}

const Home = () => {
  return(
    <div className="container">
      <div class="row">
        <div class="col-2 first">
            <h1>
                Take a walk and enjoy <br />
                All of Uzbekistan!
            </h1>
            <p>
                The world is a book, and those who do not <br/> travel read only one page.
                <br />"Gippo avgustina"
            </p>
            <Link to="/profile" target="_blank" rel="noopener noreferrer" class="btn">Ticket purchase →</Link>
        </div>
        <div class="col-2 second">
            <div className="box">
                <div className='money'>
                    <p>Today`s Money</p>
                    <h4>$53,000 <span>+55%</span></h4>
                </div>
                <div className='icon'>
                  <img src={Money}/>
                </div>
            </div>
            <div className="box">
                <div className='money'>
                    <p>Today`s Users</p>
                    <h4>2,300 <span>+5%</span></h4>
                </div>
                <div className='icon'>
                  <img src={Users}/>
                </div>
            </div>
            <div className="box">
                <div className='money'>
                    <p>New Clients</p>
                    <h4>+3,052 <span>-14%</span></h4>
                </div>
                <div className='icon'>
                  <img src={Clients}/>
                </div>
            </div>
            <div className="box">
                <div className='money'>
                    <p>Total Sales</p>
                    <h4>$173,000 <span>+8%</span></h4>
                </div>
                <div className='icon'>
                  <img src={Sales}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default App;


// const [cookie, setCookie] = useState(
  //   "csrftoken=rWNJQZUvcUAoyb7ri8ZVhrCGv0gjENElrFzkz2vg4RWEewcM9z97DjLwhjKtHYG3"
  // );
  // const [sessionid, setSessionid] = useState(
  //   "sessionid=o0asv2539dy7g5p64ayb0lu5a84mar32"
  // );
  // const [quote, setQuote] = useState();

  // const getQuote = () => {
  //   axios(`http://192.168.1.133:8000/api/news/`, {
  //     headers: {
  //       Cookie: {
  //         cookie,
  //         sessionid,
  //       },
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data.title);
  //       setQuote(res.data.title);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


  // return (
  //   <div className="App">
  //     <button onClick={getQuote}>sdfsdfsdfsdfsdfsdf</button>
  //     {quote && <p>set quore</p>}
  //   </div>
  // );




// const TODOComponent = ({data})=>{
//  return <div style={{
//     background:data.completed?"lime":"red",
//     width:"300px",
//     height:"100px",
//     display:"flex",
//     flexDirection:"column",
//     alignItems:"center",
//     justifyContent:"center",
//     borderRadius:"10px",
//     margin:"10px",
//     color:"#fff"
//   }}>
//     <h4>{data.title}</h4>
//     <p>{data.completed?"Yakunlangan":"Yakunlanmagan"}</p>

//   </div>
// }

// function App() {
//   // const getData = async ()=>{
//   //   fetch("http://192.168.1.133:8000/account").then(res=>res.json()).then((res)=>{
//   //     console.log(res);
//   //   })
//   // }
//   const [state, setstate] = useState();
//   const getData = async (link)=>{
//     const {data} = await axios(link);
//     return data
//   }
//   return (
//     <div>
//       {/* <button onClick={async()=>{const apiResponse =  await getData("https://jsonplaceholder.typicode.com/todos"); */}
//       <button onClick={async()=>{const apiResponse =  await getData("http://192.168.1.133:8000/api/news");

//     setstate(apiResponse);
//     }}>Click for getting data</button>
//     {
//       state?<TODOComponent data={state}/>:"NO ANY DATA FROM API"
//     }
//     <h1>YANGILANGAN 200 talik DATA</h1>
//     {/* {
//       state?state.map((item,index)=>(
//         <TODOComponent key={index} data={item}/>
//       )):"LOADING..."
//     } */}
//     </div>
//   );
// }
