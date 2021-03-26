import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const LayoutContainer = styled(FlexDiv)`
    height: auto;
    width: 80%;
    justify-content: center;
`;

const Layout = (props) => {
    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    )
};

export default Layout;