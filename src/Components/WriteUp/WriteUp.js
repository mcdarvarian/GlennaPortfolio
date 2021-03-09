import React, { Component } from 'react';
import Header from '../Header/Header';
import info from '../../Contents/Info';
import './WriteUp.css';
import Footer from '../Footer/Footer';

class WriteUp extends Component {
    getContent(){
        let index = this.props.location.pathname.replace('/project/', '');
        let ind = -1;
        for(let i =0; i < info.all.length; i++){
            if(info.all[i].title === index){
                ind = i;
                i = info.all.length;
            }
        }
        if(ind === -1){
            this.props.history.push('/Missing');
        } else {
            let proj = info.all[ind]; 
            return this.translateContent(proj);
        }
        
    }

    translateContent(content){

        let lines = content.long.split('\n');
        lines = lines.map(line => {
            line = line.trimStart();
            //if the line is blank, have it be a br
            //if the line is words, have it be a p
            //if the line starts with HEADD: have it be a h3
            //if line starts with IMG, find the right image and place it in appropriately
            if(line.startsWith('HEADD')){
                let out = line.replace('HEADD', '');
                return <h3>{out}</h3>
            } else if(line.replaceAll(' ', '') === ''){
                return <br/>
            } else if(line.startsWith('IMG')) {
                const src = line.replace('IMG ', '');
                return <img src={src} alt='img alt'></img>
            } else {
                if(line.indexOf("<a>") !== -1){
                    line = line.split('<a>');
                    
                    let swt = true;
                    let res = line.map(section =>{
                        if(swt){
                            swt = !swt;
                            return(<p className='inline_text'>{section}</p>)
                        } else {
                            swt = !swt;
                            let list = section.split(' ');
                            let link = list[1];
                            section = section.slice(link.length +2, section.length);
                            return(<a href={link} target="_blank" className='inline_link' rel="noreferrer">{section}</a>);
                        }
                        
                    })
                    return (<div className='spacing_with_link'>{res}</div>);
                } else {
                    return <div className='spacing'><p>{line}</p></div>
                }
                
            }
        })
        let res = (
            <div className='translation'>
                <div>
                <img src={`${content.icon}`} alt='project icon'></img>
                </div>
                <h1>{content.title}</h1>
                {lines}
            </div>);


        return res;
    }

    render(){
        let content = this.getContent();
        return(
            <div className='write_up'>
                <Header></Header>
                {content}
                <Footer></Footer>
            </div>
        )
    }
}

export default WriteUp;