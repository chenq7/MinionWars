import React from 'react';
import './footer.css';



class Footer extends React.Component {


    render(){
        return(
        <footer className="footer">
          <p>Designed by </p>
          <div className="footer-cols">
            <ul>
              <li>
                <a href="#">
                  <span></span>
                  {/* <i className="fab fa-linkedin"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </footer>
        )
    }
}


export default Footer;