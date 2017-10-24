// Higher Order Component (HOC) - A component (HOC) thst renders another component
// reuse code
// render hijaking
// prop manipulation
// abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWaring = (WrappedComponent) =>{
  return (props) =>(
      <div>
        { props.isAdmin &&<p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props}/>
      </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>Please login to view the info</p>
        )
      }
    </div>
  );
};

//require authentication


const AdminInfo = withAdminWaring(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));