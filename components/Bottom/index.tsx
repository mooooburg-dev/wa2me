import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box>
      <BottomNavigation>
        <Link href="/profile" passHref>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </Link>

        <Link href={'/messages'} passHref>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Link>

        <Link href={'/post'} passHref>
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
