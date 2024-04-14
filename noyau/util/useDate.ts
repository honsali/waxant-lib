import dayjs from 'dayjs';
import useContexteApp from '../contexte/ContexteApp';

const useDate = () => {
    const formatDate = useContexteApp().formatDate;
    const dateAujourdhui = dayjs().format(formatDate);
    return dateAujourdhui;
};

export default useDate;
