import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CamperLeaderboard from './CamperLeaderboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CamperLeaderboard />, document.getElementById('root'));
registerServiceWorker();
