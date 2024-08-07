import _ from 'lodash';
import { useSelector } from 'react-redux';
import useContexteApp from '../contexte/ContexteApp';
import { selectRole } from './MdlAuth';

const useHasRight = (action): boolean => {
    const waxantConfig = useContexteApp();
    const role = useSelector(selectRole);
    const inRole = _.includes(waxantConfig.mapDroitAcces[role], action);
    if (!inRole) {
        console.log('NO RIGHT FOR =========>' + action);
    }
    return inRole;
};

export default useHasRight;
