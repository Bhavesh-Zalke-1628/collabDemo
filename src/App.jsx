import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
//  import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import Step from './pages/Step.jsx'
import UserProfile from './pages/UserProfile.jsx'
import { Toaster } from 'react-hot-toast'
// import Application from './pages/Application.jsx'
// import CheckOutSuccess from './pages/Payment/CheckOutSuccess.jsx'
// import CheckOutFail from './pages/Payment/CheckOutFail.jsx'
// import RegistrationPaymentSuccess from './pages/Payment/RegistrationPaymentSuccess.jsx'
import Batches from './pages/Batches.jsx'
import UserRegistration from './pages/UserRegistration.jsx'
import UserRegistrationPaymentSuccess from './pages/Payment/UserRegistrationPaymentSuccess.jsx'
import AllStudentData from './pages/AllStudentData .jsx'
import About from './pages/About.jsx'
import BatchSelectionSuccess from './pages/Payment/BatchSelectionSuccess.jsx'
const Home = lazy(() => import('./pages/Home.jsx'))

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path='' element={<MainLayout />}>

            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/batches' element={<Batches />}></Route>
            <Route path='/batch-selection-success' element={<BatchSelectionSuccess />}></Route>
            <Route path='/process' element={<Step />} />
            <Route path='/user/profile' element={<UserProfile />}></Route>;
            <Route path='/about' element={<About />}></Route>
            {/* <Route path='/application' element={<Application />}></Route> */}
            {/* <Route path='/checkout/success' element={<CheckOutSuccess />}></Route>
       <Route path='/checkout/fail' element={<CheckOutFail />}></Route> */}

            <Route
              path='/user-registration'
              element={<UserRegistration />}
            ></Route>
            <Route
              path='/user-registration/success'
              element={<UserRegistrationPaymentSuccess />}
            ></Route>
            <Route path='/Admin-canData' element={<AllStudentData />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
