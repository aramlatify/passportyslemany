import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import '../styles/globals.scss';
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@mui/styles";


const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
 
  return (
    <StylesProvider jss={jss}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        
        <Component {...pageProps} />
      
      </ThemeProvider>
    </CacheProvider>
    </StylesProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
