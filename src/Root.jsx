import { RouterProvider } from 'react-router5';
import {router} from './router.mjs';
import App from './components/App.jsx';

router.start();
export default function Root(){
    return <RouterProvider router={router}>
    <App/>
    <p>Следующий шаг, выучить дизайн</p>
    </RouterProvider>;
}