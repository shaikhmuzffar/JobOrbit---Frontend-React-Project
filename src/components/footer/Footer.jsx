import React from 'react'

// images
import micrsoftStore from '../../images/microsoft-store.png'
import appStore from '../../images/app-store.png'
import playStore from '../../images/playstore.png'

// css 
import './footer.css'

export default function Footer() {
    return (
        <div class="footerSection">
            <div class="footer container">
                <div class="footer-column mainBox">
                    <div class="logo footer-column_header">
                        <span>Job<i class="ri-search-line"></i>rbit</span>
                    </div>
                    <ul class="footer-column_Links">
                        <li class="footer-column_Link footerDesc">
                        Embark on your career journey with JobOrbit. Discover diverse job listings and launch your path to success today.
                        </li>
                        <li class="footer-column_Link">
                            <div class="storeBox">
                                <img src={playStore} width="20px" alt="" />
                                <div class="storeInfo">
                                    <small>get it on</small>
                                    <span>Google Play</span>
                                </div>
                            </div>
                        </li>
                        <li class="footer-column_Link">
                            <div class="storeBox">
                                <img src={micrsoftStore} width="20px" alt="" />
                                <div class="storeInfo">
                                    <small>download from</small>
                                    <span>Windows store</span>
                                </div>
                            </div>
                        </li>
                        <li class="footer-column_Link">
                            <div class="storeBox">
                                <img src={appStore} width="20px" alt="" />
                                <div class="storeInfo">
                                    <small>Available on</small>
                                    <span>App store</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <span class="copyright"> &copy;2023 all rights reserved </span>

                </div>

                {/* <!-- footer column 2 -->  */}
                <div class="footer-column">
                    <h3 class="logo footer-column_header">
                        Product
                    </h3>
                    <ul class="footer-column_Links">
                        <li class="footer-column_Link">
                            Landing Page
                        </li>
                        <li class="footer-column_Link">
                            Popup builder
                        </li>
                        <li class="footer-column_Link">
                            web design
                        </li>
                        <li class="footer-column_Link">
                            content
                        </li>
                        <li class="footer-column_Link">
                            Integration
                        </li>
                    </ul>
                </div>

                {/* <!-- footer column 3 --> */}
                <div class="footer-column">
                    <h3 class="logo footer-column_header">
                        use cases
                    </h3>
                    <ul class="footer-column_Links">
                        <li class="footer-column_Link">
                            Web designers
                        </li>
                        <li class="footer-column_Link">
                            marketers
                        </li>
                        <li class="footer-column_Link">
                            small business
                        </li>
                        <li class="footer-column_Link">
                            website builder
                        </li>
                    </ul>
                </div>

                {/* <!-- footer column 4 --> */}
                <div class="footer-column">
                    <h3 class="logo footer-column_header">
                        company
                    </h3>
                    <ul class="footer-column_Links">
                        <li class="footer-column_Link">
                            About
                        </li>
                        <li class="footer-column_Link">
                            careers
                        </li>
                        <li class="footer-column_Link">
                            FAQs
                        </li>
                        <li class="footer-column_Link">
                            teams
                        </li>
                        <li class="footer-column_Link">
                            contact us
                        </li>
                        <li>
                            teams</li>
                    </ul>
                </div>

                {/* <!-- footer column 5 --> */}
                <div class="footer-column subscribeBox">
                    <h3 class="logo footer-column_header">
                        Subscribe
                    </h3>
                    <ul class="footer-column_Links">
                        <li class="footer-column_Link newsLatterDesc">
                            subscribe to stay tuned for latest update. lets do it.
                        </li>
                        <li class="footer-column_Link">
                            <div class="newsLatterBox">
                                <input type="text" placeholder="enter your email address" />
                                <a class="btn">subscribe</a>
                            </div>
                        </li>
                        <li class="footer-column_Link">
                            <div class="link-address">
                                <i class="ri-map-pin-2-line"></i> <span>123 Main Street
                                    Anytown, CA 12345
                                    United States</span>
                            </div>
                        </li>
                        <li class="footer-column_Link">
                            <div class="link-email">
                                <i class="ri-mail-open-line"></i> <span>support@shaikmuzffar82.com</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}
