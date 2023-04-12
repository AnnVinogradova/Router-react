import { RouterProvider } from 'react-router5';
import {router} from './router.mjs';

router.start();
export default function Root(){
    return <RouterProvider router={router}>
    <h1>Hello</h1>
    <p>Следующий шаг, выучить дизайн</p>
    </RouterProvider>;
}