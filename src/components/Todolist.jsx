import { useState } from "react"
import Todoitem from "./Todoitem"

 function Todolist() {
  const [Activityarr, setactivity] = useState([

    { id: 1, 
      activity: "Go for a walk" }
    ,
     { id: 1,
       activity: "Go to office" }
    , 
    { id: 1,
       activity: "Go to office" }

  ])

  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      

      {
        Activityarr.map(function (item, index) {
          return <Todoitem id={item.id} activity={item.activity}
            index={index} Activityarr={Activityarr} setactivity={setactivity} />
        })
      }

    </div>
  )
}

export default Todolist