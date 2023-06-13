// import { useState } from 'react'
// import './App.css';
// import "./style.css"
// import { EnrollmentForm } from './Components/enrollmentForm';
// import { Enrollist } from './Components/Enrollist';

// function App() {
//   const [program, setProgram] = useState("");
//   const [seats, setSeats] = useState(200);
//   const [dpSeats, setDpSeats] = useState(50);
//   const [ugSeats, setUgSeats] = useState(90);
//   const [pgSeats, setPgSeats] = useState(60);
//   const [studentDetails, setStudentDetails] = useState({});
//   const [action, setAction] = useState();
//   const [selItemId, setSelItemId] = useState();
//   const handleChange = (e) =>{
//     setProgram(e.target.value)
//     setDpSeats(dpSeats);
//     setUgSeats(ugSeats)
//     setPgSeats(pgSeats)
//   }
//   const handleItemSelection = (action, id)=>{
//     setAction(action);
//     setSelItemId(id)
//   }
//   const settotalUpdatedSeats=(totalUpdatedSeats)=>{

//     setSeats(totalUpdatedSeats)
//   }
//   const setUpdatedSeats = (updatedSeats)=>{
//     if (program === "DP"){
//       setDpSeats(updatedSeats)
//     } else if (program === "UG"){
//       setUgSeats(updatedSeats)
//     } else{
//       setPgSeats(updatedSeats)
//     }
//   }
//   const restoreSeats = (pgm)=>{
//     pgm === "UG"? setUgSeats(ugSeats+1) : pgm === "DP" ? setDpSeats(dpSeats+1): setPgSeats(pgSeats+1);
//     setAction("")
//   }
//   return (
//     <div className="App">
//       <div className="programs">
//        <br />
//        <br />
//         <h3 className="title">Student Enrolment Form</h3>
//         <ul className="ulEnrol">

//         <li className="parentLabels" onChange={handleChange}>
//           <input type="radio" defaultChecked  value="UG" name="programGroup"/> Undergraduate
//           <input type="radio" value="DP" className='radioSel' name="programGroup"/>Diploma
//           <input type="radio" value="PG" className='radioSel' name="programGroup"/>Postgraduate
//         </li>
//         <li>
//           <label  className="parentLabels">
//             Remaining {program} Seats - {program === "DP" ? dpSeats: program === "UG"? ugSeats : pgSeats}
//           </label>
//         </li>
//         <li>

//         <label htmlFor="">Total Remaining seat - {seats}</label>
//         </li>
//         </ul>
//       </div>
//       <EnrollmentForm
//        choosenProgram={program} 
//        settotalUpdatedSeats={settotalUpdatedSeats}
//        setUpdatedSeats={setUpdatedSeats}
//        totalSeats={seats}
//        currentSeats={ program === "DP" ? dpSeats: program === "UG"? ugSeats : pgSeats}
//        setStudentDetails={setStudentDetails}
//        studentDetails={studentDetails}
//        handleItemSelection={handleItemSelection} 
//       />
//        <Enrollist
//         studentDetails={studentDetails}
//         setStudentDetails={setStudentDetails}
//         selectedItemId={selItemId}
//         action={action}
//         restoreSeats={restoreSeats}
//        />
//     </div>
//   )
// }

// export default App



// import "./App.module.css";
import appStyles from "./App.module.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { Page } from "./Food-pages/Page";
// import { useMediaQuery } from "react-responsive";
import React, {Fragment, useEffect, useState } from "react";
import { Food } from "./Components-food/Food";
import {auth, logOut} from "./Components-food/Firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import Img1 from "./Images/cb.jpg"
import Img2 from "./Images/ic.jpg"
import Img3 from "./Images/chips.jpg"
import Img4 from "./Images/vb.jpg"
export const foodItemsContext = React.createContext();
const App = () => {
    const navigate = useNavigate();
    const [ user, loading, error ] = useAuthState(auth);
    const [isChooseFoodPage, setIsChooseFoodPage] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false)
 const [menuItems, setMenuItems] = useState([
 {
 id: 1,
 name: "Chicken Burger",
 quantity: 40,
 desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise",
 price: "24",
 image: `${Img1}`,
 },
 {
 id: 2,
 name: "Veg Burger",
 quantity: 30,
 desc: "Plant-based burger - lettuce, tomato, vegan cheese and mayonnaise",
 price: "22",
 image: `${Img2}`,
 },
 {
 id: 3,
 name: "Chips",
 quantity: 50,
 desc: "Potato chips fried to perfection",
 price: "7",
 image: `${Img3}`,
 },
 {
 id: 4,
 name: "Ice Cream",
 quantity: 30,
 desc: "Ice cream - Vanilla ice cream double scoop",
 price: "4",
 image: `${Img4}`,
 },
 ]);

 useEffect(()=>{
    if (user){
        const user = auth.currentUser;
        setUserEmail(user.email)
        if(user.email === "admin@justfood.com") {
            setIsAdmin(true);
        }
    } else {
        navigate("/")
    }
 }, [user, loading])
 return (
     <foodItemsContext.Provider value={menuItems}>
                {/* <Router>
                    <Link to="/Page">Page</Link>
                    <Routes>
                        <Route path="/Page" element={<Page/>} ></Route>
                    </Routes>
                </Router> */}

                    <div className={appStyles.App}>
                    <button className="toggleButton" onClick={()=>{
                        setIsChooseFoodPage(!isChooseFoodPage)
                    }}>
                        {isChooseFoodPage?"Availabilty Check" : "Order Food"}
                    </button>
                     <h3 className={appStyles.title}>Just Food Online Shop</h3>
                     {!isChooseFoodPage &&(
                         <Fragment>
                                    <h4 className={appStyles.subTitle}>Menu Availability</h4>
                            <ul className={appStyles.ulApp}>
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.id} className={appStyles.liApp}>
                                        {item.name} - {item.quantity}
                            </li>
                                );
                                })}
                            </ul>
                        </Fragment>
                     )}
                     {isChooseFoodPage && <Food foodItems={menuItems}></Food>}
                     </div>
            <div className={appStyles.App}>
 <button className={appStyles.signOutButton} onClick={logOut}>
 Sign Out
 </button>
 {isAdmin && (
 <button
 className={appStyles.toggleButton}
 onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
 >
 {isChooseFoodPage ? "Availability Check" : "Order Food"}
 </button>
 )}
 <span className={appStyles.signedInMessage}>
 Signed in as {userEmail}
 </span>
 <h3 className={appStyles.title}>Just Food Online Shop</h3>
 {!isChooseFoodPage && (
 <>
 <h4 className={appStyles.subTitle}>Menu Availability</h4>
 <ul className={appStyles.ulApp}>
 {menuItems.map((item) => {
 return (
 <li key={item.id} className={appStyles.liApp}>
 {item.name} - {item.quantity}
 </li>
 );
 })}
 </ul>
 </>
 )}
 {isChooseFoodPage && <Food foodItems={menuItems}></Food>}
 </div>
         </foodItemsContext.Provider>
 );
};
export default App;

{/* )}
192.168.0.1
const isLapOrDeskTop = useMediaQuery({
   query:"(min-width:1224px)"
}) 
const isMobile = useMediaQuery({
   query:"(max-width:480px)"
})
            {isLapOrDeskTop && (
                    <div className={appStyles.App}>
                    <button className="toggleButton" onClick={()=>{
                        setIsChooseFoodPage(!isChooseFoodPage)
                    }}>
                        {isChooseFoodPage?"Availabilty Check" : "Order Food"}
                    </button>
                     <h3 className={appStyles.title}>Just Food Online Shop</h3>
                     {!isChooseFoodPage &&(
                         <Fragment>
                                    <h4 className={appStyles.subTitle}>Menu Availability</h4>
                            <ul className={appStyles.ulApp}>
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.id} className={appStyles.liApp}>
                                        {item.name} - {item.quantity}
                            </li>
                                );
                                })}
                            </ul>
                        </Fragment>
                     )}
                     {isChooseFoodPage && <Food foodItems={menuItems}></Food>}
                     </div>
            )} */}