import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className='bg-gray-800 text-white py-4'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='flex space-x-4'>
                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <FaGithub />
                        </a>
                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin />
                        </a>
                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div>
                        &copy; 2024 - Juan Sebastián Samboni
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer