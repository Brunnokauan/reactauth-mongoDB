import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AppBar from '../_components/appbar';
import Nav from '../_components/nav';

class Home extends Component {
    render() {
        return(
            <div>
               <div className="row"> 
                    <div className="col row col-sm-auto shadow-sm">
                        <Nav />
                    </div>
                    <div className="col"><AppBar/></div>
                    <main>
                        <h1 className="text-center">Home</h1>
                    </main>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state){
    return state;
}

const connectHomePage = withRouter(connect(mapStateToProps, null, null, false)(Home));


export {connectHomePage as Home};