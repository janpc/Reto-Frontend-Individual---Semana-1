import { Title, Info, ExtraInfo, Separation } from './style';

import { EditPosition } from '../../../style/main';
import { Card } from '../../../style/main';

import {
  Location,
  Edit,
  JobType,
  Salary,
  Travel,
  Remote,
  Time
} from '../../../icons';

export default function JobInfo({ userInfo }) {
  const {
    name,
    jobInfo: {
      location,
      type,
      minSalary,
      maxSalary,
      travel,
      remote,
      inmediatStart
    }
  } = userInfo;

  return (
    <Card>
      <EditPosition top="0.5rem" right="0.5rem">
        <Edit size="16px" />
      </EditPosition>

      <Title>{`Sobre el puesto que busca ${name}`}</Title>
      <Info>
        <div>
          <Location size="22" />
          <span>{location}</span>
        </div>
        <div>
          <JobType size="22" />
          <span>{type}</span>
        </div>
        <div>
          <Salary size="22" />
          <span>{`${minSalary} a ${maxSalary} €/a`}</span>
        </div>
      </Info>
      <Separation />
      {(travel || remote || inmediatStart) && (
        <ExtraInfo>
          {travel && (
            <div>
              <Travel size="26" />
              <span>Disponibilidad para viajar</span>
            </div>
          )}

          {remote && (
            <div>
              <Remote size="26" />
              <span>Disponibilidad para trabajar en remoto</span>
            </div>
          )}
          {inmediatStart && (
            <div>
              <Time size="26" />
              <span>Incorporación Immediata</span>
            </div>
          )}
        </ExtraInfo>
      )}
    </Card>
  );
}
