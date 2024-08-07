import { App, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
// eslint-disable-next-line no-unused-vars
import en from 'antd/locale/en_US';
import fr from 'antd/locale/fr_FR';
import 'dayjs/locale/fr';
import StyledThemeProvider from './StyledThemeProvider';

const antdLocaleMap = { fr: fr, en: en };
const AntdThemeProvider = ({ children, theme, langue }) => {
    dayjs.locale(langue);
    return (
        <App>
            <ConfigProvider theme={theme} locale={antdLocaleMap[langue]}>
                <StyledThemeProvider>{children}</StyledThemeProvider>
            </ConfigProvider>
        </App>
    );
};

export default AntdThemeProvider;
