import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {connect} from 'react-redux';

export default class StepTwo extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            imgURL: ''
        };
        this.imgInput = this.imgInput.bind(this);
      
       

    }

    imgInput(text)
    {
        this.setState({ imgURL: text });
    }
    
    
    render()
    {
        return (
            <div>
                <div className='wizard_body'>
                    <h5>Image URL</h5>
                    <input type="text" value={this.state.imgURL}
                        onChange={(e) => this.propertyNameInput(e.target.value)}
                        />
                    
                </div>
                <div className="next_prev_buttons">
                    <Link to='/wizard/stepone'>Previous Step</Link>
                    <Link to='/wizard/stepthree'>Next Step</Link>
                    {/* <button>Previous Step</button>
                    <button onClick={this.nextClick}>Next Step</button> */}
                </div>
            </div>
        )
    }
}