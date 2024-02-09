import React from "react";
import Login from "./Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./Signup";
import Home from "./Home";
import Admin from "./Admin";
import LogoutButton from "./LogoutButton";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import AddTravel from "./AddTravel";
import UpdateTravel from "./UpdateTravel";
import ChosenTravel from "./ChosenTravel";
import AddQuestion from "./AddQuestion";
import ChosenTravelAdmin from "./ChosenTravelAdmin";
import TravelSignup from "./TravelSignup";
import TravelHistory from "./TravelHistory";
import GuestHome from "./GuestHome";
import GuestChosenTravel from "./GuestChosenTravel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/logout" element={<LogoutButton />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/admin/update/:id" element={<UpdateUser />}></Route>
        <Route path="/add-travel" element={<AddTravel />}></Route>
        <Route path="/admin/update-travel/:id" element={<UpdateTravel />}></Route>
        <Route path="/chosen-travel/:id" element={<ChosenTravel />}></Route>
        <Route path="/admin/chosen-travel/:id" element={<ChosenTravelAdmin />}></Route>
        <Route path="/chosen-travel/:id/add-question/:id" element={<AddQuestion />}></Route>
        <Route path="/travel-signup/:id" element={<TravelSignup />}></Route>
        <Route path="/travel-history/:id" element={<TravelHistory />}></Route>
        <Route path="/guest-home" element={<GuestHome />}></Route>
        <Route path="/chosen-travel-guest/:id" element={<GuestChosenTravel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

