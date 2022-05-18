import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import Nav from '../_components/nav';
import { Container, Table, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class Vendor extends Component{
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(vendorAction.getVendor());
    }

    handleChange = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    
    handleClick = (event, id) => {
        const { dispatch } = this.props;
        dispatch(vendorAction.deleteVendorById(id))
    };

    render(){
        const { vendor } = this.props.vendor;
        return (
            <div>
                <div>
                    <div className='row'>
                        <div className="col row col-sm-auto shadow-sm"><Nav/></div>
                        <div className="col"><AppBar/></div>
                    </div>
                    <main>
                        <div/>
                        <Container>
                            <Container className='text-center'>
                                <h1>{'Vendor'}</h1>
                            </Container>
                        </Container>
                        <Container>
                            <Container className='d-flex justify-content-end'>
                                <Button variant="primary" href="/add-vendor">Add Vendor</Button>
                            </Container>
                        </Container>
                        <Container>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    
                                {vendor.map((n) => (
                                <tr key={n._id} className='align-middle'>
                                    <td scope="row">{n.name}</td>
                                    <td>{n.mobile}</td>
                                    <td>{n.phone_number}</td>
                                    <td>{n.address}</td>
                                    <td>
                                        <Button variant='primary' className='me-2' aria-label="Edit" href={`/edit-vendor/${n._id}`}>
                                            <i class="bi bi-pencil-square"></i>
                                        </Button>
                                        <Button variant='primary' aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}>
                                            <i class="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                                ))}
                                    
                                
                                </tbody>
                            </Table>
                        </Container>
                    </main>
                </div>
            </div>
        );
    }
}

Vendor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return{
        vendor: state.vendor
    };
}

const connectedVendorPage = withRouter(connect(mapStateToProps, null, null, false)(Vendor))

export { connectedVendorPage as Vendor };