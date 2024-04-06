import Addtodoform from "./AddTodoForm"
import Todolist from "./Todolist"

function Todocontainer() {
  return (
    <div>

      <div className="flex gap-5 m-5 flex-wrap">
        {/* <div className="flex flex-col gap-3"> */}
        <Addtodoform />
        <Todolist />
      </div>

    </div>
  )
}

export default Todocontainer