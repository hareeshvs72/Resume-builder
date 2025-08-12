
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import History from './pages/History'
import PageNotFound from './pages/PageNotFound'
import ResumeGenerator from './pages/ResumeGenerator'
import UserForm from './pages/UserForm'
 
function App() {
  

  return (
    <>
       <Header/>
         <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/History' element={<History/>} />
            <Route path='/Resume' element={<ResumeGenerator/>} />
            <Route path='/UserForm' element={<UserForm/>} />
            <Route path='/*' element={<PageNotFound/>} />
         </Routes>
      <Footer/>
    </>
  )
}

export default App
