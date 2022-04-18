import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import styles from '../../styles/Bottom.module.scss';
import { style } from '@mui/system';

export default function Footer() {
  return (
    <Box>
      <BottomNavigation showLabels>
        {/*  */}
        <Link href="/profile" passHref>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />}>
            <a />
          </BottomNavigationAction>
        </Link>
        {/* </Link> */}

        <Link href={'/messages'} passHref>
          <div className="child:opacity-1">
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </div>
        </Link>

        <Link href={'/post'} passHref>
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
