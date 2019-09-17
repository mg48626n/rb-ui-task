import React, { Component } from 'react'
import Card from './Card';

export default class Cards extends Component {
    render() {
        var {details} = this.props;

        function compare(a, b) {
            const genreA = a.grade;
            const genreB = b.grade;
    
            let comparison = 0;
            if (genreA > genreB) {
                comparison = 1;
            } else if (genreA < genreB) {
                comparison = -1;
            }
            console.log(comparison+"....");
            return comparison;
        } 
            details.sort(compare);

            let filteredList = this.props.details.filter(
            (list) =>{
                return list.first_name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==-1 || list.last_name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==-1;
            }
            )
            // console.log(filteredList);
            details = filteredList;
    
        return (
            <div>
                <div className="container">
                    <div className="row my-3 mx-3">
                        { details.map((item) => (<Card key={item.id} data={item} />))}
                    </div>
                </div>
            </div>
        )
    }
}
