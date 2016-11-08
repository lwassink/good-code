import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default ({ loading }) => {
  if (loading) {
    return (
      <div
        className="main">
        <CircularProgress
          size={80}
          thickness={8}/>
      </div>
    );
  } else {
    return (<div></div>);
  }
};

