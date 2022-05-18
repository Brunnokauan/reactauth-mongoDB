import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import Nav from '../_components/nav';
import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import { withRouter } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './addVendor.css'

class AddVendor extends Component{
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(vendorAction.onChangeProps(prop, event));
    };

    componentDidMount() {
        const { match : { params } } = this.props;
        if(params.id){
            const { dispatch } = this.props;
            dispatch(vendorAction.getVendorById(params.id));
        }
    }

    handleClick(event){
        const { match : { params } } = this.props;
        const { dispatch } = this.props;
        let payload={
            name: this.props.vendor.name,
            mobile: this.props.vendor.mobile,
            phone_number: this.props.vendor.phone_number,
            address: this.props.vendor.address,
        }
        if(params.id){
            dispatch(vendorAction.editVendorInfo(params.id, payload));
        }else{
            dispatch(vendorAction.createVendor(payload));
        }
    }

    render(){
        const { match : { params } } = this.props;

        function InsertText(props) {
            return <h1 className='text-center'>{'Add New Vendor'}</h1>;
        }

        function EditText(props) {
            return <h1 className='text-center'>{'Edit Vendor'}</h1>;
        }
        function SegHeader() {
            if(params.id){
                return <EditText />;
            }
            return <InsertText />;
        }

        return(
            <div>
                <div className='row'>
                    <div className="col row col-sm-auto shadow-sm"><Nav/></div>
                    <div className="col"><AppBar/></div>
                </div>
                <SegHeader/>
                <main className='forms shadow-sm rounded-1'>
                    <Container>
                        <Form className='row'>
                            <div className='col'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control id='name' value={this.props.vendor.name} onChange={this.handleChange('name')}/>
                            </div>

                            <div className='col'>
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control id='mobile' value={this.props.vendor.mobile} onChange={this.handleChange('mobile')}/>
                            </div>

                            <div className='col'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control id='phone_number' value={this.props.vendor.phone_number} onChange={this.handleChange('phone_number')}/>
                            </div>

                            <div className='col'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control id='address' value={this.props.vendor.address} onChange={this.handleChange('address')}/>
                            </div>
                        </Form>
                        <div className='d-flex justify-content-end'>
                            <Button className='mt-3' variant='danger' href="/vendor">Cancel</Button>
                            <Button className='ms-4 mt-3' variant='primary' onClick={(event) => this.handleClick(event)}>Save</Button>
                        </div>
                    </Container>
                </main>
            </div>
        )
    }

}

AddVendor.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return state;
}

const connectAddVendorPage = withRouter(connect(mapStateToProps, null, null, false)(AddVendor));

export { connectAddVendorPage as AddVendor};