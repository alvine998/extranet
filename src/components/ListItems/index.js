import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

export const mainListItems = (
    <div>
      <ListItem button component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider/>
      <ListSubheader inset>Data</ListSubheader>
      <ListItem button component={Link} to="/dashboard/order">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Pemesanan" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/customer">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Properti" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/report">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Laporan" />
      </ListItem>
    </div>
  );

  export const secondaryListItems = (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button component={Link} to="/dashboard/report/month">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Laporan Bulanan" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/report/last-quarter">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Laporan per Quarter" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/report/year-end">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Laporan Tahunan" />
      </ListItem>
    </div>
  );

  export const logoutListItems = (
    <div>
      <ListSubheader inset>Pengaturan</ListSubheader>
      <ListItem button component={Link} to="/dashboard/account">
        <ListItemIcon>
          <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText primary="Akun Manajer" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/contact-us">
        <ListItemIcon>
          <PhoneIcon/>
        </ListItemIcon>
        <ListItemText primary="Hubungi Kami" />
      </ListItem>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <PowerSettingsNewIcon/>
        </ListItemIcon>
        <ListItemText primary="Keluar" />
      </ListItem>
    </div>
  )