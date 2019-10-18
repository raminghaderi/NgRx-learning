const initialState = {
    customers: [
        {
            name: 'John Doe',
            phone: '91929394958',
            address: '123 Sun street',
            membership: 'Platinum',
            id: 1
        }
    ],
    loading: false,
    loaded: true
}

export function customerReducer (state = initialState, action) {
    switch(action.type) {
        case 'LOAD_CUSTOMERS': {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        default: {
            return state;
        }
    }
}