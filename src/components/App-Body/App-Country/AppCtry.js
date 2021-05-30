import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import CountryStateCityData from "../../../geo_data/countries+states+cities.json";
import { CountryContext } from "../../Country-Context/CountryContext";
import { StateContext } from "../../Country-Context/StateContext";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import eventBus from "../../Event-Bus/EventBus";

function AppCtry() {

    const [searchInput, setInputString] = useState("");
    const filteredList = CountryStateCityData.filter(ctry => searchInput === "" || ctry.name.toLowerCase().includes(searchInput.toLowerCase()));
    const [, setCountry] = useContext(CountryContext);
    const [, setState] = useContext(StateContext);

    let handleInputChange = (e) => {
        setInputString(e.target.value);
    }

    let clearSearch = () => {
        setInputString("");
    }

    let selectCountry = (ctry, e) => {
        setCountry(ctry);
        setState({});
        eventBus.dispatch("countryClicked");
    }

    let HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#112D4E',
            maxWidth: 275,
            fontSize: theme.typography.pxToRem(14),
            padding: "10px 16px",
            boxShadow: "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px"
        },
    }))(Tooltip);

    return (
        <div className="h-100">
            <div className="paper-container-header"> Country </div>
            <div className="paper-container-body">
                <div className="paper-container-search">
                    <form noValidate autoComplete="off">
                        <TextField value={searchInput} className="search-input" placeholder="Search Countries ..." variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: searchInput && (
                                <IconButton onClick={clearSearch}>
                                    <Icon fontSize="small">clear</Icon>
                                </IconButton>
                            )
                        }} onChange={handleInputChange} />
                    </form>
                </div>

                <div className="paper-container-list">
                    {filteredList.map((ctry, i) => (
                        <div className={"c-s-c-list c-pointer c-hover"} key={i} onClick={e => selectCountry(ctry, e)}>
                            <Grid container spacing={0}>
                                <Grid item xs={2} className="c-s-c-img"> {ctry.emoji} </Grid>
                                <Grid item xs={8}>
                                    <span className="c-s-c-name"> {ctry.name} </span>
                                    <span className="c-s-c-code"> {ctry.iso2} </span>
                                </Grid>
                                <HtmlTooltip
                                    title={
                                        <React.Fragment>
                                            <Typography>
                                                <span className="tooltip-key">Country &nbsp;= </span> <span className="tooltip-val">{ctry.name}</span>
                                            </Typography>
                                            <Typography>
                                                <span className="tooltip-key">Capital &nbsp;= </span> <span className="tooltip-val">{ctry.capital}</span>
                                            </Typography>
                                            <Typography>
                                                <span className="tooltip-key">Region &nbsp;= </span> <span className="tooltip-val">{ctry.region}</span>
                                            </Typography>
                                            <Typography>
                                                <span className="tooltip-key">Total States &nbsp;= </span> <span className="tooltip-val">{ctry.states.length}</span>
                                            </Typography>
                                        </React.Fragment>
                                    }>
                                    <Grid item xs={2} className="c-s-c-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                    </Grid>
                                </HtmlTooltip>
                            </Grid>
                        </div>
                    ))}
                    {filteredList.length === 0 && (
                        <div className="c-s-c-empty">
                            <svg id="b21613c9-2bf0-4d37-bef0-3b193d34fc5d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="647.63626" height="632.17383" viewBox="0 0 647.63626 632.17383"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2" /><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56" /><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#112d4e" /><circle cx="190.15351" cy="24.95465" r="20" fill="#112d4e" /><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff" /><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6" /><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56" /><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#112d4e" /><circle cx="433.63626" cy="105.17383" r="20" fill="#112d4e" /><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff" /></svg>
                            <p>Empty Result</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AppCtry
