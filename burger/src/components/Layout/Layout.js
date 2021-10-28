import React from 'react';

import Aex from '../../hoc/Aex';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Aex>
      <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aex>
);

export default layout;