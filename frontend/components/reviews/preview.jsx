import React from 'react';
import Card from 'material-ui/Card';
import { preview } from '../styles/formStyles.js';
import ReactMarkdown from 'react-markdown';

export default ({ text }) => {
  return (
    <div>
      <h2>
        Preview:
      </h2>
      <div className="preview">
        <ReactMarkdown source={text} />
      </div>
    </div>
  )
}

