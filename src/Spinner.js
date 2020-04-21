import React from 'react';

const Spinner = (props) => {
    return (

        <div class="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>


    )
}

//  default prop will run whenever if forget to set prop.message in index.js file
Spinner.defaultProps={
    message:'Loading..'
}

export default Spinner;