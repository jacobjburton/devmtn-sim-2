const initialState = 
{
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    imgURL: '',
    mortgage: 0,
    rent: 0
};

const STEP_ONE = 'STEP_ONE';

export function stepOne(name, address, city, state, zipcode)
{
    return (
    {    
        type: STEP_ONE,
        payload: 
        {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }

    });
}
  

export default function reducer(state = initialState, action)
{
    switch (action.type)
    {
        case STEP_ONE:
        {
            return Object.assign({}, state, 
                { name: action.payload.name, address: action.payload.address, city: action.payload.city,
                state: action.payload.state, zipcode: action.payload.zipcode})
        }
        default:
            return state;
    }
}