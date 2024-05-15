import AppAuth from './auth/AppAuth';
import initAxios from './axios/axios.config';
import { ConfigAppType, ContexteAppProvider } from './contexte/ContexteApp';
import { ContexteI18nProvider } from './i18n/ContexteI18n';
import { DynamicStoreProvider } from './redux/DynamicStoreContext';
import AppPrivateRoutes from './routes/AppPrivateRoutes';
import ErrorBoundary from './routes/ErrorBoundary';
import AntdThemeProvider from './theme/AntdThemeProvider';

const WaxantPrivateApp = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    initAxios(config.apiTimeout);

    return (
        <DynamicStoreProvider>
            <AppAuth keycloakConfig={config.keycloakConfig} mapRole={config.mapRole}>
                <ErrorBoundary>
                    <ContexteAppProvider config={config}>
                        <AntdThemeProvider theme={config.theme} langue={config.langue}>
                            <ContexteI18nProvider config={config}>
                                <AppPrivateRoutes config={config}>{children}</AppPrivateRoutes>
                            </ContexteI18nProvider>
                        </AntdThemeProvider>
                    </ContexteAppProvider>
                </ErrorBoundary>
            </AppAuth>
        </DynamicStoreProvider>
    );
};

export default WaxantPrivateApp;
