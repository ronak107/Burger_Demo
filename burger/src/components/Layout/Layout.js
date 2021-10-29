import React from 'react';

import Aex from '../../hoc/Aex';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = ( props ) => (
    <Aex>
      <Toolbar />
      <SideDrawer/>

        <main className={classes.Content}>
            {props.children}
        </main>
    </Aex>
);

export default layout;