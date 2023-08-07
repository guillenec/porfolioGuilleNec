import './App.css'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

function App () {
  return (
    <>
      <Header />
      {/* nav, no cambia */}
      <AppRoutes />
      <Footer />
      {/* footer, no cmbia */}
    </>
  )
}

export default App
