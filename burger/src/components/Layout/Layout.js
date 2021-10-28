import React from 'react';

import Aex from '../../hoc/Aex';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aex>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aex>
);

export default layout;