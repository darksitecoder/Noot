import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

const links = [
  { url: '/search',img:<SearchOutlinedIcon />, text: ' All' },
  { url: '/news',img:<FeedOutlinedIcon />, text: ' News' },
  // { url: '/images',img:<ImageOutlinedIcon />, text: ' Images' },
  { url: '/videos',img:<PlayCircleFilledWhiteOutlinedIcon />, text: ' Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, img,text }) => (
      <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" >{img}{text}</NavLink>
    ))}
  </div>
);