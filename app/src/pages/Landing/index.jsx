import '../../styles';
import { Container, Video } from './styles';

import BackgroundHeader from '../../components/BackgroundHeader';
import  Header  from '../../layouts/Header';
import Banner from '../../layouts/Banner';
import Features from '../../layouts/Features';
import Devices from '../../layouts/Devices';
import Pricing from '../../layouts/Pricing';
import Contact from '../../layouts/Contact';
import VideoPlayer from '../../components/VideoPlayer/index';
import Footer from '../../layouts/Footer';
import { useEffect, useRef, useState } from 'react';



function Landing() {

    const homeRef = useRef(null);
    const productRef = useRef(null);
    const pricingRef = useRef(null);
    const previewRef = useRef(null);
    const contactRef = useRef(null);

    const [jumpToView,setJumpToView] = useState(null);
    
    const handleClick = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
        setJumpToView(null);
    };
    const handleJumpToView = (target) => {
        setJumpToView(target);
    }

    useEffect(()=>{
        if(jumpToView === 'home'){
            handleClick(homeRef);
        }
        if(jumpToView === 'product'){
            handleClick(productRef);
        }
        if(jumpToView === 'preview'){
            handleClick(previewRef);
        }
        if(jumpToView === 'pricing'){
            handleClick(pricingRef);
        }
        if(jumpToView === 'contact'){
            handleClick(contactRef);
        }
    },[jumpToView]);

    return (<>
            <BackgroundHeader/>
            <Container>
                <Header toView={handleJumpToView} goTo={homeRef}/>
                <Banner/>
                <Features goTo={productRef}/>
                <Devices/>
                <Video ref={previewRef}>
                    <VideoPlayer/>
                </Video>
                <Pricing goTo={pricingRef}/>
                <Contact goTo={contactRef}/>
                <Footer toView={handleJumpToView}/>
            </Container>
        </>
    );
}

export default Landing;
