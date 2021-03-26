import styled from 'styled-components';

const Square = styled.div`
    height: ${props => props.size};
    width: ${props => props.size};
    color: ${props => props.color};
    user-select: none;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: ${props.size / 2}px solid transparent;
    border-right: ${props.size / 2}px solid transparent;
    border-bottom: ${props.size}px solid ${props.color};
`;

const Logo = () => {
    return (
        <p></p>
    )
};

export default Logo;