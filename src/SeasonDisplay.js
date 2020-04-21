import './SeasonDisplay.css';
import React from 'react';

//webpack  is alibrraby that joins different file together 
// it sees that seasondisplay.css file
// it takes ou css and stick with index.html file in public folder
const seasonConfig={
    summer:{
        text:'lets"s hit the beach',
        iconName:'sun'
    },
    winter:{
        text:'Burr it is chilly',
        iconName:'snowflake'
    }

}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summner;'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())


    // const text = season === 'winter' ? 'Burr it is chilly' : 'lets"s hit the beach'
    // const icon=season==='winter'?'snowflake':'sun';
   
   const {text,iconName}= seasonConfig[season] //{text,iconName}

    //  ${variable} into string 
    // as Diksha+2 in string
    return (<div className={`season-display ${season}`} >
       
        {/* <i className={`${icon} icon`}  /> */}
        {<i className={`icon-left massive ${iconName} icon`}  /> }
        <h1>{text}</h1>
        <i className={`icon-right  massive ${iconName} icon`}  />
    </div>)
}
export default SeasonDisplay;