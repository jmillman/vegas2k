import React from 'react';
import AppRoutes from './AppRoutes';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to='/' className="navbar-brand">Bet on Anything</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/football' className="nav-link active">Football</Link>
              </li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link active">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/users' className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                <Link to='/tickets' className="nav-link">Tickets</Link>
              </li>
              <li className="nav-item">
                <Link to='/bets' className="nav-link">Bets</Link>
              </li>
              <li className="nav-item">
                <Link to='/stats' className="nav-link">Stats</Link>
              </li>
            </ul>
          </div>
        </div>
        <main role="main" className="container">
          <AppRoutes />
        </main>
      </div>
    );
  }
}

export default App;
