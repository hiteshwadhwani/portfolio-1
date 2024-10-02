import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {user} from "../config/data"

// import Services from '../components/Services';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        } else if (!location.hash && location.pathname === '/') {
            scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    // const filteredServices = user?.services?.filter((item) => item.enabled);
    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    // const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);

    return (
        <>
            <Cursor />
            <Header />
            <Hero about={user.about} socialHandles={filteredSocialHandles} />
            <Timeline experience={filteredExperience} education={filteredEducation} />
            <Skills skills={sortedFilteredSkills} />
            <Projects projects={sortedFilteredProject} />
            {/* <Services services={filteredServices} /> */}
            {/* <Testimonials testimonials={filteredTestimonials} /> */}
            <Contact email={user.email} socialHandles={filteredSocialHandles} about={user.about} />
        </>
    );
}

export default Home;
