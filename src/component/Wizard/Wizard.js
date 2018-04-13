import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';

export default class Wizard extends Component
{
         


    render()
    {
        return (
            <div>
                <div className='titlebar'>
                    <h2>Add New Listing</h2>
                    <Link className='links' to='/'>Cancel</Link>
                </div>
                <Switch>
                    <Route exact path='/wizard/stepone' component={StepOne}/> 
                    <Route path='/wizard/steptwo' component={StepTwo}/>
                    <Route path='/wizard/stepthree' component={StepThree}/>
                </Switch>
            </div>
        )
    }
}