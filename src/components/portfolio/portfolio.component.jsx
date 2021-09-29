import React from 'react';
import Houses from '../presentation/images/houses.svg';
import InspectionInfo from '../inspection-picture/inspection-picture.component';
import './portfolio.styles.scss';

const Projects = ({portfolio}) => {

    //console.log('Projects:',JSON.stringify( portfolio))
    const constuction = portfolio.localities.map(p => (<InspectionInfo place={p}/>))
    console.log('Places:',constuction)

    return (
        <>
            <div className="header">
                <img className="svg-img imagen" src={Houses} alt="Houses"/>
            </div>
        
        {
            constuction
        }
        </>
                
    )
}

export default Projects

