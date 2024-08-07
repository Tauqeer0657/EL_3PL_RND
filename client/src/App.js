import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './auth/Login/Login';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { ViewMaterialReady } from './Pages/ViewMaterialReady/ViewPO';
import TrackingHome from './Pages/TrackingHome/TrackingHome';
import Plants from './Pages/Plants/Plants';
import Vendors from './Pages/Vendors/Vendors';
import NewUser from './Pages/NewUser/NewUser';
import NewUser2 from './Pages/NewUser/NewUser2';
import UserType from './Pages/UserType/UserType';
import { MaterialReady } from './Pages/MaterialReady/MaterialReady';
import UserManagement from './Pages/UserManagement/UserManagement';
import PurchDoc from './Pages/MaterialReady/PurchDoc';
import PoStatus from './Pages/PoStatus/PoStatus';
import UserAccess from './Pages/UserAccess/UserAccess';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/MaterialReady" element={<MaterialReady/>}></Route>
        <Route path="/Purchdoc" element={<PurchDoc/>}></Route>
        <Route path="/ViewMaterialReady" element={<ViewMaterialReady/>}></Route>
        <Route path="/TrackingHome" element={<TrackingHome/>}></Route>
        <Route path="/PoStatus" element={<PoStatus/>}></Route>
        <Route path='/UserManagement/purchDoc/:purchDoc' element={<UserManagement/>}></Route>
        <Route path="/Plants" element={<Plants/>}></Route>
        <Route path="/Vendors" element={<Vendors/>}></Route>
        <Route path="/UserType" element={<UserType/>}></Route>
        <Route path="/NewUser" element={<NewUser/>}></Route>
        <Route path="/NewUser2" element={<NewUser2/>}></Route>
        <Route path="/UserAccess" element={<UserAccess/>}></Route>
      </Routes>

    </>
  );
}

export default App;


