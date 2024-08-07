import useContexteBouton from '../../../noyau/contexte/ContexteBouton';
import { BoutonProps } from './Bouton';
import BoutonContour from './BoutonContour';
import BoutonIcone from './BoutonIcone';
import BoutonPlein from './BoutonPlein';

const BoutonSelonContexte = (props: BoutonProps) => {
    const { type, forme } = useContexteBouton();

    if (type === 'tableau') {
        return forme === 'contour' || props.forme === 'contour' ? <BoutonContour width="100%" {...props} /> : <BoutonPlein width="100%" {...props} />;
    } else if (type === 'grandeIcone') {
        return <BoutonIcone {...props} />;
    } else if (type === 'petiteIcone') {
        return <BoutonIcone {...props} taille="mini" />;
    } else if (type === 'menu' || type === 'menuPage') {
        return forme === 'contour' || props.forme === 'contour' ? <BoutonContour {...props} /> : <BoutonPlein {...props} />;
    } else {
        return forme === 'contour' || props.forme === 'contour' ? <BoutonContour {...props} /> : <BoutonPlein {...props} />;
    }
};

export default BoutonSelonContexte;
