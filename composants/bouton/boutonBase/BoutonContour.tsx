import { BoutonProps } from './Bouton';
import BoutonContourNeutre from './BoutonContourNeutre';
import BoutonContourPrimaire from './BoutonContourPrimaire';
import BoutonContourSecondaire from './BoutonContourSecondaire';

const BoutonContour = (props: BoutonProps) => {
    if (props.inactif) {
        return <BoutonContourNeutre {...props} />;
    } else if (props.couleur === 'secondaire') {
        return <BoutonContourSecondaire {...props} />;
    } else {
        return <BoutonContourPrimaire {...props} />;
    }
};

export default BoutonContour;
