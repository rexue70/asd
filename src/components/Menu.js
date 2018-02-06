import React, {Component} from 'react';
// import Profile from './components/Profile'
// import coop from './components/Coop'
// import academic from './components/Academic'
//

import {MenuItem, Navbar, Nav, NavDropdown} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class MyHeader extends Component {


    render() {
        var item = [];
        for (let i = 1; i < this.props.list.length; i++) {
            item.push(<MenuItem key={i} onClick={() => this.props.changePage(i)}>{this.props.list[i]}</MenuItem>);
        }
        return (
            <div>
                <Navbar>
                    <Nav>
                        {/*<Router>*/}
                            {/*<div>*/}
                                {/*<ul>*/}
                                    {/*<li><Link to="/">Student Profile</Link></li>*/}
                                    {/*<li><Link to="/academic">Student Academic</Link></li>*/}
                                    {/*<li><Link to="/coop">Student COOP</Link></li>*/}
                                {/*</ul>*/}

                                {/*<hr/>*/}

                                {/*<Route exact path="/" component={Profile}/>*/}
                                {/*<Route path="/academic" component={academic}/>*/}
                                {/*<Route path="/coop" component={coop}/>*/}
                            {/*</div>*/}
                        {/*</Router>*/}

                        <NavDropdown title="Northeastern University" id="basic-nav-dropdown">
                            {item}
                            <MenuItem divider/>
                            {this.props.position === 0 ? null :
                                <MenuItem onClick={() => this.props.changePage(0)}>{this.props.list[0]}</MenuItem>}
                        </NavDropdown>

                    </Nav>
                </Navbar>
            </div>

        //     <div class="dropdown">
        //     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //     Dropdown button
        // </button>
        // <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //     <a class="dropdown-item" href="#">Action</a>
        //     <a class="dropdown-item" href="#">Another action</a>
        // <a class="dropdown-item" href="#">Something else here</a>
        // </div>
        // </div>


        )
    }
}


export default MyHeader