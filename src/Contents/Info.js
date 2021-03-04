import capstone from './capstone';
import proj2 from './proj2';
import projMain from './projMain';



const stuff = {
    tags: [{
        tag: 'Main',
        projs: [capstone, projMain]
    },
    {
        tag: 'Game Design', 
        projs: [capstone]
    },
    {
        tag: 'Writing', 
        projs: [capstone, proj2]
    },
    ],
    all: [
        capstone, proj2, projMain
     ]
}



export default stuff;