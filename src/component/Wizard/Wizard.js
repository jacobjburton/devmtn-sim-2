import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        };
        this.propertyNameInput = this.propertyNameInput.bind(this);
        this.addressInput = this.addressInput.bind(this);
        this.cityInput = this.cityInput.bind(this);
        this.stateInput = this.stateInput.bind(this);
        this.zipInput = this.zipInput.bind(this);
        this.addHouse = this.addHouse.bind(this);
        this.addClick = this.addClick.bind(this);
    }

    propertyNameInput(text)
    {
        this.setState({ name: text });
    }
    addressInput(text)
    {
        this.setState({ address: text });
    }
    cityInput(text)
    {
        this.setState({ city: text });
    }
    stateInput(text)
    {
        this.setState({ state: text });
    }
    zipInput(num)
    {
        this.setState({ zipcode: num });
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
            zipcode: 0
        });
    }


    render()
    {
        return (
            <div>
                <div className='titlebar'>
                    <h2>Add New Listing</h2>
                    <Link className='links' to='/'>Cancel</Link>
                </div>
                <div className='wizard_body'>
                    <h5>Property Name</h5>
                    <input type="text" value={this.state.name}
                        onChange={(e) => this.propertyNameInput(e.target.value)}
                        />
                    <h5>Address</h5>
                    <input type="text" value={this.state.address}
                        onChange={(e) => this.addressInput(e.target.value)}
                        />
                    <h5>City</h5>
                    <input type="text" value={this.state.city}
                        onChange={(e) => this.cityInput(e.target.value)}
                        />
                    <h5>State</h5>
                    <input type="text" value={this.state.state}
                        onChange={(e) => this.stateInput(e.target.value)}
                        />
                    <h5>Zip</h5>
                    <input type="text" value={this.state.zipcode}
                        onChange={(e) => this.zipInput(e.target.value)}
                        />
                </div>
                <button onClick={this.addClick}>Complete</button>
            </div>
        )
    }
}