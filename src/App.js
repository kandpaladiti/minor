// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import UserLoginPage from './pages/User/UserLoginPage';
import UserSignupPage from './pages/User/UserSignupPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import UserDashboard from './components/UserDashboard/MarksForm';
import AdminDashboard from './components/AdminDashboard/AdminPanel';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/login" component={UserLoginPage} />
          <Route path="/user/signup" component={UserSignupPage} />
          <Route path="/admin/login" component={AdminLoginPage} />
          <Route path="/user/dashboard" component={UserDashboard} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
