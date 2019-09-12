import React from 'react';
import {withStyles, Card} from '@material-ui/core';
//import GoogleMap from 'google-map-react';


const Widget6 = ({data}) => {
    return (
        <Card className="w-full  rounded-8 shadow-none border-1">
             <table className="simple clickable">
                <thead>
                    <tr>
                        <th className="">Shop</th>
                        <th className="">Total</th>
                        <th className="">Commission</th>
                        <th className="">Shop Balance</th>
                        <th className="">Site Balance</th>
                        <th className="">Paid</th>
                        <th className="">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map(row => (
                        <tr key={row.title}>
                            <td className="">{row.title}</td>
                            <td className="">{row.total}</td>
                            <td className="">{row.commission}</td>
                            <td className="">{row.balance}</td>
                            <td className="">{row.siteBal}</td>
                            <td className="">{row.status}</td>
                            <td className="">{row.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </Card>
    );
};

export default withStyles(null, {withTheme: true})(Widget6);
