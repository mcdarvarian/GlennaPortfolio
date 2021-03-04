import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import './Resume.css';

class Resume extends Component {

    render() {
        return (
            <div className='Resume'>
                <Header></Header>
                <div className="parallax">
                    <div className="content">
                        <h1>Resume</h1>
                        <div>
                            <p>You can <a href="/images/Glenna Greer Resume August 2020.pdf" download>download a PDF copy of my resume here!</a> It's exactly the same as the PNG below, but a bit more portable.</p>
                            <br />
                            <h2>Contact</h2>
                            <p>The best way to get in touch is by emailing me at <a href="mailto: glenna.c.greer@gmail.com">glenna.c.greer@gmail.com</a>. You can also find me on Twitter as <a href="https://www.twitter.com/gsandthose">@gsandthose</a>.</p>
                            <br />
                        </div>
                        <div>
                            <Document file='/images/Glenna Greer Resume August 2020.pdf'><Page pageNumber={1}></Page></Document>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Resume;