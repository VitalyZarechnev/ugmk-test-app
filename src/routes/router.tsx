import { createBrowserRouter } from 'react-router-dom';

import Products from '@/pages/products/Products';
import Details from '@/pages/details/Details';
import NotFound from '@/pages/notFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/details/:factoryId/:monthId',
    element: <Details />,
  },
  {
	path: '*',
	element: <NotFound />
  }
]);
