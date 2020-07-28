import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

export default function Footer(props){
        return(
            <div className="App-footer">  
                <h2>copyright {props.year}  @ patito sa azure </h2>
            </div>
        );
}
