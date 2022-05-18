import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import { withRouter } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import './login-compenent.css'


class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        if(localStorage.getItem('auth')){
            history.push('/home');
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event =>{
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render(){

        return(
            <div className="login-margin">
                <Container className='form shadow-sm'>  
                    <h1 className='mb-3 text-center'>{'Login'}</h1>
                    <div className='linha'></div>
                    <Form>
                        <Form.Group className='mb-3 form-group text-start'>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' value={this.state.username} onChange = {this.handleChange('username')}/>
                        </Form.Group>
                        <Form.Group className='mb-3 form-group text-start'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control autoComplete="current-password" type={this.state.showPassword ? 'text' : 'password'} value={this.state.password}onChange={this.handleChange('password')}/>
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" onClick={(event)=>{this.login()}}>Login</Button>
                        </div>
                    </Form>      
                </Container> 
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
       loggingIn: state.authentication 
    };
}

const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, false)(Login));

export { connectedLoginPage as Login};