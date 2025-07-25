import React, {useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
    }
    else if(authData && authData.employees.find((e)=> e.email == email && e.password == password)) {
      setUser('employee')
    }
    else {
      alert("Invalid credentials");
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App