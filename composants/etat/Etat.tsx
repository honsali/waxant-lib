import {Row, Space} from 'antd';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import useI18n from '../../noyau/i18n/useI18n';
import util from '../../noyau/util/util';
import OptionNon from '../widget/OptionNon';
import OptionOui from '../widget/OptionOui';
import { SLibelle, SValeur, SValeurNoWrap } from './styles';

const labelWidthList = { 1: 10, 2: 5, 3: 3 };
const textWidthList = { 1: 14, 2: 7, 3: 5 };

const Etat = ({ modele = null, nombreColonne = 2, afficherLesVide = true, children }) => {
    const { i18n } = useI18n();
    const [listeElement, setListeElement] = useState([]);
    const [nbrCol, setNbrCol] = useState(nombreColonne);

    const getLibelle = useCallback((cprops, propNom): any => {
        if (cprops.libelle) {
            return cprops.libelle;
        } else if (cprops[propNom]) {
            const i = cprops[propNom].indexOf('.');
            if (i > 0) {
                const names = cprops[propNom].split('.');
                const entityName = names[names.length - 2];
                const fieldName = names[names.length - 1];
                if (fieldName === 'code') {
                    return i18n(entityName); //'Code ' + i18n(entityName);
                } else if (fieldName === 'libelle') {
                    return i18n(entityName);
                }
                return i18n(fieldName);
            }
            return i18n(cprops[propNom]);
        } else {
            return 'ND';
        }
    }, []);

    const getTexte = useCallback((m, cprops, propNom): any => {
        const dflt = cprops.valeurParDefaut ? cprops.valeurParDefaut : '-';
        if (cprops.texte) {
            return cprops.texte;
        } else if (cprops[propNom] && util.nonVide(m)) {
            const a = _.get(m, cprops[propNom]);
            return util.nonNul(a) ? a : dflt;
        } else {
            return dflt;
        }
    }, []);

    useEffect(() => {
        let rowliste = [];
        let rowIndex = 0;
        const allliste = [];
        if (util.nonVide(modele)) {
            React.Children.forEach(children, (c) => {
                let key = c.props.nom;
                let libelle = getLibelle(c.props, 'nom');
                let text = getTexte(modele, c.props, 'nom');
                if (c.props.code) {
                    key = c.props.code;
                    libelle = getLibelle(c.props, 'code');
                    text = i18n(getTexte(modele, c.props, 'code'));
                } else if (c.props.reference) {
                    key = c.props.reference;
                    libelle = getLibelle(c.props, 'reference');
                    text = getTexte(modele, c.props, 'reference');
                    text = util.nonNul(text?.libelle) ? text.libelle : '-';
                } else if (c.props.ouiNon) {
                    key = c.props.ouiNon;
                    libelle = getLibelle(c.props, 'ouiNon');
                    text = '' + getTexte(modele, c.props, 'ouiNon');
                    text = 'true' === text || 'OUI' === text.toUpperCase() ? <OptionOui /> : <OptionNon />;
                } else if (c.props.numerique) {
                    key = c.props.numerique;
                    libelle = getLibelle(c.props, 'numerique');
                    let n = getTexte(modele, c.props, 'numerique');
                    n = n ? n.toFixed(2) : 0;
                    text = '' + n;
                } else if (c.props.vide) {
                    key = 'vide' + _.uniqueId();
                    libelle = <span>&nbsp;</span>;
                    text = <span>&nbsp;</span>;
                } else if (c.props.liste) {
                    text = _.filter(c.props.liste, { code: getTexte(modele, c.props, 'nom') })[0]?.libelle;
                } else if (c.props.police) {
                    key = c.props.police;
                    libelle = getLibelle(c.props, 'police');
                    const p = _.get(modele, c.props.police);
                    if (util.nonVide(p)) {
                        text = p['categoriePolice'] + '/' + p['numeroPolice'];
                    } else {
                        text = '-';
                    }
                }
                if ((afficherLesVide || text !== '-') && (util.estNul(c.props.invisible) || !c.props.invisible)) {
                    const labelWidth = labelWidthList[nbrCol];
                    const textWidth = c.props.surTouteLaLigne ? 24 - labelWidth : textWidthList[nbrCol];
                    rowliste.push(
                        <SLibelle span={labelWidth} key={'lib' + key}>
                            {libelle}
                        </SLibelle>
                    );
                    if (c.props.actionModifier) {
                        rowliste.push(
                            <SValeur span={textWidth} key={'val' + key}>
                                <Space>
                                    <span>{text}</span>
                                    <span>{c.props.actionModifier}</span>
                                </Space>
                            </SValeur>
                        );
                    } else if (util.estVide(c.props.nowrap)) {
                        rowliste.push(
                            <SValeur span={textWidth} key={'val' + key}>
                                {text}
                            </SValeur>
                        );
                    } else {
                        rowliste.push(
                            <SValeurNoWrap span={14} key={'val' + key}>
                                {text}
                            </SValeurNoWrap>
                        );
                    }
                    if (c.props.seulDansLaLigne) {
                        for (let j = 0; j < nbrCol - 1; j++) {
                            rowliste.push(
                                <SLibelle span={labelWidth} key={'libVid' + key}>
                                    &nbsp;
                                </SLibelle>
                            );
                            rowliste.push(
                                <SValeur span={textWidth} key={'valVid' + key}>
                                    &nbsp;
                                </SValeur>
                            );
                        }
                    }
                }
                if (rowliste.length > 0 && (rowliste.length / 2) % nbrCol === 0) {
                    allliste.push(<Row key={rowIndex++}>{rowliste}</Row>);
                    rowliste = [];
                }
            });
        }
        if (rowliste.length > 0) {
            allliste.push(<Row key={'etat_0'}>{rowliste}</Row>);
        }
        setListeElement(allliste);
    }, [children, modele, nbrCol, getLibelle, getTexte]);

    return <div key="wrapper_div">{listeElement}</div>;
};

export default Etat;
