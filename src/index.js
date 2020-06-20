import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// config file
// import config from "./config";
import awsconfig from './aws-exports';

// moudles
import { Amplify } from "aws-amplify";

// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: awsconfig.cognito.REGION,
//     userPoolId: awsconfig.cognito.USER_POOL_ID,
//     userPoolWebClientId: awsconfig.cognito.APP_CLIENT_ID
//   }
// });
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
