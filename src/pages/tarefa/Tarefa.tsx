import { useEffect, useState } from "react"

function Tarefa() {

  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);

  console.log("Completed: " + completed);

  useEffect(() => {
    if(completed) {
      setTask("Tarefa concluída");
    }
  }, [completed]);

  return (
    <>
      <h2>Tarefa</h2>
      <h3>{task}</h3>

      <p>Conclua a tarefa</p>

      <button onClick={() => setCompleted(true)}>Concluir a tarefa</button>
    </>
  )
}

export default Tarefa