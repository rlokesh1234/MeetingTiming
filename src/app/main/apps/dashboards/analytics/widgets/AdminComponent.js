import React from 'react';
import { withStyles, Card, Typography } from '@material-ui/core';
import classNames from 'classnames';

const AdminComponent = ({ adminDetails, theme }) => {

    const adminName = adminDetails.Name.split(' ')

    return (
        <Card className="w-full rounded-8 shadow-none border-1">

            <div className="p-16 pb-0 flex flex-row flex-wrap items-end">

                <div className="flex">
                    <div className="mr-20">
                        <img src={adminDetails.img} alt={adminDetails.Name} />
                    </div>
                    <div className="inline-block">
                        <Typography component="h5"> <span>{adminName && adminName[0]}</span>
                            {" "+adminName[1]}
                        </Typography>
                        <div className="listItem">
                            {
                                adminDetails && adminDetails.data.map((details, index) => {
                                    return (<p className={classNames(details.class, 'p-8')} key={index}>
                                        <span className="bg-red p-4 text-white rounded listValue inline-block">{details.value}</span>
                                        {" " +details.field}
                                    </p>)
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
        </Card>
    );
};

export default withStyles(null, { withTheme: true })(AdminComponent);
