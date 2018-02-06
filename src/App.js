import React, {Component} from 'react';
import Menu from './components/Menu'
import News from './components/News'
import Events from './components/Events'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import profile_image from './resources/profile.jpg';
import academic_image from './resources/academic.jpg';
import coop_image from './resources/coop.jpg';

//========================================
var rd3 = require('react-d3');
var LineChart = rd3.LineChart;
var PieChart = rd3.PieChart;
var BarChart = rd3.BarChart;

var lineData = [
    {
        "name": "Series A",
        "values": [
            { "x": 1, "y":  91},
            { "x": 2, "y":  90},
            { "x": 3, "y":  95},
        ]
    },
    {
        "name": "Series B",
        "values": [
            { "x": 1, "y":  91},
            { "x": 2, "y":  96},
            { "x": 3, "y":  104},
        ]
    },
    {
        "name": "Series C",
        "values": [
            { "x": 1, "y":  92},
            { "x": 2, "y":  91},
            { "x": 3, "y":  96},
        ]
    },
    {
        "name": "Series D",
        "values": [
            { "x": 1, "y":  91},
            { "x": 2, "y":  99},
            { "x": 3, "y":  106},
        ]
    }
];

var pieData = [
    {label: 'Margarita', value: 20.0},
    {label: 'John', value: 55.0},
    {label: 'Tim', value: 25.0 }
];

var barData = [
    {label: 'A', value: 5},
    {label: 'B', value: 6},
    {label: 'F', value: 7},
];


let list = ['Home', 'Test filed 1', 'Test filed 2', 'Test filed 3', 'Test filed 4', 'Test filed 5'];
let events = [
    [
        ['MAR 0', '0:00 PM', 'Event 0 Test'],
        ['MAR 0', '0:00 PM', 'Event 0 Test'],
        ['MAR 0', '0:00 AM', 'Event 0 Test'],
    ],
    [
        ['MAR 1', '1:00 PM', 'Event 1 Test'],
        ['MAR 1', '1:00 PM', 'Event 1 Test'],
        ['MAR 1', '1:00 AM', 'Event 1 Test'],
    ],
    [
        ['MAR 2', '2:00 PM', 'Event 2 Test'],
        ['MAR 2', '2:00 PM', 'Event 2 Test'],
        ['MAR 2', '2:00 AM', 'Event 2 Test'],
    ],
    [
        ['MAR 3', '3:00 PM', 'Event 3 Test'],
        ['MAR 3', '3:00 PM', 'Event 3 Test'],
        ['MAR 3', '3:00 AM', 'Event 3 Test'],
    ],
    [
        ['MAR 4', '4:00 PM', 'Event 4 Test'],
        ['MAR 4', '4:00 PM', 'Event 4 Test'],
        ['MAR 4', '4:00 AM', 'Event 4 Test'],
    ],
    [
        ['MAR 5', '5:00 PM', 'Event 5 Test'],
        ['MAR 5', '5:00 PM', 'Event 5 Test'],
        ['MAR 5', '5:00 AM', 'Event 5 Test'],
    ]
];




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 0,
        }
    }

    changePage(value) {
        this.setState({
            position: value,
        })
    }

    render() {
        return (
            <div>

                <Router>
                    <div>

                        <Link to="/">Home</Link>{' '}
                        <Link to="/profile">Student Profile</Link>{' '}
                        <Link to="/academic">Student Academic</Link>{'  '}
                        <Link to="/coop">Student COOP</Link>{'  '}
                        <Link to="/d3">d3 example</Link>{'  '}



                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/academic" component={academic}/>
                        <Route path="/coop" component={coop}/>
                        <Route path="/d3" component={d3}/>
                    </div>
                </Router>


                <Menu list={list} changePage={this.changePage.bind(this)} position={this.state.position}/>
                <News text={list[this.state.position]} position={this.state.position}/>
                <Events events={events[this.state.position]}/>
            </div>
        );
    }
}

export default App;


const Home = () => (
    <div>


        <h2 color="white">Home123</h2>
        <img role="presentation" src="http://nuweb15.neu.edu/drc/wp-content/uploads/2014/11/drc-slider2.jpg"
             className="header"/>
    </div>
)

const Profile = () => (
    <div>
        <img height="1942" width="max-width:100%;" src={profile_image} alt="logo" />
    </div>
)

const academic = () => (
    <div>
        <h2>academic</h2>
        {/*<img role="presentation" src="http://www.johncabot.edu/academics/academics%20news%20feed.jpg"*/}
             {/*className="header"/>*/}
        <img height="1500"  src={academic_image} alt="logo" />

    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const d3 = ({ match }) => (
    <div >
        <LineChart
            legend={true}
            data={lineData}
            width={500}
            height={400}
            title="Line Chart"
        />
        <br />
        <br />
        <PieChart
            data={pieData}
            width={400}
            height={400}
            radius={100}
            innerRadius={20}
            title="Pie Chart"
        />
        <br />

        <BarChart
            data={lineData}
            width={500}
            height={200}
            fill={'#3182bd'}
            title='Bar Chart'
        />
    </div>
)

const coop = ({ match }) => (
    <div>
        {/*<img role="presentation" src="https://www.northeastern.edu/law/images-2016/experience/arch-puzzle.jpg"*/}
             {/*className="header"/>*/}
        <img height="2100"  src={coop_image} alt="logo" />
        <h2>coop</h2>
        {/*<ul>*/}
            {/*<li>*/}
                {/*<Link to={`${match.url}/rendering`}>*/}
                    {/*Rendering with React*/}
                {/*</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
                {/*<Link to={`${match.url}/components`}>*/}
                    {/*Components*/}
                {/*</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
                {/*<Link to={`${match.url}/props-v-state`}>*/}
                    {/*Props v. State*/}
                {/*</Link>*/}
            {/*</li>*/}
        {/*</ul>*/}

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)


