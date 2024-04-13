import { Provider as StoreProvider } from 'react-redux';
import initAxios from './axios/axios.config';
import { ConfigAppType, ContexteApp } from './contexte/ContexteApp';
import getStore from './redux/redux.config';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './routes/ErrorBoundary';
import AntdThemeProvider from './theme/AntdThemeProvider';

const WaxantApp = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    initAxios(config.apiTimeout);
    const store = getStore(config.mapReducer);

    return (
        <StoreProvider store={store}>
            <ErrorBoundary>
                <ContexteApp.Provider value={config}>
                    <AppRoutes config={config}>
                        <AntdThemeProvider theme={config.theme} locale={config.locale}>
                            {children}
                        </AntdThemeProvider>
                    </AppRoutes>
                </ContexteApp.Provider>
            </ErrorBoundary>
        </StoreProvider>
    );
};

export default WaxantApp;
