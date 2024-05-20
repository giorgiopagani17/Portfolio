import React, { useState, useEffect } from "react";
import "./elements/Css/Contact.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);
    const [isConfirmHovered, setIsConfirmHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleIconMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon(null);
    };

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    const handleDownloadClick = () => {
        const url = '/cv.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cv_giorgiopagani');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send('service_ndtlthm', 'template_vmmqg9j', formData, 'A3RYEl8jrZ9jOL2-v')
            .then((result) => {
                console.log(result.text);
                setStatus('Email inviata con successo!');
                setIsLoading(false);
            }, (error) => {
                console.log(error.text);
                setStatus('Invio dell\'email fallito. Per favore, riprova più tardi.');
                setIsLoading(false);
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        setTimeout(() => {
            setStatus('');
        }, 5000);
    };

    return (
        <>
            {isMobile ? (
                <div className="flex flex-col-reverse min-h-screen gap-x-80" >
                    <div className="mb-6 pl-5 w-96">
                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                            <label htmlFor="email" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#3b83bd] dark:text-[#3b83bd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@gmail.com" 
                                    required 
                                />
                            </div>

                            <label htmlFor="name" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Nome e Cognome</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#3b83bd] dark:text-[#3b83bd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.589 0-11 1.79-11 5v3h22v-3c0-3.21-7.411-5-11-5z"/>
                                    </svg>
                                </div>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Mario Rossi" 
                                    required 
                                />
                            </div>

                            <label htmlFor="subject" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Oggetto</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#3b83bd] dark:text-[#3b83bd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                    </svg>
                                </div>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Collaborazione" 
                                    required 
                                />
                            </div>
                            
                            <label htmlFor="message" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Messaggio</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Ciao Giorgio, vorrei collaborare con te..." 
                                required 
                            ></textarea>
                            <button
                                id="button" 
                                type="submit" 
                                className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onMouseEnter={() => setIsConfirmHovered(true)} 
                                onMouseLeave={() => setIsConfirmHovered(false)}
                            >
                                {isLoading ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                        <span className="ml-2">Invio...</span>
                                    </>
                                ) : (
                                    <>
                                        Invia Messaggio
                                        <FontAwesomeIcon className="ml-2" icon={faPaperPlane} bounce={isConfirmHovered} />
                                    </>
                                )}
                            </button>
                            {status && <p className="mt-4 text-white">{status}</p>}
                        </form>
                    </div>
                    <div className="mb-6 pl-5 text-white">
                        <p><strong className="text-[#3b83bd] text-6xl">Contattami:</strong></p>
                        <p className="text-xl mt-10">Compila il modulo alla tua destra per contattarmi, <br/> verrai ricontattato il prima possibile!</p>
                        <div className="mt-10">
                            <FontAwesomeIcon 
                                icon={faInstagram} 
                                size="2xl" 
                                beatFade
                                style={{ color: hoveredIcon === 'instagram' ? "#3b83bd" : "#ffffff", marginRight: '5%', cursor: 'pointer' }} 
                                onClick={() => handleClick("https://www.instagram.com/_giorgiopagani_/")} 
                                onMouseEnter={() => handleIconMouseEnter('instagram')} 
                                onMouseLeave={handleIconMouseLeave} 
                            />
                            <FontAwesomeIcon 
                                icon={faLinkedin} 
                                size="2xl" 
                                beatFade
                                style={{ color: hoveredIcon === 'linkedin' ? "#3b83bd" : "#ffffff", marginRight: '5%', cursor: 'pointer' }} 
                                onClick={() => handleClick("https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/")} 
                                onMouseEnter={() => handleIconMouseEnter('linkedin')} 
                                onMouseLeave={handleIconMouseLeave} 
                            />
                            <FontAwesomeIcon 
                                icon={faGithub} 
                                size="2xl"
                                beatFade
                                style={{ color: hoveredIcon === 'github' ? "#3b83bd" : "#ffffff", marginRight: '2%', cursor: 'pointer' }} 
                                onClick={() => handleClick("https://github.com/giorgiopagani17")} 
                                onMouseEnter={() => handleIconMouseEnter('github')} 
                                onMouseLeave={handleIconMouseLeave} 
                            />
                        </div>
                        <div className="mt-3">
                            <button id="button" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleDownloadClick} 
                                onMouseEnter={() => setIsDownloadHovered(true)} 
                                onMouseLeave={() => setIsDownloadHovered(false)} 
                            >
                                Download Cv 
                                <FontAwesomeIcon icon={faDownload} size="sm" className="ml-2" style={{ color: "#ffffff", animation: isDownloadHovered ? "bounce 1s infinite" : "none", transition: "transform 0.2s ease-in-out" }} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen gap-x-80" style={{ marginTop: '-8vh' }}>
                    <div className="mb-6 pl-5 text-white">
                        <p><strong className="text-[#3b83bd] text-6xl">Contattami:</strong></p>
                        <p className="text-xl mt-10">Compila il modulo alla tua destra per contattarmi, <br/> verrai ricontattato il prima possibile!</p>
                        <div className="mt-10">
                            <FontAwesomeIcon 
                                icon={faInstagram} 
                                size="2xl" 
                                beatFade
                                style={{ color: hoveredIcon === 'instagram' ? "#3b83bd" : "#ffffff", marginRight: '5%', cursor: 'pointer' }} 
                                onClick={() => handleClick("https://www.instagram.com/_giorgiopagani_/")} 
                                onMouseEnter={() => handleIconMouseEnter('instagram')} 
                                onMouseLeave={handleIconMouseLeave} 
                            />
                            <FontAwesomeIcon 
                                icon={faLinkedin} 
                                size="2xl" 
                                beatFade
                                style={{ color: hoveredIcon === 'linkedin' ? "#3b83bd" : "#ffffff", marginRight: '5%', cursor: 'pointer' }} 
                                onClick={() => handleClick("https://www.linkedin.com/in/giorgio-pagani-5ab4b42b1/")} 
                                onMouseEnter={() => handleIconMouseEnter('linkedin')} 
                                onMouseLeave={handleIconMouseLeave} 
                            />
                            <FontAwesomeIcon 
                                icon={faGithub} 
                                size="2xl"
                                beatFade
                                style={{ color: hoveredIcon === 'github' ? "#3b83bd" : "#ffffff", marginRight: '2%', cursor: 'pointer' }} 
                                onClick={() => handleClick("https://github.com/giorgiopagani17")} 
                                onMouseEnter={() => handleIconMouseEnter('github')} 
                                onMouseLeave={handleIconMouseLeave} 
                            />
                        </div>
                        <div className="mt-3">
                            <button id="button" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleDownloadClick} 
                                onMouseEnter={() => setIsDownloadHovered(true)} 
                                onMouseLeave={() => setIsDownloadHovered(false)} 
                            >
                                Download Cv 
                                <FontAwesomeIcon icon={faDownload} size="sm" className="ml-2" style={{ color: "#ffffff", animation: isDownloadHovered ? "bounce 1s infinite" : "none", transition: "transform 0.2s ease-in-out" }} />
                            </button>
                        </div>
                    </div>
                    <div className="mb-6 pl-5 w-96">
                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                            <label htmlFor="email" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#3b83bd] dark:text-[#3b83bd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@gmail.com" 
                                    required 
                                />
                            </div>

                            <label htmlFor="name" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Nome e Cognome</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#3b83bd] dark:text-[#3b83bd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.589 0-11 1.79-11 5v3h22v-3c0-3.21-7.411-5-11-5z"/>
                                    </svg>
                                </div>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Mario Rossi" 
                                    required 
                                />
                            </div>

                            <label htmlFor="subject" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Oggetto</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#3b83bd] dark:text-[#3b83bd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                    </svg>
                                </div>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Collaborazione" 
                                    required 
                                />
                            </div>
                            
                            <label htmlFor="message" className="mt-5 block mb-2 text-base font-medium text-gray-900 dark:text-white">Messaggio</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Ciao Giorgio, vorrei collaborare con te..." 
                                required 
                            ></textarea>
                            <button 
                                id="button"
                                type="submit" 
                                className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onMouseEnter={() => setIsConfirmHovered(true)} 
                                onMouseLeave={() => setIsConfirmHovered(false)}
                            >
                                {isLoading ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                        <span className="ml-2">Invio...</span>
                                    </>
                                ) : (
                                    <>
                                        Invia Messaggio
                                        <FontAwesomeIcon className="ml-2" icon={faPaperPlane} bounce={isConfirmHovered} />
                                    </>
                                )}
                            </button>
                            {status && <p className="absolute mt-4 text-white">{status}</p>}
                        </form>
                    </div>
                </div>
            )}
        </>
    );

};

export default Contact;
