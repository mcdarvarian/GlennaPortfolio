import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class AboutMe extends Component {

render(){

    return (
        <div className='About me'>
            <Header></Header>
            <h1> About Me</h1>
			<div className = "imagecenter">
				<img src ="images/ProfilePhoto.jpg" alt="Yours truly" width = "75%" />
			</div>
            <p>Hello! I'm Glenna Greer, a graduate of Northeastern University's Games and Computer Science programs. I'm a narrative and level designer by trade and a storyteller at heart. In my mind, every aspect of game design is a different approach to storytelling, from the character development present in mechanics design to the world building baked in to level design.  </p>
				<br/>
				<p>I look for games with strong aesthetics not only in the art direction, but also in the narrative. Environmental stories and game worlds that get deeper and more interesting the more that you explore are my favorite interactive experiences, and they're what I try to create in my own work. Games are special because they let the player experience the world on their own terms, not only through the narrow focus of a narrator or a tightly choreographed sequence of camera angles. </p>
				<br/>
				<p>While I do like to dabble in all aspects of game design, there are a few things that I always find myself circling back to. I'm a master of environmental and narrative puzzles, world building, and character development. I love designing around strong central themes and finding ways to pepper every environment and scene with extra bits of meaning that players can seek out. </p>
				<br/>
				
				<p>Some of my favorite games (in no particular order) are:</p>
                <ul>
				<li>&#8226; the Witcher series</li>
					<br/>
					<li>&#8226; Return of the Obra Dinn</li> <br/>
					<li>&#8226; Alice: Madnes Returns</li> <br/>
					<li>&#8226; Monster Hunter: World</li> <br/>
					<li>&#8226; What Remains of Edith Finch</li> <br/>
					<li>&#8226; the Dragon Age series</li> <br/>
					<li>&#8226; GRIS</li> <br/>
					<li>&#8226; Divinity: Original Sin 2</li>
				</ul>
                <br/>
			<p>The best way to get in contact with me is by emailing me at <a href = "mailto: glenna.c.greer@gmail.com">glenna.c.greer@gmail.com</a> or finding me on Twitter at <a href = "twitter.com/gsandthose">@gsandthose</a>.</p>				
			<Footer></Footer>
        </div>
        )}
}

export default AboutMe;