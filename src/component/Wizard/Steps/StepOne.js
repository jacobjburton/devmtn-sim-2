import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { stepOne } from '../../../ducks/reducer';

class StepOne extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            nameInput: '',
            addressInput: '',
            cityInput: '',
            stateInput: '',
            zipcodeInput: 0,
        };
        this.nameInput = this.nameInput.bind(this);
        this.addressInput = this.addressInput.bind(this);
        this.cityInput = this.cityInput.bind(this);
        this.stateInput = this.stateInput.bind(this);
        this.zipInput = this.zipInput.bind(this);
       

    }

    nameInput(text)
    {
        this.setState({ nameInput: text });
    }
    addressInput(text)
    {
        this.setState({ addressInput: text });
    }
    cityInput(text)
    {
        this.setState({ cityInput: text });
    }
    stateInput(text)
    {
        this.setState({ stateInput: text });
    }
    zipInput(num)
    {
        this.setState({ zipcodeInput: num });
    }

    render()
    {
        return (
            <div>
                <div className='wizard_body'>
                    <h5>Property Name</h5>
                    <input type="text" value={this.state.nameInput}
                        onChange={(e) => this.nameInput(e.target.value)}
                        />
                    <h5>Address</h5>
                    <input type="text" value={this.state.addressInput}
                        onChange={(e) => this.addressInput(e.target.value)}
                        />
                    <h5>City</h5>
                    <input type="text" value={this.state.cityInput}
                        onChange={(e) => this.cityInput(e.target.value)}
                        />
                    <h5>State</h5>
                    <input type="text" value={this.state.stateInput}
                        onChange={(e) => this.stateInput(e.target.value)}
                        />
                    <h5>Zip</h5>
                    <input type="text" value={this.state.zipcodeInput}
                        onChange={(e) => this.zipInput(e.target.value)}
                        />
                </div>
                <Link to='/wizard/steptwo' >Next Step</Link>
                {/* <button onClick={this.nextClick}>Next Step</button> */}
            </div>
        )
    }
}


function mapStateToProps(state)
{
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, { stepOne })(StepOne);