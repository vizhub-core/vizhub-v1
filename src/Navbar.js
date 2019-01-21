import React from 'react';

export const Navbar = ({ user, onSignIn }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">VizHub</div>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbar" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          {user ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <figure className="image is-32x32">
                  <img className="is-rounded" src={user.avatarUrl + '&s=64'} />
                </figure>
              </div>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item">Create Visualization</a>
                <a className="navbar-item">Upload Dataset</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Profile</a>
                <a className="navbar-item">Account</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Sign out</a>
              </div>
            </div>
          ) : (
            <div className="buttons">
              <div onClick={onSignIn} className="button is-primary">
                Sign in
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
);
