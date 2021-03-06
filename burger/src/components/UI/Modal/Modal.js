import React, { Component } from 'react';

import classes from './Modal.css';
import Aex from '../../../hoc/Aex/Aex';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextprops, nextState){
        return nextprops.show !== this.props.show || nextprops.children !== this.props.children
    }
    componentWillUpdate()
    {
        console.log("model will be update")
    }
    render() {
        return (
            <Aex>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity:this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aex>

        )
    }
}

export default Modal;