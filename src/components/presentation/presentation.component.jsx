import React from 'react';
import Inspecor from '../inspector/inspector.component';
import svg1 from '../presentation/images/QAInspector.svg'
import './presentaion.styles.scss';
// este componente muedtra al inspector

const Presentation = ({portfolio}) => {
    //console.log("Portfolio (Presentation):",JSON.stringify(portfolio.localities));
    return (
        
        <div className="svgProduct">
            <Inspecor 
            image = {svg1} 
            imageDesc="Employees" 
            productDescription="Inspection Services"/>
        </div>
    )
}

export default Presentation
