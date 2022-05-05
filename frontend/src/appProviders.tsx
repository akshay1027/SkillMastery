import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
// import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';

import App from './App';
import { AppTheme } from './config/materialThemeConfig';
import Wrapper from 'utiles/wrapper';

const AppProviders = () => {
    const appliedTheme = createTheme(AppTheme as any);
    return (
        <ThemeProvider theme={appliedTheme}>
            <Wrapper>
                <CssBaseline />
                <App />
            </Wrapper>
        </ThemeProvider>
    );
};

export default AppProviders;
