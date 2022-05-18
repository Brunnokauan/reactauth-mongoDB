import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Navbar, Container } from 'react-bootstrap';

class PermanentDrawer extends React.Component {
    state = {
       anchor: 'left',
    };
    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        const { anchor } = this.state;
        return (
            <Navbar bg="primary" variant="dark" className='navbar'>

                <Navbar.Brand href="#" className='ms-3'>CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

            </Navbar>
        );
    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default PermanentDrawer;