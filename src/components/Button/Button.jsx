import FlexDiv from '../../components/FlexDiv';
import styles from './Button.module.scss';


const Button = (props) => {
    return (
        <FlexDiv className={props.isMain ? styles.main_button : styles.button} style={props.style} children={props.children} onClick={props.function}/>
    );
};

export default Button;