import { useSelector } from 'react-redux';

import { userSelector } from '../../redux/user/user-selectors';

import HardSoftSkills from '../../components/Profile/HardSoftSkills';
import Header from '../../components/Profile/Header';
import JobInfo from '../../components/Profile/JobInfo';

import { Main } from './style';

export default function Profile() {
  const userInfo = useSelector(userSelector);

  return (
    <Main>
      <Header userInfo={userInfo} />
      <JobInfo userInfo={userInfo} />
      <HardSoftSkills userInfo={userInfo} />
    </Main>
  );
}
