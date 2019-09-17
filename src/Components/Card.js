import React, { Component } from 'react'
import '../App.css';
import OpenModal from './OpenModel';

export default class Card extends Component {
    render() {

        const {id,first_name,last_name, last_position, last_company, grade} = this.props.data;
        var color=[" ","black","#ff6700","#9c0f9c"];

        return (
            <div className="mx-auto col-md-3 col-lg-3 my-3">
                        <div className="card py-3 px-3 img-container" style={{height:'100%'}}>
                            <div className="row">
                                <div className="col">
                                <h2>{first_name}</h2>
                                <h2>{last_name}</h2>
                                </div>
                                <div className="col-md-2 col-lg-3 col-sm-2 col-sx-1 col-2">
                                    <p style={{backgroundColor: color[grade], color:'white', borderRadius:'50%', textAlign:'center'}}>{grade}</p>
                                </div>
                            </div>
                            <div>
                            <p className="position">{last_position}</p>
                            <p>{last_company}</p>
                            </div>
                            <p href="" className="showmore"><OpenModal moreinfo={this.props.data}></OpenModal></p>

                        </div>
                    </div>
        )
    }
}
