import { useCallback } from 'react';
import util from '../../noyau/util/util';

const Vide = ({ si = true, siNul = null, siIdNul = null, style = null, children }) => {
    const getElement = useCallback(() => {
        const a = util.estVide(siNul);
        const b = util.sansId(siIdNul);
        return si && a && b ? <div></div> : <div style={style}>{children}</div>;
    }, [si, siNul, siIdNul, children]);

    return <>{getElement()}</>;
};

export default Vide;
