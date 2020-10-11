import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (  
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3>{description}</h3>
            <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>

        <h3>{numeral(amount / 100).format('$0.00')}</h3>
       
    </Link>      
);

export default (ExpenseListItem);