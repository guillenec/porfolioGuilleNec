import './App.css'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'
import './index.css'

function App () {
  return (
    <>
      <Header />
      {/* nav, no cambia */}
      <AppRoutes />

      {/* footer, no cmbia */}
    </>
  )
}

export default App
