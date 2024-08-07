import useContexteBouton from '../../../noyau/contexte/ContexteBouton';
import ActionNormale from '../actionBase/ActionNormale';
import BoutonIcone from '../boutonBase/BoutonIcone';

const ActionDansGroupe = (props) => {
    const { type } = useContexteBouton();

    if (type === 'grandeIcone') {
        return <BoutonIcone {...props} />;
    } else if (type === 'menu' || type === 'menuPage') {
        return <ActionNormale {...props} type="noBorder" />;
    } else {
        return <ActionNormale {...props} />;
    }
};

export default ActionDansGroupe;
