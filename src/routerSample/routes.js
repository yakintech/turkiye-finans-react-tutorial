import ToDoList from "../axiosSample/ToDoList"
import AddProductWithFormik from "../formSampe/AddProductWithFormik"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import CustomerDetail from "./CustomerDetail"
import CustomerPage from "./CustomerPage"
import HomePage from "./HomePage"
import NoMatch from "./NoMatch"
import ToDoDetail from "./ToDoDetail"

export const routes = [
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/about',
        element:<AboutPage/>
    },
    {
        path:'/contact',
        element:<ContactPage/>
    },
    {
        path:'/todos',
        element:<ToDoList/>
    },
    {
        path:'/todos/:categoryid/:id',
        element:<ToDoDetail/>
    },
    {
        path:'/customers',
        element:<CustomerPage/>
    },
    {
        path:'/customers/:id',
        element:<CustomerDetail/>
    },
    {
        path:'/addproductwithformik',
        element:<AddProductWithFormik/>
    },
    {
        path:'*',
        element:<NoMatch/>
    }
]


