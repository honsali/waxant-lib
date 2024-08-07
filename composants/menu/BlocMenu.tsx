import styled from 'styled-components';
import MenuModule from './MenuModule';

const Composant = styled.div`
    background-color: transparent;
    .ant-menu-submenu-arrow {
        display: none;
    }
    .ant-menu.ant-menu-inline-collapsed {
        .ant-menu-item,
        .ant-menu-submenu {
            .anticon.ant-menu-item-icon {
                font-size: 20px;
                margin-left: 10px;
                line-height: 60px;
            }
        }
    }
    .ant-menu-submenu-open.ant-menu-submenu-selected > div > .ant-menu-title-content {
        a {
            color: ${(props) => props.theme.token.colorPrimary};
        }
    }
`;

const BlocMenu = ({ ouvert }) => {
    return (
        <Composant>
            <MenuModule ouvert={ouvert} />
        </Composant>
    );
};

export default BlocMenu;
