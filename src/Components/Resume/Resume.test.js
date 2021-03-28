import React from 'react';
//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import Resume from './Resume'


it('signup renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<div><Resume /></div>, div);
    ReactDOM.unmountComponentAtNode(div);
})