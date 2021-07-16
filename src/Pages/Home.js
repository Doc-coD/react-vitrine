import React from 'react';
import Buttons from '../Components/Button';
import DynamicText from '../Components/DynamicText';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                <div className="main-content">
                    <h1>Doc Agency</h1>
                    <h2><DynamicText/></h2>
                </div>
                </div>
                <Buttons right={"project1"}/>
            </div>


            </div>
    );
}

export default Home;