import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { userActions } from '../_actions';
import { connect } from 'react-redux';


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state={
           anchor: 'left',
        }
    }
    logout = event =>{
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }
    render() {
        return(
            <Nav className="flex-column">
                <div className="ms-4">
                    <Nav.Link href="/home">
                        <i class="bi bi-house-door"></i> Home
                    </Nav.Link>
                    <Nav.Link href="/vendor">
                        <i class="bi bi-briefcase"></i> Vendors
                    </Nav.Link>
                    <Nav.Link onClick={(event)=>{this.logout()}}>
                        <i class="bi bi-x-circle"></i>  Logout
                    </Nav.Link>
                </div>
            </Nav>
        );
    }
}
Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) =>{
    return {
        loggingIn: state.authentication 
    };
}
export default connect(mapStateToProps)(Navigation);