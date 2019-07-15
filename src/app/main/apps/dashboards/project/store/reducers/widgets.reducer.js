import * as Actions from '../actions';

const initialState = {
    data:null,
    weatherWidget:{
        currentLocation: "Muscat",
        tempUnit: "C",
        speedUnit: "KMH",
        locations:{
            Muscat:{
                icon: "rainy2",name: "Muscat",rainProbability: "98%",temp:{C: "22",F: "72"},windDirection: "NW",windSpeed: {KMH: 12, MPH: 7.5},next3Days:[
                    {name: "Sunday", icon: "rainy",temp: {C: "21", F: "70"}},{name: "Monday", icon: "cloudy",temp: {C: "19", F: "66"}},
                    {name: "Tuesday", icon: "windy3",temp: {C: "24", F: "75"}}
                ]
            }
        }
    }
};

const widgetsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_WIDGETS:
            return {
                ...state,
                data:{...action.payload}
            };
        default:
            return state;
    }
};

export default widgetsReducer;
