import React, { useEffect, useState } from 'react';
import './About.css';
import {  FaXTwitter } from 'react-icons/fa6';

const About: React.FC = () => {
    const fullText = "  Hello I'm Ashley Mozorandi, a passionate Software Engineer specializing in Automation Testing. With a keen eye for detail and a commitment to quality, I strive to ensure that software not only meets but exceeds expectations. Beyond my expertise in automation, I indulge in frontend development as a hobby, constantly exploring new technologies and design patterns to create engaging user experiences. I believe that the intersection of quality assurance and frontend innovation is where true magic happens ! .. also commited to 100daysofcode follow up my journey on  "
    
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 1;
        const interval = setInterval(() => {
            if (index < fullText.length ) {
                setDisplayText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust the typing speed here

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="about-container">
            <h2 className="about-title">About Me</h2>
             <p>{displayText}</p>
            <a href="#twitter"><FaXTwitter /></a>
        </section>
    );
};
