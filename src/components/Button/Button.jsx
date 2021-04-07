import FlexDiv from '../FlexDiv/FlexDiv';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => {
    const cn = classNames.bind(styles);

    return (
        <FlexDiv className={cn(styles.button, {[styles.main_button]: props.isMain}, props.className)} children={props.children} onClick={props.function}/>
    );
};

export default Button;
