import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./AppBody.scss";

function AppBody() {
    const [spacing] = React.useState(7);

    return (
        <div className="app-body-container">
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {/* {[0, 1, 2].map((value) => (
                            <Grid className="grid-container" key={value} item xs={12} sm={12} md={12} lg={4}>
                                <Paper className="paper-container" >
                                    Hello
                                </Paper>
                            </Grid>
                        ))} */}

                        <Grid className="grid-container" item xs={12} sm={12} md={12} lg={4}>
                            <Paper className="paper-container" >
                                Hello
                                </Paper>
                        </Grid>
                        <Grid className="grid-container" item xs={12} sm={12} md={12} lg={4}>
                            <Paper className="paper-container" >
                                Hello
                                </Paper>
                        </Grid>
                        <Grid className="grid-container" item xs={12} sm={12} md={12} lg={4}>
                            <Paper className="paper-container" >
                                Hello
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppBody
