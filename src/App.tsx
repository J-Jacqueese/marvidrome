import './App.css'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <Suspense>
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
