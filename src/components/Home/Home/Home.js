import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonials from '../Testimonials/Testimonials';
import BlogPost from '../BlogPost/BlogPost';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Animation from '../../Animation/Animation/Animation';

const Home = () => {
    return (
        <div>
            <Animation/>
            <Header></Header>
            
            <br/><br/> <br/><br/> <br/><br/>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
            <Doctors></Doctors>
            <BlogPost></BlogPost>
            
            
            <br/><br/>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;