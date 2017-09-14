import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import App from './components/app';
import Details from './components/details';
// import AddProject from './containers/add_project';
// import ProjectList from './containers/projects-list';
// import Budget from './containers/budget';

// import SubmitApplication from './containers/submitApplication';
// import StepOne from './containers/stepOne';

import store from './store';
import { onProjectList, budgetGraphData } from './route_callbacks';


// export default (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Details} />
//         <Route path="addProject" component={AddProject} />
//         <Route path="project-list" component={ProjectList} onEnter={onProjectList}/>
//         <Route path="budget" component={Budget} onEnter={budgetGraphData}/>
//       </Route>
//     </Router>
//   </Provider>
// );



const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Details },
  childRoutes: [
    {
      path: '/addProject',
      getComponent(location, cb) {
        System.import('./containers/add_project')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: '/project-list',
      onEnter: onProjectList,
      getComponent(location, cb) {
        System.import('./containers/projects-list')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: '/budget',
      onEnter: budgetGraphData,
      getComponent(location, cb) {
        System.import('./containers/budget')
          .then(module => cb(null, module.default));
      }
    },
    {
      getComponent(location, cb) {
        System.import('./containers/submitApplication')
          .then(module => cb(null, module.default));
      },
      path: '/SubmitApplication',
      indexRoute: { getComponent(location, cb) {
        System.import('./containers/stepOne')
          .then(module => cb(null, module.default));
        }
      },
       childRoutes: [
         {
           path: '/step2',
           getComponent(location, cb) {
             System.import('./containers/stepTwo')
               .then(module => cb(null, module.default));
           }
         },
         {
           path: '/step3',
           getComponent(location, cb) {
             System.import('./containers/stepThree')
               .then(module => cb(null, module.default));
           }
         },
         {
           path: '/completedApplication',
           getComponent(location, cb) {
             System.import('./containers/CompletedApplication')
               .then(module => cb(null, module.default));
           }
         }
       ]
     }
  ]
};

const Routes = () => {
  return (
      <Router history={browserHistory} routes={componentRoutes} />
  );
};

export default Routes;
