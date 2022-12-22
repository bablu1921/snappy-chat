import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.scss'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { AuthContext, AuthContextProvider } from './Context/AuthContext'
function App() {
  const [count, setCount] = useState(0)

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute =({children})=>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }
    return children;
  }

  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route>
        
            <Route index element={<ProtectedRoute>
               <Home/>
              </ProtectedRoute>
             }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
