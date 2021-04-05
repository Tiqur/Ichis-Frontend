import styles from './DashboardPage.module.scss';
import classNames from 'classnames';
import NavBar from '../../components/NavBar';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import Layout from '../../components/Layout';

const DashboardPage = () => {
  const cn = classNames.bind(styles);

  return (
    <Layout>
      <NavBar />
      <VideoContainer />
    </Layout>
  )
}

export default DashboardPage;
