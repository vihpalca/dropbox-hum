import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.onresize = function() {
  if (window.innerWidth <= 768) {
    document.getElementById('bg-menu').classList.remove('menu-active')
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
