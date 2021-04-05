import styles from './CenterVertically.module.scss';
import classNames from 'classnames';


const CenterVertically = (props) => {
    const cn = classNames.bind(styles);

    return (
        <div className={cn(styles.container)}>
            {props.children}
        </div>
    )
};

export default CenterVertically;
