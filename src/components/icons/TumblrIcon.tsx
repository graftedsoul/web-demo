import { SVGProps } from '@/utils/SVGProps.ts';

export const TumblrIcon = ({
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
        <path d='M6.27051 7.62976C8.86829 7.07312 10.816 4.76401 10.816 2H13.8463V7.15152H17.4826V10.7879H13.8463V16.2424C13.8463 16.7566 14.044 17.4493 14.7554 17.9091C15.2296 18.2156 16.2397 18.3671 17.7857 18.3636V22H13.5432C11.0329 22 8.99778 19.9649 8.99778 17.4545V10.7879H6.27051V7.62976Z'></path>
      </svg>
    </i>
  );
};

export default TumblrIcon;
