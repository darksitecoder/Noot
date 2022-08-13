import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <div className="text-xl font-bold item-center justify-center p-5 mt-10 border-t dark:border-gray-700 border-gray-200 flex">
        <h1>2022 Noot, inc</h1>
        <div className="flex pl-4">
        <a href="https://github.com/darksitecoder" target="_blank"
            rel="noopener noreferrer" className="pr-3"><GitHubIcon fontSize='large'/></a>

        <a href="https://www.linkedin.com/in/sumit-pal-darksitecoder/" target="_blank"
            rel="noopener noreferrer" className="pr-3"><LinkedInIcon fontSize='large'/></a>


        <a href="https://www.instagram.com/codeobsessed/" target="_blank"
            rel="noopener noreferrer" className="pr-3"><InstagramIcon fontSize='large'/></a>
                </div>
    </div>
  );
}
