import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { selectRole } from '../auth/MdlAuth';
import useContexteApp from '../contexte/ContexteApp';

const useGoToModule = () => {
    const navigate = useNavigate();
    const params = useParams();
    const config = useContexteApp();
    const role = useSelector(selectRole);

    const parse = (nomModule, listeModule) => {
        for (const module of listeModule) {
            if (module.key === nomModule) {
                return module.index;
            } else if (module.listeSousModule?.length) {
                const result = parse(nomModule, module.listeSousModule);
                if (result) {
                    return result;
                }
            }
        }
    };

    return (nomModule: string, args?: any) => {
        const index = parse(nomModule, config.mapDomaine[role]?.listeModule);
        index && navigate(index.toPath({ ...args, ...params }));
    };
};

export default useGoToModule;
