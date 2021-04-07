import styles from './DashboardPage.module.scss';
import classNames from 'classnames';
import NavBar from '../../components/NavBar';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import Layout from '../../components/Layout';
import ChatBox from '../../components/ChatBox/ChatBox';

const DashboardPage = () => {
  const cn = classNames.bind(styles);

  return (
    <Layout>
        <NavBar />
      <div className={cn(styles.page_grid_layout)}>
        <VideoContainer />
        <ChatBox />
      </div>
    </Layout>
  )
}

export default DashboardPage;
