import React from 'react';
import {Button} from '@material-ui/core';

const PurchaseButton = () => {
    return (
        <Button component="a"
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                className="normal-case"
                variant="contained"
                color="secondary">
        
            <span>Footer Section</span>
        </Button>
    );
};

export default PurchaseButton;
