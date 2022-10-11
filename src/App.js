import { Link, Route, Routes } from "react-router-dom"
import AboutPage from "./routerSample/AboutPage"
import ContactPage from "./routerSample/ContactPage"
import HomePage from "./routerSample/HomePage"
import ToDoList from './axiosSample/ToDoList'
import ToDoDetail from "./routerSample/ToDoDetail"
import CustomerPage from "./routerSample/CustomerPage"
import CustomerDetail from "./routerSample/CustomerDetail"
import NoMatch from "./routerSample/NoMatch"
import { routes } from "./routerSample/routes"
import { element } from "prop-types"

function App() {

  return (<>
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/todos'>Todo</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/addproductwithformik'>Formik Sample</Link></li>

      </ul>
    </nav>

    <Routes>
      {
          routes.map((item) => {
            return <Route path={item.path} element={item.element}></Route>
          })
      }
    </Routes>

    <footer style={{ position: 'fixed', bottom: 0 }}>Site Footer</footer>
  </>)


}

export default App