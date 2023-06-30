import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useAppSelector } from '../../store/hooks';
import "./footer.scss";

const Footer: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-copyright">
                        <p>{langEN ? "The Bluetooth® word mark and logos are registered trademarks owned by Bluetooth SIG,Inc. and any use of such marks by Aro is under license. Other trademarks and trade names are those of their respective owners." : "Словесный знак и логотипы Bluetooth® являются зарегистрированными товарными знаками, принадлежащими Bluetooth SIG, Inc. и любое использование таких знаков компанией Aro осуществляется по лицензии. Другие товарные знаки и торговые наименования принадлежат их соответствующим владельцам."}</p>
                        <h1>{langEN ? "© 2022 Aro. All rights reserved." : "© 2022 Aro. Все права защищены."}</h1>
                    </div>
                    <div className="footer-share">
                        <ul className="share-items">
                            <li className="share-item">
                                <a href="https://twitter.com/"><FaTwitter /></a>
                            </li>
                            <li className="share-item">
                                <a href="https://www.instagram.com/"><FaInstagram /></a>
                            </li>
                            <li className="share-item">
                                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                            </li>
                            <li className="share-item">
                                <a href="https://www.youtube.com/"><FaYoutube /></a>
                            </li>
                            <li className="share-item">
                                <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-services">
                        <div className="footer-services_privacy">
                            <a href="/">{langEN ? "Privacy Policy" : "Политика конфиденциальности"}</a>
                        </div>
                        <div className="footer-services_terms">
                            <a href="/">{langEN ? "Terms of Service" : "Условия использования"}</a>
                            <a href="/">{langEN ? "Terms of Sale" : "Условия продажи"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;