import Create from "../Pages/Create";
import Edit from "../Pages/Edit";
import Main from "../Pages/Main";

const router = [
    {
        element: <Main/>,
        path: '/'
    },
    {
        element : <Create/>,
        path : '/create',
    },
    {
        element : <Edit/>,
        path: '/edit/:id'
    }
]

export default router