import React, { Component } from 'react';
//import {connect} from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StepThree extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            mortgage: 0,
            rent: 0
        };
        this.mortgageInput = this.mortgageInput.bind(this);
        this.rentInput = this.rentInput.bind(this);
        this.addClick = this.addClick.bind(this);
    }

    mortgageInput(num)
    {
        this.setState({ mortgage: num });
    }
    rentInput(num)
    {
        this.setState({ rent: num });
    }
    addHouse(name, address, city, state, zipcode)
    {
        //console.log("got to addCall");
        axios.post('/api/newHouse', {name, address, city, state, zipcode})
        .then(res => 
        {
            console.log('inside the postcall')
            // this.setState(
            // { 
            //    houses: res.data
            // });
        });
    }
    addClick()
    {
        //console.log('clicked');
        this.addHouse(this.state.name, this.state.address, this.state.city,
            this.state.state, +this.state.zipcode);
        this.setState(
        {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            imgURL: '',
            mortgage: 0,
            rent: 0
        });
    }
    render()
    {
        return (
            <div>
                <div className='wizard_body'>
                    <h5>Monthly Mortgage Amount</h5>
                    <input type="text" value={this.state.name}
                        onChange={(e) => this.mortgageInput(e.target.value)}
                        />
                    <h5>Desired Monthly Rent</h5>
                    <input type="text" value={this.state.address}
                        onChange={(e) => this.rentInput(e.target.value)}
                        />
                    
                </div>
                <div className="next_prev_buttons">
                    <Link to='/wizard/steptwo'>Previous Step</Link>
                    <button onClick={this.addClick}>Complete</button>
                </div>
            </div>
        )
    }
}