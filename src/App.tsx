import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
        <Home title='Hello World' text='My text'/>
        <Contador/>
        <Tarefa/>
    </>
  )
}

export default App
