
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Principal } from './Components/Principal/Principal'
import { Teaser } from './Components/Teaser/Teaser'

function App() {
  

  return (
    <div>
      <Header></Header>
      <main>
        <Teaser></Teaser>
        <Principal></Principal>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
