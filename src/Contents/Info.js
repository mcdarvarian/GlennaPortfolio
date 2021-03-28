import capstone from './capstone';
import proj2 from './proj2';
import projMain from './projMain';



const stuff = {
    tags: [{
        tag: 'Main',
        projs: [capstone, projMain, proj2]
    },
    {
        tag: 'game design', 
        projs: [capstone]
    },
    {
        tag: 'writing', 
        projs: [capstone, proj2]
    },
    ],
    all: [
        capstone, proj2, projMain
     ]
}



export default stuff;