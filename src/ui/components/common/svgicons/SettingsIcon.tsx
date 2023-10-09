import { SvgContainer, SvgIconProps } from '../SvgIcon';

const SettingsIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  return (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_498_1003)'>
          <path
            d='M11.0001 13.75C12.5189 13.75 13.7501 12.5187 13.7501 11C13.7501 9.48118 12.5189 8.24996 11.0001 8.24996C9.4813 8.24996 8.25008 9.48118 8.25008 11C8.25008 12.5187 9.4813 13.75 11.0001 13.75Z'
            stroke='#8B8B93'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M17.7834 13.75C17.6614 14.0264 17.625 14.3331 17.6789 14.6305C17.7328 14.9279 17.8746 15.2023 18.0859 15.4183L18.1409 15.4733C18.3114 15.6436 18.4466 15.8458 18.5389 16.0683C18.6311 16.2909 18.6786 16.5294 18.6786 16.7704C18.6786 17.0113 18.6311 17.2499 18.5389 17.4724C18.4466 17.695 18.3114 17.8972 18.1409 18.0675C17.9706 18.2379 17.7685 18.3731 17.5459 18.4654C17.3233 18.5577 17.0848 18.6052 16.8438 18.6052C16.6029 18.6052 16.3643 18.5577 16.1418 18.4654C15.9192 18.3731 15.717 18.2379 15.5467 18.0675L15.4917 18.0125C15.2757 17.8011 15.0013 17.6594 14.704 17.6055C14.4066 17.5515 14.0999 17.5879 13.8234 17.71C13.5523 17.8262 13.3211 18.0191 13.1582 18.265C12.9953 18.511 12.9079 18.7992 12.9067 19.0941V19.25C12.9067 19.7362 12.7136 20.2025 12.3698 20.5463C12.026 20.8901 11.5596 21.0833 11.0734 21.0833C10.5872 21.0833 10.1209 20.8901 9.77705 20.5463C9.43324 20.2025 9.24008 19.7362 9.24008 19.25V19.1675C9.23298 18.864 9.13477 18.5698 8.95822 18.3229C8.78166 18.0761 8.53492 17.8881 8.25008 17.7833C7.9736 17.6613 7.6669 17.6249 7.36954 17.6788C7.07218 17.7327 6.79779 17.8745 6.58175 18.0858L6.52675 18.1408C6.35648 18.3113 6.15429 18.4465 5.93172 18.5387C5.70916 18.631 5.47059 18.6785 5.22967 18.6785C4.98874 18.6785 4.75017 18.631 4.52761 18.5387C4.30504 18.4465 4.10285 18.3113 3.93258 18.1408C3.76212 17.9705 3.6269 17.7683 3.53464 17.5458C3.44238 17.3232 3.39489 17.0846 3.39489 16.8437C3.39489 16.6028 3.44238 16.3642 3.53464 16.1417C3.6269 15.9191 3.76212 15.7169 3.93258 15.5466L3.98758 15.4916C4.19891 15.2756 4.34067 15.0012 4.39459 14.7038C4.4485 14.4065 4.4121 14.0998 4.29008 13.8233C4.17388 13.5522 3.98094 13.3209 3.73501 13.1581C3.48908 12.9952 3.20089 12.9078 2.90591 12.9066H2.75008C2.26385 12.9066 1.79754 12.7135 1.45372 12.3697C1.1099 12.0258 0.916748 11.5595 0.916748 11.0733C0.916748 10.5871 1.1099 10.1207 1.45372 9.77693C1.79754 9.43311 2.26385 9.23996 2.75008 9.23996H2.83258C3.13599 9.23286 3.43025 9.13465 3.67711 8.95809C3.92396 8.78154 4.11199 8.5348 4.21675 8.24996C4.33877 7.97348 4.37517 7.66678 4.32125 7.36942C4.26734 7.07206 4.12557 6.79767 3.91425 6.58163L3.85925 6.52663C3.68879 6.35636 3.55357 6.15416 3.46131 5.9316C3.36904 5.70904 3.32156 5.47047 3.32156 5.22954C3.32156 4.98861 3.36904 4.75005 3.46131 4.52749C3.55357 4.30492 3.68879 4.10273 3.85925 3.93246C4.02952 3.762 4.23171 3.62678 4.45427 3.53452C4.67684 3.44226 4.9154 3.39477 5.15633 3.39477C5.39726 3.39477 5.63583 3.44226 5.85839 3.53452C6.08095 3.62678 6.28315 3.762 6.45342 3.93246L6.50842 3.98746C6.72445 4.19878 6.99885 4.34055 7.29621 4.39446C7.59357 4.44838 7.90027 4.41198 8.17675 4.28996H8.25008C8.5212 4.17376 8.75243 3.98082 8.9153 3.73489C9.07817 3.48895 9.16557 3.20076 9.16675 2.90579V2.74996C9.16675 2.26373 9.3599 1.79741 9.70372 1.4536C10.0475 1.10978 10.5139 0.916626 11.0001 0.916626C11.4863 0.916626 11.9526 1.10978 12.2964 1.4536C12.6403 1.79741 12.8334 2.26373 12.8334 2.74996V2.83246C12.8346 3.12743 12.922 3.41562 13.0849 3.66155C13.2477 3.90749 13.479 4.10043 13.7501 4.21663C14.0266 4.33865 14.3333 4.37505 14.6306 4.32113C14.928 4.26721 15.2024 4.12545 15.4184 3.91413L15.4734 3.85913C15.6437 3.68867 15.8459 3.55344 16.0684 3.46118C16.291 3.36892 16.5296 3.32143 16.7705 3.32143C17.0114 3.32143 17.25 3.36892 17.4726 3.46118C17.6951 3.55344 17.8973 3.68867 18.0676 3.85913C18.238 4.02939 18.3733 4.23159 18.4655 4.45415C18.5578 4.67672 18.6053 4.91528 18.6053 5.15621C18.6053 5.39714 18.5578 5.6357 18.4655 5.85827C18.3733 6.08083 18.238 6.28303 18.0676 6.45329L18.0126 6.50829C17.8013 6.72433 17.6595 6.99872 17.6056 7.29609C17.5517 7.59345 17.5881 7.90015 17.7101 8.17663V8.24996C17.8263 8.52108 18.0192 8.75231 18.2652 8.91518C18.5111 9.07805 18.7993 9.16545 19.0942 9.16663H19.2501C19.7363 9.16663 20.2026 9.35978 20.5464 9.7036C20.8903 10.0474 21.0834 10.5137 21.0834 11C21.0834 11.4862 20.8903 11.9525 20.5464 12.2963C20.2026 12.6401 19.7363 12.8333 19.2501 12.8333H19.1676C18.8726 12.8345 18.5844 12.9219 18.3385 13.0847C18.0926 13.2476 17.8996 13.4788 17.7834 13.75Z'
            stroke='#8B8B93'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_498_1003'>
            <rect width='22' height='22' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </SvgContainer>
  );
};
export default SettingsIcon;
