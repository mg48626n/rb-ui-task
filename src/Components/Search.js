import React, { Component } from 'react'
import '../App.css';

class Search extends Component {
    render() {
        return (
            <div className="trans float-right float-sm-right float-lg-right">
                 <input type="text" name="search" className="input" value={this.props.search} onChange={this.props.handleSearch}  placeholder="Search Candidate"  />
            </div>
        )
    }
}
export default Search;