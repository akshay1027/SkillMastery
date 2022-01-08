import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
// import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';

import App from './App';
import { AppTheme } from './config/materialThemeConfig';

const AppProviders = () => {
    const appliedTheme = createTheme(AppTheme as any);
    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
};

export default AppProviders;
