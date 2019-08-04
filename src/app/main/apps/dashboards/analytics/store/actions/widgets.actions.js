import axios from 'axios';
import moment from 'moment'

export const GET_WIDGETS = '[ANALYTICS DASHBOARD APP] GET WIDGETS';
export const GET_DATA = 'GET DATA'
export const GET_Weekly = 'GET WEEKLY DATA'
export function getWidgets()
{
    const request = axios.get('/api/analytics-dashboard-app/widgets');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_WIDGETS,
                payload: response.data
            })
        );
}


export function getData(date,month){


  let reqDate = date + '/' + month + '/' + 2019

   const request = axios.get('http://part.dynu.net:8387/v1.0/meetings/staff/sid2?fromDate='+reqDate,{dataType:'json',contentTye:'application/json'});
   return (dispatch)=>request.then((response)=>
   dispatch({
     type:'GET_DATA',
     payload:response.data
   })
 )
}


export function getWeekly(month,date){


  let fromDate = '01/'+ month + '/' + 2019 

  let toDate = date + '/' + month + '/' + 2019

   const request = axios.get('http://part.dynu.net:8387/v1.0/meetings/staff/sid2?fromDate='+fromDate+'&toDate='+toDate,{dataType:'json',contentTye:'application/json'});
   return (dispatch)=>request.then((response)=>
   dispatch({
     type:'GET_Weekly',
     payload:response.data
   })
 )
}