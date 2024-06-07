import React, { useState, useEffect } from "react";
import ContactComputer from "../Computer/ContactComputer.jsx";
import ContactMobile from "../Mobile/ContactMobile.jsx";

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <ContactMobile />
            ) : (
                <ContactComputer />
            )}
        </>
    );

};

export default Contact;
