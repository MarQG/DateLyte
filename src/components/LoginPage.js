import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth.js';


export const LoginPage = ({ startLogin, startFB }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <img className="box_layout__logo" src="./images/eat_neat_logo_wht.png" alt="EAT NEAT"/>
            <h1 className="box-layout__title">Let's Help Make Your Eating Neater.</h1>
            <button className="button" onClick={startLogin}>Login with Google</button>
            <button className="button" onClick={startFB}>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) =>({
    startLogin: () => dispatch(startGoogleLogin()),
    startFB: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
