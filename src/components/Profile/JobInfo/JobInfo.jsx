import {} from './style';

import { EditPosition } from '../../../style/main';
import { Card } from '../../../style/main';

import { Location, Edit } from '../../../icons';

export default function JobInfo({ userInfo }) {
  const {
    name,
    jobInfo: {
      location,
      type,
      minSalary,
      maxSalary,
      travle,
      remote,
      inmediatStart
    }
  } = userInfo;

  return (
    <Card>
      <EditPosition top="0.5rem" right="0.5rem">
        <Edit size="16px" />
      </EditPosition>
    </Card>
  );
}
