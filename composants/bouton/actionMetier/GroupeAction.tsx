import { DownOutlined, MoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { createContext } from 'react';
import useI18n from '../../../noyau/i18n/useI18n';

const TypeBouttonAction = createContext({});
export { TypeBouttonAction as TypeBouttonActionProvider };

const GroupeAction = ({ listeAction = null, type = 'page', nom = null, children = null }) => {
    const { i18n } = useI18n();
    const getContent = () => {
        if (type === 'tableau') {
            return <Space>{children ? children : listeAction.map((a) => a)}</Space>;
        } else if (type === 'menu') {
            const items: MenuProps['items'] = listeAction.map((a, i) => {
                return { key: i, label: a };
            });

            return (
                <Dropdown menu={{ items }} overlayClassName="actionListDansTableau">
                    <Button>
                        <MoreOutlined />
                    </Button>
                </Dropdown>
            );
        } else if (type === 'menuPage') {
            const listeItem = listeAction.map((a, i) => {
                return { key: i, label: a };
            });

            return (
                <span className="btn-wrapper">
                    <Dropdown.Button menu={listeItem} icon={<DownOutlined />}>
                        {i18n(nom)}
                    </Dropdown.Button>
                </span>
            );
        } else {
            return <Space>{children ? children : listeAction.map((a) => a)}</Space>;
        }
    };

    return <TypeBouttonAction.Provider value={type}>{getContent()}</TypeBouttonAction.Provider>;
};

export default GroupeAction;
