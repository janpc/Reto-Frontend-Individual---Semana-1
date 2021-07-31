const Github = ({ size = '32', color = '#FFFFFF' }) => (
  <svg
    class="octicon octicon-mark-github v-align-middle"
    height={size}
    viewBox="0 0 16 16"
    version="1.1"
    width={size}
    aria-hidden="true"
  >
    <path
      fill={color}
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

const Linkedin = ({ size = '32', color = '#FFFFFF' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 34 34"
    class="global-nav__logo"
  >
    <g>
      <path
        d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
        fill={color}
      ></path>
    </g>
  </svg>
);

const Location = ({ size = '32', color = '#FFFFFF' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 71 84"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M35.4997 0.333313H35.6387C55.1653 0.410047 70.9929 16.3415 70.9161 35.843V36.2303C70.6527 50.1667 62.2742 61.7316 55.2934 68.9775C53.3067 71.0494 51.1919 73.0371 49.0113 74.8934C47.7052 76.0078 45.7441 75.8544 44.6282 74.5499C43.5123 73.2418 43.6696 71.2832 44.9758 70.1687C46.9954 68.4477 48.9601 66.5988 50.8078 64.6731C57.0203 58.2274 64.4694 48.0364 64.6963 36.117C64.7585 19.7434 51.7151 6.60725 35.6131 6.54147H35.4997C19.4526 6.54147 6.36533 19.5498 6.30313 35.5872C6.57754 43.5091 9.25572 51.04 14.0523 57.3578C19.6501 64.812 28.142 72.7046 36.2132 77.9591C37.6547 78.8945 38.0608 80.8165 37.1205 82.2562C36.5278 83.1697 35.529 83.6666 34.5118 83.6666C33.9301 83.6666 33.3447 83.5059 32.8179 83.1624C24.176 77.5389 15.0804 69.0835 9.08376 61.0995C3.51885 53.7659 0.40528 45.0145 0.083313 35.8028C0.160146 16.1077 16.0353 0.333313 35.4997 0.333313ZM28.23 36.2252C28.23 40.219 31.4862 43.4748 35.4889 43.4748C39.4915 43.4748 42.7478 40.219 42.7478 36.2252C42.7478 32.2277 39.4915 28.972 35.4889 28.972C33.7729 28.972 32.379 27.5835 32.379 25.8697C32.379 24.1524 33.7729 22.7638 35.4889 22.7638C42.9197 22.7638 48.9676 28.8003 48.9676 36.2252C48.9676 43.6465 42.9197 49.6829 35.4889 49.6829C28.058 49.6829 22.0102 43.6465 22.0102 36.2252C22.0102 34.5078 23.4041 33.1193 25.1201 33.1193C26.836 33.1193 28.23 34.5078 28.23 36.2252Z"
      fill={color}
    />
  </svg>
);

const Edit = ({ size = '32', color = '#FFFFFF' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 75 76"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M60.9261 8.3662C63.5534 10.4487 65.3497 13.1874 65.9774 16.0836C66.6786 19.3167 65.9038 22.5979 63.8002 25.3103L27.9217 71.5796C26.1081 73.9202 23.3812 75.2852 20.4335 75.3246L6.59113 75.4996H6.55217C5.04154 75.4996 3.73002 74.4496 3.38808 72.9621L0.254285 59.3386C-0.412295 56.438 0.245629 53.4324 2.06357 51.0918L6.77292 45.015C7.87667 43.5888 9.9197 43.3351 11.3308 44.4594C12.7418 45.575 12.9886 47.64 11.8805 49.0662L7.17114 55.143C6.57381 55.913 6.35739 56.8974 6.57814 57.8511L9.11894 68.9022L20.3512 68.7622C21.3165 68.749 22.2125 68.3028 22.8098 67.5328L58.6883 21.2635C59.6059 20.0823 59.9219 18.8135 59.6362 17.4836C59.3289 16.0792 58.368 14.6749 56.9223 13.533L50.9057 8.75995C48.577 6.92248 45.2917 5.97749 43.0496 8.87807L38.31 14.9855L45.8328 21.0841C47.2309 22.2129 47.456 24.2822 46.3349 25.6909C45.6943 26.5047 44.7507 26.9247 43.7984 26.9247C43.0886 26.9247 42.37 26.6884 41.7727 26.2028L34.3061 20.1523L22.0307 35.9852C20.9226 37.4114 18.8839 37.6695 17.4685 36.5408C16.0618 35.4252 15.815 33.3602 16.9188 31.934L37.9377 4.82688C42.0151 -0.440538 49.157 -0.95678 54.9095 3.59753L60.9261 8.3662ZM44.1512 68.9375H71.7537C73.5457 68.9375 75.0001 70.4075 75.0001 72.2187C75.0001 74.0299 73.5457 75.4999 71.7537 75.4999H44.1512C42.3549 75.4999 40.9049 74.0299 40.9049 72.2187C40.9049 70.4075 42.3549 68.9375 44.1512 68.9375Z"
      fill="white"
    />
  </svg>
);
export { Github, Linkedin, Location, Edit };
