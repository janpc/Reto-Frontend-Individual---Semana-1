import React from 'react';
import HardSoftSkills from '../../components/Profile/HardSoftSkills';
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
    travel: true,
    remote: true,
    inmediatStart: true
  },
  hardSkills: [
    { name: 'javascript', points: 1200 },
    { name: 'c', points: 200 },
    { name: 'react', points: 800 },
    { name: 'html-5', points: 950 },
    { name: 'css-3', points: 1000 },
    { name: 'java', points: 250 }
  ],
  softSkills: [
    { name: 'Teamwork', points: 4, total: 5 },
    { name: 'Capacidad analitica', points: 5, total: 5 },
    { name: 'Comunicación', points: 3, total: 5 },
    { name: 'Resolución de problemas', points: 5, total: 5 },
    { name: 'Creativity', points: 4, total: 5 }
  ]
};

export default function Profile() {
  return (
    <Main>
      <Header userInfo={userInfo} />
      <JobInfo userInfo={userInfo} />
      <HardSoftSkills userInfo={userInfo} />
    </Main>
  );
}
