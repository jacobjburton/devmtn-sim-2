import React from 'react';

export default function House (props)
{
    return (
        <div className="house_box">
            <p>Property Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zipcode}</p>
            <button onClick={() => props.delete()}>Delete</button>
        </div>
    )
}