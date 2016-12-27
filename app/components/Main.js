import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        <div>
          <h1>React Webpack Express Boilerplate Project</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
};
