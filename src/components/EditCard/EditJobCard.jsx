import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJobInfo } from '../../redux/user/user-actions';
import EditCard from './EditCard';

import { Title, Submit, Form } from './style';
import { InlineCheckbox, FullInput } from './EditOtherComponents';

export default function EditJobCard({ closeForm, jobInfo }) {
  const dispatch = useDispatch();

  const [isOpenToWork, setIsOpenToWork] = useState(jobInfo.openToWork);
  const [isOpenToRemote, setIsOpenToRemote] = useState(jobInfo.remote);
  const [isOpenToTravel, setIsOpenToTravel] = useState(jobInfo.travel);
  const [isOpenToImmediate, setIsOpenToImmediate] = useState(
    jobInfo.inmediatStart
  );

  const [job, setJob] = useState(jobInfo.job);
  const [location, setLocation] = useState(jobInfo.location);
  const [type, setType] = useState(jobInfo.type);
  const [minSalary, setMinSalary] = useState(jobInfo.minSalary);
  const [maxSalary, setMaxSalary] = useState(jobInfo.maxSalary);

  function handleSubmit(e) {
    e.preventDefault();

    const info = {
      job,
      jobInfo: {
        location,
        type,
        minSalary,
        maxSalary,
        openToWork: isOpenToWork,
        remote: isOpenToRemote,
        travel: isOpenToTravel,
        inmediatStart: isOpenToImmediate
      }
    };

    dispatch(setJobInfo(info));
    closeForm();
  }
  return (
    <EditCard closeForm={closeForm}>
      <Form onSubmit={handleSubmit}>
        <Title>Índicanos si estás abierto a ofertas de trabajo</Title>
        <InlineCheckbox
          text="Estoy abierto a ofertas de trabajo:"
          state={isOpenToWork}
          setState={setIsOpenToWork}
        />
        {isOpenToWork && (
          <>
            <FullInput
              text="Puesto de trabajo"
              type="text"
              value={job}
              setValue={setJob}
            />
            <FullInput
              text="Donde"
              type="text"
              value={location}
              setValue={setLocation}
            />
            <FullInput
              text="Tipo de Empresa"
              type="text"
              value={type}
              setValue={setType}
            />
            <FullInput
              text="$ Salario minimo"
              type="number"
              value={minSalary}
              setValue={setMinSalary}
            />
            <FullInput
              text="$ Salario optimo"
              type="number"
              value={maxSalary}
              setValue={setMaxSalary}
            />
            <InlineCheckbox
              text="Trabajar en remoto:"
              state={isOpenToRemote}
              setState={setIsOpenToRemote}
            />
            <InlineCheckbox
              text="Disponible para viajar: "
              state={isOpenToTravel}
              setState={setIsOpenToTravel}
            />
            <InlineCheckbox
              text="Incorporación inmediata: "
              state={isOpenToImmediate}
              setState={setIsOpenToImmediate}
            />
            <Submit type="submit" value="Guardar" />
          </>
        )}
      </Form>
    </EditCard>
  );
}
