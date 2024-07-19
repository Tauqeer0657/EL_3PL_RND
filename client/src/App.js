import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from './auth/Login/Login';
import { Dashboard } from './Pages/Dashboard/Dashboard';

import { ViewMaterialReady } from './Pages/ViewMaterialReady/ViewPO';
import TrackingHome from './Pages/TrackingHome/TrackingHome';
import PoStatus from './Pages/PoStatus/PoStatus';
import PoStatus1 from './Pages/PoStatus/PoStatus1';
import Plants from './Pages/Plants/Plants';
import Vendors from './Pages/Vendors/Vendors';
import NewUser from './Pages/NewUser/NewUser';
import NewUser2 from './Pages/NewUser/NewUser2';
import UserType from './Pages/UserType/UserType';
import { MaterailReady } from './Pages/MaterialReady/MaterialReady';
import UserManagement from './Pages/UserManagement/UserManagement';
import PurchDoc from './Pages/MaterialReady/PurchDoc';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/MaterailReady" element={<MaterailReady/>}></Route>
        <Route path="/purchdoc" element={<PurchDoc/>}></Route>

      
        <Route path="/ViewMaterialReady" element={<ViewMaterialReady/>}></Route>
        <Route path="/TrackingHome" element={<TrackingHome/>}></Route>
        <Route path="/PoStatus" element={<PoStatus/>}></Route>
        <Route path="/PoStatus1" element={<PoStatus1/>}></Route>
        <Route path='/UserManagement/purchDoc/:purchDoc' element={<UserManagement/>}></Route>
        <Route path="/Plants" element={<Plants/>}></Route>
        <Route path="/Vendors" element={<Vendors/>}></Route>
        <Route path="/UserType" element={<UserType/>}></Route>
        <Route path="/NewUser" element={<NewUser/>}></Route>
        <Route path="/NewUser2" element={<NewUser2/>}></Route>
      </Routes>

    </>
  );
}

export default App;
































// import './App.css';
// import { Routes, Route } from "react-router-dom";

// import Login from './auth/Login/Login';
// import DN from './Pages/Upload/ViewUpload/DN'
// import Upload from './Pages/Upload/Upload';
// import { Dashboard } from './Pages/Dashboard/Dashboard';
// import Header2 from './component/Header2';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard/>}></Route>

//         {/* Nested Routes */}
//       <Route
//         path="/data"
//         element={
//           <>
//             <Header2 />
//             <Routes>
//               {/* Upload Route */}
//               <Route path="/upload" element={<Upload />} />
//               {/* DN Route */}
//               <Route path="/dn" element={<DN />} />
//             </Routes>
//           </>
//         }
//       />
        
       
//       </Routes>

//     </>
//   );
// }

// export default App;
