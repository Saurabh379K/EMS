import React from 'react'
import AcceptTask from './AcceptTask.jsx'
import NewTask from './NewTask.jsx'
import CompleteTask from './CompleteTask.jsx'
import FailedTask from './FailedTask.jsx'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active) {
                return <AcceptTask key={idx} />
            }
            if(elem.NewTask) {
                return <NewTask key={idx} />
            }
            if(elem.completed) {
                return <CompleteTask key={idx} />
            }
            if(elem.failed) {
                return <FailedTask key={idx} />
            }
        })}
    </div>
  )
}

export default TaskList