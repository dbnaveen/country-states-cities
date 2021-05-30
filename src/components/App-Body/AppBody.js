import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./AppBody.scss";
import AppCountry from "./App-Country/AppCtry";
import AppState from "./App-State/AppState";
import AppCity from "./App-City/AppCity";
import { CountryProvider } from '../Country-Context/CountryContext';
import { StateProvider } from '../Country-Context/StateContext';

function AppBody() {
    const [spacing] = React.useState(6);

    return (
        <CountryProvider>
            <StateProvider>
                <div className="app-body-container">
                    <Grid container spacing={spacing}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={spacing}>
                                <Grid className="grid-container" item xs={12} sm={12} md={12} lg={4}>
                                    <Paper className="paper-container">
                                        <AppCountry />
                                    </Paper>
                                </Grid>
                                <Grid className="grid-container" item xs={12} sm={12} md={12} lg={4}>
                                    <Paper className="paper-container">
                                        <AppState />
                                    </Paper>
                                </Grid>
                                <Grid className="grid-container" item xs={12} sm={12} md={12} lg={4}>
                                    <Paper className="paper-container">
                                        <AppCity />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </StateProvider>
        </CountryProvider>
    )
}

export default AppBody
