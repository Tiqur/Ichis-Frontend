import FlexDiv from '../FlexDiv/FlexDiv';
import styles from './Drawer.module.scss'


const Drawer = (props) => {

    return (
        <FlexDiv className={props.show ? window.outerWidth > 1050 ? styles.drawer_desktop : styles.drawer_mobile : styles.drawer_container}>

        </FlexDiv>
    )
}

export default Drawer;