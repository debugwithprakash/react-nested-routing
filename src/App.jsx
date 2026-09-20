import Navbar from './components/Navbar'
import NavigateBtn from './components/NevigateBtn'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Overview from './pages/Overview'
import Profile from './pages/Profile'
import Courses from './pages/Courses'
import Enrolled from './pages/Enrolled'
import Setting from './pages/Setting'
import Completed from './pages/Completed'
import NotFound from './pages/notFound'
import Contact from './pages/Contact'
import ContactDetails from './pages/ContactDetails'

const App = () => {

  return (
    <div className='bg-purple-100 h-screen w-full flex flex-col'>

      <Navbar />
      <NavigateBtn />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='overview' element={<Overview />} />
          <Route path='profile' element={<Profile />} />
          <Route path='courses' element={<Courses />} />
          <Route path='enrolled' element={<Enrolled />} />
          <Route path='setting' element={<Setting />} />
          <Route path='completed' element={<Completed />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:id' element={<ContactDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
