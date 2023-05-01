export const Task = (props) => {
    return (
        <div className='task' style={{backgroundColor : props.completed ? "#69ffaf" : "white" , marginBottom: "10px" , borderRadius:"5px"}}>
          <h1>{props.taskName}</h1>
          <button onClick={ () => props.deleteTask(props.id)} >X</button>
          <button onClick={ () => props.completeTask(props.id)}>Complete </button>
        </div>
      );
}