import React from 'react';
import { SwConsumer } from '../SwContext';

const withSwapidata = (SwComponent, mapMethodToprops) => {
  return (props) => {
    return (
      <SwConsumer>
        {
          (swapiService) => {
            return (
              <SwComponent {...props} {...mapMethodToprops(swapiService)} ></SwComponent>
            )
          }
        }
      </SwConsumer>
    )
  }
};

export default withSwapidata;
