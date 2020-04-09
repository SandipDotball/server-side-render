import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UserList, { loadData } from './components/UserList';

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
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UserList,
    exact: true,
    loadData: loadData
  }
];

export default Routes;
