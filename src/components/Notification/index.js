import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge, Divider, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2)
	}
}));

const Notification = () => {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div>
			<IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
				<Badge badgeContent={10} max={9} color="secondary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical:'bottom', horizontal:'center'}}
                transformOrigin={{vertical:'top', horizontal:'center'}}
            >
                <Typography className={classes.typography}>Notification</Typography>
                <Divider/>
                <Typography className={classes.typography}>Hello thank you for coming here!</Typography>
            </Popover>
		</div>
	);
};

export default Notification;
