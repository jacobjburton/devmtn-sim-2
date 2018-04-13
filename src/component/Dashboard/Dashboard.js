import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

export default class Dashboard extends Component
{
    constructor()
    {
        super();

        this.state = 
        {
            houses: []
        };

        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount()
    {
        //console.log("getting here?")
        axios.get('/api/houses').then(res => 
        {
           // console.log("FIRE, damn you!")
            this.setState({ houses: res.data });
        })
    }
    deleteHouse(id)
    {
        console.log('got to the delete');
        axios.delete(`/api/houses/${id}`).then(res =>
        {
            console.log ('in delete');
            let newList = this.state.houses.splice(id, 1);

            this.setState({ houses: newList });
        });
        this.componentDidMount();
    }



    render()
    {
        let housesToDisplay = this.state.houses.map((house, i) =>
        {
            return (
                    <House key={house.id}
                        //id={house.id} 
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zipcode={house.zipcode}
                        delete={() => this.deleteHouse(house.id)} 
                    />                   
            )
        });

        return (
            <div>
                <Link className='links' to='/wizard' list={this.state.houses}>
                    Add New Property</Link>
                <h3>Home Listings</h3>
                {housesToDisplay}
              
            </div>
        )
    }
}