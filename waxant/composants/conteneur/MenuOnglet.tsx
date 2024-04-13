import Icon from '@ant-design/icons';
import { Avatar, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useI18n from '../../noyau/i18n/useI18n';

const Composant = styled(Tabs)`
    &.menuOnglet {
        .ant-tabs-nav {
            margin: 0;
            .ant-tabs-nav-list {
                background: #fff;
                .ant-tabs-tab {
                    padding: 8px 20px 8px 20px;
                    border-left: 1px solid #ddd;
                    border-top: 1px solid #ddd;
                    border-bottom: 1px solid #ddd;
                    font-weight: bold;
                    color: #777;
                    margin: 0;
                    &:hover {
                        color: ${(props) => props.theme.token.colorPrimary};
                    }
                    &:first-child {
                        border-top-left-radius: 6px;
                    }
                }

                &:last-child {
                    border-top-right-radius: 6px;
                    border-right: 1px solid #ddd;
                }
            }
            .ant-tabs-ink-bar {
                height: 3px;
            }
        }
        .ant-tabs-content-holder {
            padding: 30px 20px 20px 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 6px 6px;
            //border-top:1px solid #ddd;
        }
    }
`;

const MenuOnglet = ({ ongletActif = null, siOngletChange = null, children }) => {
    const i18n = useI18n();
    const [activeKey, setActiveKey] = useState();

    const attributs = {} as any;
    const onTabClickActions = {};
    // attributs.defaultActiveKey = children[0].key;

    useEffect(() => {
        if (ongletActif) {
            setActiveKey(ongletActif);
        }
    }, [ongletActif]);

    const getTabs = () => {
        const array = Array.isArray(children) ? children : [children];
        const tabs = array.map((c) => {
            onTabClickActions[c.key] = c.props.actionClick;
            const tab = c.props.entete ? (
                c.props.entete
            ) : (
                <span>
                    {c.props.icon && <Avatar className="tab-title" shape="circle" src={<Icon component={c.props.icon} />} size={18} />}
                    {i18n.libelle('onglet.' + c.key)}
                </span>
            );
            return { label: tab, key: c.key, children: c.props.children };
        });
        return tabs;
    };

    const handleChange = (selectedkey) => {
        setActiveKey(selectedkey);

        if (siOngletChange) {
            siOngletChange(selectedkey);
        }

        const action = onTabClickActions[selectedkey];
        if (action) {
            action();
        }
    };

    return <Composant className="menuOnglet" activeKey={activeKey} animated={{ inkBar: false }} {...attributs} onTabClick={handleChange} items={getTabs()} />;
};

export default MenuOnglet;
