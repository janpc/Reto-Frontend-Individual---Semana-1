import * as UserTypes from './user-types';

export const UserInitialState = {
  name: 'JhonnD',
  image:
    'https://i1.wp.com/bripgroup.com/wp-content/uploads/2018/05/blank-profile-picture-973460_640.png?resize=300%2C300&ssl=1',
  backgroundImage:
    'https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300',
  email: 'jhond@gmail.com',
  phone: '+34 666 666 666',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur magni nostrum debitis aliquid, voluptates consequatur quidem voluptas quas unde explicabo quia fugiat ad suscipit fugit nisi nulla sequi aspernatur?',
  linkedIn: 'https://www.linkedin.com/',
  github: 'https://www.github.com',
  adress: { country: 'España', city: 'Palafolls' },
  lastConexion: 'hace 2 horas',
  job: 'Fullstack sénior',
  stack: ['javascript', 'java', 'c', 'react', 'html-5', 'css-3'],
  discord: '',
  portfolio: '',
  jobInfo: {
    openToWork: true,
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

const userReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case UserTypes.SET_USER_INFO: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UserTypes.SET_JOB_INFO: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
