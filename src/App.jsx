import React, {useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState([])
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
      }
  
  }, [])
  

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData) {
      const employee = userData.find((e)=> e.email == email && e.password == password)
      if(employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
      }
    }
    else {
      alert("Invalid credentials");
    }
  }
  
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ( user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App