import _ from 'lodash';
import { useSelector } from 'react-redux';
import useContexteApp from '../contexte/ContexteApp';
import { selectRole } from './MdlAuth';

const useHasRight = (action): boolean => {
    const waxantConfig = useContexteApp();
    const role = useSelector(selectRole);
    const inAll = _.includes(waxantConfig.mapDroitAcces['ALL'], action);
    const inRole = _.includes(waxantConfig.mapDroitAcces[role], action);
    const hr = inAll || inRole;
    if (!hr) {
        console.log('NO RIGHT FOR =========>' + action);
    }
    return hr;
};

export default useHasRight;
