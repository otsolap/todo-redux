import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <p>hello world.</p>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.notes,
    };
};

export default connect(mapStateToProps)(Header);