import React from 'react';
import { Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import HomePage from './pages/HomePage';

// function Routes() {
//   return (
//     <div>
//       <Route exact path='/' component={Home} />
//       <Route exact path='/users' component={UserList} />
//     </div>
//   );
// }

const Routes = [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UserListPage,
    path: '/users',
    exact: true,
  },
];

export default Routes;
