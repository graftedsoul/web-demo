import { SVGProps } from '@/utils/SVGProps.ts';

export const CloseIcon = ({
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
        <path d='M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z'></path>
      </svg>
    </i>
  );
};

export default CloseIcon;
