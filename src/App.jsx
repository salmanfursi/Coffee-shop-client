
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Link to={'addcoffee'}><button className='outline bg-purple-300 text-3xl'>add coffee</button>
</Link>
    <Link to={'updatecoffee'}><button className='outline bg-purple-300 text-3xl'>update coffee</button>
</Link>
      <h1 className="text-6xl text-purple-600">Vite + React</h1>
    </>
  )
}

export default App
