import { Provider as StoreProvider } from 'react-redux';
import AppAuth from './auth/AppAuth';
import initAxios from './axios/axios.config';
import { ConfigAppType, ContexteApp } from './contexte/ContexteApp';
import getStore from './redux/redux.config';
import AppPrivateRoutes from './routes/AppPrivateRoutes';
import ErrorBoundary from './routes/ErrorBoundary';
import AntdThemeProvider from './theme/AntdThemeProvider';

const WaxantPrivateApp = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    initAxios(config.apiTimeout);
    const store = getStore(config.mapReducer);

    return (
        <StoreProvider store={store}>
            <AppAuth keycloakConfig={config.keycloakConfig} mapRole={config.mapRole}>
                <ErrorBoundary>
                    <ContexteApp.Provider value={config}>
                        <AntdThemeProvider theme={config.theme} locale={config.locale}>
                            <AppPrivateRoutes config={config}>{children}</AppPrivateRoutes>
                        </AntdThemeProvider>
                    </ContexteApp.Provider>
                </ErrorBoundary>
            </AppAuth>
        </StoreProvider>
    );
};

export default WaxantPrivateApp;
