import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { handleLang } from '../../store/langSlice/langSlice';
import "./header.scss";

const Header: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)
    const [scroll, setScroll] = useState(false)
    const [hide, setHide] = useState(false)
    const dispatch = useAppDispatch();
    
    const changeLang = () => {
        dispatch(handleLang())
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY);
            if(window.scrollY > 107) {
                setHide(true)
            }else{
                setHide(false)
            }

            if(window.scrollY > 915) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    }, [])

    return (
        <header className={scroll ? "header fixed" : hide ? "header hide" : "header"}>
            <div className="container">
                <div className="header-inner">
                    <div className="header-nav">
                        <ul className="nav-items">
                            <li className="nav-item"><a href="/">{langEN ? "how it works" : "как это работает"}</a></li>
                            <li className="nav-item"><a href="/">{langEN ? "the membership" : "Участие"}</a></li>
                            <li className="nav-item"><a href="/">{langEN ? "the blog" : "блог"}</a></li>
                            <li className="nav-item"><a href="/">{langEN ? "our" : "о нас"}</a></li>
                            <li className="nav-item">
                                <button className='lang' onClick={changeLang}>
                                    <span className={langEN ? "" : "active"}>RU</span> / <span className={langEN ? "active" : ""}>EN</span>
                                </button></li>
                            <li className="nav-item"><button type='submit' className='aro-button'>{langEN ? "get started" : "начать"}</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;