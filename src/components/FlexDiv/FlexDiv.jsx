import styles from './FlexDiv.module.scss';
import classNames from 'classnames';

const FlexDiv = (props) => {
    const cn = classNames.bind(styles);

    return <div className={cn(styles.flex, {
        [styles.direction_column]: props.column,
        [styles.direction_row]: props.row,
        [styles.justify_center]: props.justifyCenter,
        [styles.align_center]: props.alignCenter,
        [styles.text_center]: props.textCenter,
    },  props.className)} children={props.children}/>
};

export default FlexDiv;