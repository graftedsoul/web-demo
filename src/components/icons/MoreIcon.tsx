import { SVGProps } from '@/utils/SVGProps.ts';

export const MoreIcon = ({
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
        <path d='M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z'></path>
      </svg>
    </i>
  );
};

export default MoreIcon;
