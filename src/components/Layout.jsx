import styled from 'styled-components';
import FlexDiv from './FlexDiv/FlexDiv';


const LayoutContainer = styled(FlexDiv)`
    height: auto;
    justify-content: center;
`;

const InternalLayoutContainer = styled(LayoutContainer)`
    height: auto;
    width: 80%;
    justify-content: center;
`;

const Layout = (props) => {
    return (
        <LayoutContainer>
            <InternalLayoutContainer>
                {props.children}
            </InternalLayoutContainer>
        </LayoutContainer>
    )
};

export default Layout;
