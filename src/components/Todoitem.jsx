function Todoitem(props)
 {
  const Activityarr = props.activityarr
  const setactivity = props.setactivity

     function Handledelete(deleteid) {
       var temp =  Activityarr.filter(function
         (item) {
        if (item.id === deleteid) 
        {
         return false
        }

         else {
         return true
        }

    })
    setactivity(temp)
  }


  return (
      <div>
        <p>{props.index + 1}.{props.activity}</p>
        <button className="text-red-500" onClick={() =>{ Handledelete(props.id)}}>Delete</button>
      </div>

    )
  }

  export default Todoitem

