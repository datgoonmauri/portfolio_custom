import React from 'react';

export default props =>
  <footer className="footer">
    <div className="container">
      <p className="has-text-centered">
        <strong>Bulma Personal Template</strong> by <a href="https://www.willsabol.com">Will Sabol</a>. The
        source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
      <div className="columns is-centered is-vcentered" style={{marginTop: '1.6em'}}>
        <div className="column is-narrow has-text-centered">
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="180" />
          </a>
        </div>
        <div className="column is-narrow has-text-centered">
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img width="60" alt="Made with React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
          </a>
        </div>
      </div>
    </div>
  </footer>
