import * as Actions from '../actions';
//import staff from '../../../../../../../../public/assets/images/admin/staff'

const initialState = {
    data: null,
    adminData:[
        {"Name":"Shops Statistic","img":"assets/images/admin/staff.png","data":[{"field":"Total","value":20,"class":"danger"},{"field":"Featured","value":4,"class":"success"},{"field":"Actived","value":9,"class":"success"},{"field":"InActived","value":11,"class":"warning"},{"field":"Verified","value":13,"class":"success"},{"field":"Unverified","value":7,"class":"warning"}]},
        {"Name":"Users Statistic","img":"assets/images/admin/staff.png","data":[{"field":"Total","value":41,"class":"danger"},{"field":"Actived","value":41,"class":"success"},{"field":"InActived","value":0,"class":"warning"}]},
        {"Name":"Products Statistic","img":"assets/images/admin/expense.png","data":[{"field":"Total","value":54,"class":"danger"}]},
        {"Name":"Orders Statistic","img":"assets/images/admin/income.png","data":[{"field":"Total","value":47,"class":"danger"},{"field":"Total Sub Order","value":65,"class":"danger"},{"field":"Completed","value":26,"class":"success"},{"field":"Shipping","value":4,"class":"success"},{"field":"Progressing","value":0,"class":"info"},{"field":"Pending","value":28,"class":"info"},{"field":"Refunded","value":2,"class":"warning"},{"field":"Cancelled","value":5,"class":"warning"}]}
    ],
    campaignData:{"rows":[{"title":"Furnishing","clicks":"3621","conversion":"90"},{"title":"Heavy Equipments","clicks":"703","conversion":"7"},{"title":"Construction","conversion":"0","clicks":"532"},{"title":"Electronics","clicks":"201","conversion":"8"}]},
    sellerData:{"data":[{"title":"Patrick Store","total":"$110.00","commission":"$16.50","balance":"$93.50","siteBal":"$0.00","status":"Approved","createdAt":"May 22, 2019"},
    {"title":"Patrick Store","total":"$768.90","commission":"$115.34","balance":"-$115.34","siteBal":"$115.34","status":"Approved","createdAt":"May 22, 2019"},
    {"title":"Patrick Store","total":"$768.90","commission":"$115.34","balance":"$653.56","siteBal":"$0.00","status":"Approved","createdAt":"May 22, 2019"},
    {"title":"Patrick Store","total":"$419.40","commission":"$62.91","balance":"$356.49","siteBal":"$0.00","status":"Approved","createdAt":"May 21, 2019"},
    {"title":"Patrick Store","total":"$768.90","commission":"$115.34","balance":"$653.56","siteBal":"$0.00","status":"Approved","createdAt":"May 21, 2019"}
]}
};

const widgetsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_WIDGETS:
            return {
                ...state,
                data: {...action.payload}
            };
        default:
            return state;
    }
};

export default widgetsReducer;