import initAxios from './axios/axios.config';
import { ConfigAppType, ContexteApp } from './contexte/ContexteApp';
import { DynamicStoreProvider } from './redux/DynamicStoreContext';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './routes/ErrorBoundary';
import AntdThemeProvider from './theme/AntdThemeProvider';

const WaxantApp = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    initAxios(config.apiTimeout);

    return (
        <DynamicStoreProvider>
            <ErrorBoundary>
                <ContexteApp.Provider value={config}>
                    <AppRoutes config={config}>
                        <AntdThemeProvider theme={config.theme} langue={config.langue}>
                            {children}
                        </AntdThemeProvider>
                    </AppRoutes>
                </ContexteApp.Provider>
            </ErrorBoundary>
        </DynamicStoreProvider>
    );
};

export default WaxantApp;
