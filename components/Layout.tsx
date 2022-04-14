import React from 'react';
import Header from './Header';
import styles from '../styles/Layout.module.scss';
import Page from './Page';
import Grid from '@mui/material/Grid';
import Bottom from './Bottom';

type Props = {
  children?: any;
};
export default function Layout({ children }: Props) {
  return (
    <div>
      <Grid container>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <Page>{children}</Page>
          </Grid>
        </Grid>
        <div className="fixed bottom-0 w-full border-solid border-t border-gray-300">
          <Grid item xs={12}>
            <Bottom />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
