import React from 'react';
import Header from '../../components/Profile/Header';
import JobInfo from '../../components/Profile/JobInfo';
import { Main } from './style';

const userInfo = {
  name: 'JhonnD',
  image: null,
  backgroundImage: null,
  email: 'jhond@gmail.com',
  phone: '+34 666 666 666',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur magni nostrum debitis aliquid, voluptates consequatur quidem voluptas quas unde explicabo quia fugiat ad suscipit fugit nisi nulla sequi aspernatur?',
  linkedIn: 'https://www.linkedin.com/',
  github: 'https://www.github.com',
  adress: 'Palafolls, España',
  lastConexion: 'hace 2 horas',
  job: 'Fullstack sénior',
  stack: ['javascript', 'java', 'c', 'react', 'html-5', 'css-3'],
  jobInfo: {
    location: 'Barcelona, España',
    type: 'Startup',
    minSalary: 40000,
    maxSalary: 45000,
    travle: true,
    remote: true,
    inmediatStart: true
  }
};

export default function Profile() {
  return (
    <Main>
      <Header userInfo={userInfo} />
      <JobInfo userInfo={userInfo} />
    </Main>
  );
}
