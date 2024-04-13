import { useContext } from 'react';
import ActionNormale from '../actionBase/ActionNormale';
import BoutonIcone from '../boutonBase/BoutonIcone';
import { TypeBouttonActionProvider } from './GroupeAction';

const ActionDansGroupe = (props) => {
    const type = useContext(TypeBouttonActionProvider);

    if (type === 'tableau') {
        return <BoutonIcone {...props} />;
    } else if (type === 'menu' || type === 'menuPage') {
        return <ActionNormale {...props} type="noBorder" />;
    } else {
        return <ActionNormale {...props} />;
    }
};

export default ActionDansGroupe;
