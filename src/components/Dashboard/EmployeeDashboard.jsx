import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../others/TaskListNumbers'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard