import React, { Component } from 'react';

import Aex from '../../hoc/Aex';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    SideDrawerToggledHandler = () => {
        this.setState((prevstate) => {
            return { showSideDrawer: !prevstate.showSideDrawer }
        })
    }
    render() {
        return (
            <Aex>
                <Toolbar drawerToggleclicked={this.SideDrawerToggledHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aex>
        )
    }
}

export default Layout;