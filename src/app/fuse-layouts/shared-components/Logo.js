import React from 'react';
import { withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    root      : {
        '& .logo-icon': {
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        }
    },
    reactBadge: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color          : '#61dafb'
    }
});

function Logo({classes})
{
    return (
        <div className={classNames(classes.root, "flex items-center")}>
            <img className="logo-icon" src="assets/images/logos/omantel_logo.png" alt="logo"/>
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(Logo);
