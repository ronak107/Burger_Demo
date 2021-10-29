import React, { Component } from 'react';

import Aex from '../../hoc/Aex';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    render() {
        return (
            <Aex>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aex>
        )
    }
}

export default Layout;