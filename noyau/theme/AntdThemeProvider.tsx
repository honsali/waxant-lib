import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
// eslint-disable-next-line no-unused-vars
import 'dayjs/locale/fr';
import StyledThemeProvider from './StyledThemeProvider';

const AntdThemeProvider = ({ children, theme, locale }) => {
    dayjs.locale(locale);
    return (
        <ConfigProvider theme={theme} locale={locale}>
            <StyledThemeProvider>{children}</StyledThemeProvider>
        </ConfigProvider>
    );
};

export default AntdThemeProvider;
