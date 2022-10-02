import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Ayurveda from "./ayurveda";
import Cart from "./cart";
import Fregnance from "./Fregnance";
import Hair from "./hair";
import Home from "./Home";
import Login from "./Login";
import MakeUp from "./makeUp";
import MomBaby from "./mom&baby";
import PersonalCare from "./personalCare";
import Register from "./Register";
import SingleProductpage from "./singleProduct";
import Skin from "./skin";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/make_up" element={<MakeUp />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/ayurveda" element={<Ayurveda />} />
            <Route path="/fragnance" element={<Fregnance />} />
            <Route path="/personal_care" element={<PersonalCare />} />
            <Route path="/mom&baby" element={<MomBaby />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProductpage/> } />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default AllRoutes