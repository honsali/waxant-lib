import { Spin } from 'antd';
import _ from 'lodash';
import { ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
// import { selectActionEnCours, useI18n } from 'waxant';

const fadeLeftAnimation = keyframes`
    0% {
        opacity: 1;
        transform: none;
    }
    50% {
        opacity: 0;
        transform: none;
    }
    75% {
        opacity: 0;
        transform: translate3d(-20px, -20px, 0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`;
const fadeRightAnimation = keyframes`
    0% {
        opacity: 1;
        transform: none;
    }
    50% {
        opacity: 0;
        transform: none;
    }
    75% {
        opacity: 0;
        transform: translate3d(20px, -20px, 0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`;
const fadeBottomAnimation = keyframes`
    0% {
        opacity: 1;
        transform: none;
    }
    50% {
        opacity: 0;
        transform: none;
    }
        60% {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
        }
        95% {
            opacity: 1;
            transform: none;
        }
        100% {
        }
`;
const fadeTopAnimation = keyframes`
    0% {
        opacity: 1;
        transform: none;
    }
    50% {
        opacity: 0;
        transform: none;
    }
        60% {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
        }
        95% {
            opacity: 1;
            transform: none;
        }
        100% {
        }
`;
const blinkPointAnimation = keyframes`
        0% {
            fill: #333;
        }
        50% {
            fill: transparent;
        }
        86% {
            fill: transparent;
        }
        89% {
            fill: #333;
        }
        91% {
            fill: transparent;
        }
        94% {
            fill: #333;
        }
`;

const Composant = styled(Spin)`
    padding: 10px;
    cursor: pointer;

    .wrap_spinner {
        position: relative;
        margin-top: 200px;
        background-color: #eee;
        border: 2px solid #ddd;
        border-radius: 8px;
    }

    .svg_spinner {
        position: absolute;
        & .fadeleft {
            animation: ${fadeLeftAnimation} 3s ease-in-out infinite;
        }
        & .faderight {
            animation: ${fadeRightAnimation} 3s ease-in-out infinite;
        }
        & .fadebottom {
            animation: ${fadeBottomAnimation} 3s ease-in-out infinite;
        }
        & .fadetop {
            animation: ${fadeTopAnimation} 3s ease-in-out infinite;
        }
        & .blinkpoint {
            animation: ${blinkPointAnimation} 3s ease-in-out infinite;
        }
    }

    .sp1 {
        top: 35px;
        left: -133px;
        width: 266px;
        height: 70px;
    }
    .sp2 {
        top: 130px;
        left: -125px;
        width: 400px;
        height: 200px;
    }
    .wafa_sp1 {
        font-family: 'ROBOTO';
        font-size: 20px;
        font-weight: normal;
        fill: #777;
        letter-spacing: 8.4px;
    }
    .wafa_sp2 {
        font-family: 'ROBOTO';
        font-size: 14px;
        font-weight: bold;
        fill: #777;
    }
`;

const Sablier = ({ children }) => {
    const actionEnCours = 'loading';

    const enAction = useCallback(() => {
        let test = false;

        for (const label of _.values(actionEnCours)) {
            if (!_.isNil(label)) {
                test = true;
                window.scrollTo(0, 0);
                break;
            }
        }

        return test;
    }, [actionEnCours]);

    const spinner = () => (
        <div>
            <div className="wrap_spinner">
                <svg className="svg_spinner sp1" viewBox="0 0 380 100">
                    <path d="M90,40 v45 q0,5 -5,5 h-70 q-5,0 -5,-5 v-45 L50,70 z" fill="#62b01e" className="fadebottom" />
                    <path d="M10,40 v-25 q0,-5 5,-5 h70 q5,0 5,5 v25   L50,70   z" fill="orange" className="fadetop" />
                    <path d="M10,40 h10 L50,61 L50,70 L10,40 z" fill="#333" className="fadeleft" />
                    <path d="M90,40 h-10 L50,61 L50,70 L90,40 z" fill="#333" className="faderight" />
                    <rect x="45" y="30" width="10" height="10" fill="#333" className="blinkpoint" />
                    <text x="110" y="57" fontFamily="ROBOTO" fontSize="54" fontWeight="bold" fill="#62b01e">
                        SIN
                    </text>
                    <text x="198" y="57" fontFamily="ROBOTO" fontSize="54" fontWeight="normal" fill="orange">
                        CORPO
                    </text>
                    <text x="114" y="82" className="wafa_sp1">
                        wafa assurance
                    </text>
                </svg>
                <svg className="svg_spinner sp2" viewBox="0 0 400 200">
                    <text x="0" y={30} className="wafa_sp2">
                        {''}
                    </text>
                </svg>
            </div>
        </div>
    );

    return (
        <Composant spinning={enAction()} indicator={spinner()}>
            {children}
        </Composant>
    );
};

export default Sablier;
