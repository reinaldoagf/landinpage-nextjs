import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

const ArticleItem = ({ article }) => {
    return (
        <header>
            {/* <!-- logo --> */}
            <a className="logo" href="#hero">Logo</a>
            {/* <!-- navbar --> */}
            <nav className="nav-bar">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="icon-container blue-color" >
                                <FontAwesomeIcon icon={['fab', 'facebook-f']}  />
                                {/* <i className="fa fa-brands fa-facebook"></i> */}
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="icon-container red-color">
                                <FontAwesomeIcon icon={['fab', 'instagram']}  />
                                {/* <i className="fa fa-brands fa-instagram"></i> */}
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="icon-container mustard-color">
                                <FontAwesomeIcon icon={['fab', 'youtube']}  />
                                {/* <i className="fa fa-brands fa-youtube"></i> */}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="menu-icons">
                <i className="bx bx-menu"></i>
                <i className="bx bx-x"></i>
            </div>
        </header>)

}

export default ArticleItem;