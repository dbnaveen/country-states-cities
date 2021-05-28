import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import CountryStateCityData from "../../../geo_data/countries+states+cities.json";

export default class AppCountry extends Component {

    constructor(){
        super();
        this.state = {
          searchInput: ""
        }
      }

    onChangeHandler(e){
        this.setState({
            searchInput: e.target.value,
        })
    }

    clearSearch = () => {
        this.setState({
            searchInput: '',
        })
    }

    render() {
        return (
            <div className="h-100">
            <div className="paper-container-header">
                Country
            </div>
            <div className="paper-container-body">
                <div className="paper-container-search">
                    <form noValidate autoComplete="off">
                        <TextField value={this.state.searchInput} className="search-input" placeholder="Search Countries ..." variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: this.state.searchInput && (
                                <IconButton onClick={this.clearSearch}>
                                    <Icon fontSize="small">clear</Icon>
                                </IconButton>
                            )
                        }} onChange={this.onChangeHandler.bind(this)} />
                    </form>
                </div>

                <div className="paper-container-list">
                    {CountryStateCityData.filter(ctry => this.state.searchInput === "" || ctry.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ).map((ctry, i) => (
                        <div className="c-s-c-list" key={i}>
                            <Grid container spacing={0}>
                                <Grid item xs={2} className="c-s-c-img">
                                    🇦🇫
                                </Grid>
                                <Grid item xs={8}>
                                    <span className="c-s-c-name"> {ctry.name} </span>
                                    <span className="c-s-c-code">AF</span>
                                </Grid>
                                <Grid item xs={2} className="c-s-c-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
    }
}
