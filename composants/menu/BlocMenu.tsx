import styled from 'styled-components';
import MenuModule from './MenuModule';

const Composant = styled.div`
    height: calc(100vh);
    position: relative;
    z-index: 500;

    .ant-menu {
        background: #404040;

        .ant-menu-item {
            background: #404040;
            margin: 0;
            width: 100%;
            .ant-menu-title-content {
                padding-top: 4px;
            }
            .carre {
                fill: #aaa;
                height: 5px;
                width: 5px;
                margin: 0 0 0 4px;
            }
        }

        .ant-menu-submenu-arrow {
            display: none;
        }

        .ant-menu-item.ant-menu-item-selected {
            background-color: #333 !important;
            color: ${(props) => props.theme.token.colorPrimary};
            font-weight: bold;
            .anticon svg {
                stroke-width: 3px;
                fill: ${(props) => props.theme.token.colorPrimary} !important;
                stroke: ${(props) => props.theme.token.colorPrimary};
            }
        }

        .ant-menu-item.ant-menu-item-active {
            background-color: rgba(${(props) => props.theme.token.colorPrimary}, 0.4) !important;
        }

        .ant-menu-item.ant-menu-item-active.ant-menu-item-selected {
            background-color: #333 !important;
        }
        .ant-menu.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-item-icon,
        .ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu .ant-menu-item-icon {
            margin-top: 2px;
            font-size: 26px;
        }

        .ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
        .ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
            border-radius: 4px;
            margin: 16px 24px 16px 20px;
            padding: 0 0 0 5px !important;
        }

        .ant-menu.ant-menu-sub.ant-menu-inline > .ant-menu-item {
            background-color: #3a3a3a;
        }
    }
`;

const BlocMenu = () => {
    return (
        <Composant>
            <MenuModule />
        </Composant>
    );
};

export default BlocMenu;
