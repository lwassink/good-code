import React from 'react';
import Card from 'material-ui/Card';
import { preview } from '../styles/formStyles.js';

export default ({ text }) => {
  return (
    <div>
      <h2>
        Preview:
      </h2>
      <Card
        style={preview}>
        <p>
          {text}
        </p>
      </Card>
    </div>
  )
}

