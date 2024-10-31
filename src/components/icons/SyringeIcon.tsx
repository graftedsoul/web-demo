import { SVGProps } from '@/utils/SVGProps.ts';

export const SyringeIcon = ({
  colour = 'black',
  isGradient = false,
  size = 'medium',
}: SVGProps) => {
  return (
    <i
      className={`icon ${'icon_' + size} ${'icon_' + colour} ${isGradient && 'icon_gradient'}`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='100%'
        height='100%'
      >
        {isGradient && (
          <defs>
            <linearGradient
              id={'gradient_' + colour}
              gradientTransform='rotate(48)'
            >
              <stop className='gradient_colour_start' offset='0%' />
              <stop className='gradient_colour_end' offset='100%' />
            </linearGradient>
          </defs>
        )}
        <path d='M21.6779 7.97918L20.2637 9.39339L18.1424 7.27207L16.021 9.39339L19.5566 12.9289L18.1424 14.3431L17.4353 13.636L11.0713 20H5.41444L3.29312 22.1213L1.87891 20.7071L4.00023 18.5858V12.9289L10.3642 6.56497L9.65708 5.85786L11.0713 4.44365L14.6068 7.97918L16.7281 5.85786L14.6068 3.73654L16.021 2.32233L21.6779 7.97918ZM16.021 12.2218L11.7784 7.97918L10.3642 9.39339L12.4855 11.5147L11.0713 12.9289L8.94997 10.8076L7.53576 12.2218L9.65708 14.3431L8.24287 15.7574L6.12155 13.636L6.00023 13.7574V18H10.2429L16.021 12.2218Z'></path>
      </svg>
    </i>
  );
};

export default SyringeIcon;