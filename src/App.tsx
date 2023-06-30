import React, { useEffect } from 'react';
import { useAppSelector } from './store/hooks';
import { 
    Header, 
    SectionIntro , 
    SectionStart, 
    SectionSpend, 
    SectionTeach, 
    SectionReconnect,
    SectionTake,
    SectionFeature,
    SectionVideo,
    SectionExperience,
    SectionApp,
    SectionHomeDevice,
    SectionGetStarted,
    SectionComments,
    SectionWhyAro,
    SectionSmart,
    SectionLife,
    SectionAbout,
    Footer
 } from "./components";

const App: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    useEffect(() => {
        localStorage.setItem("lang", `${langEN}`)
        if (langEN) {
            document.title = "Aro | A little less phone. Way more life."
        }else {
            document.title = "Aro | Чуть меньше телефона. Намного больше жизни."
        }
        return () => {
            localStorage.setItem("lang", `${langEN}`)
        }
    }, [langEN])
    return (
        <div className="app">
            <Header />
            <SectionStart />
            <SectionIntro />
            <SectionSpend />
            <SectionTeach />
            <SectionReconnect />
            <SectionTake />
            <SectionFeature />
            <SectionVideo />
            <SectionExperience />
            <SectionApp />
            <SectionHomeDevice />
            <SectionGetStarted />
            <SectionComments />
            <SectionWhyAro />
            <SectionSmart />
            <SectionLife />
            <SectionAbout />
            <Footer />
        </div>
    )
}

export default App;