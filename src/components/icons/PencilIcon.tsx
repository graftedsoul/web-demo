import { SVGProps } from '@/utils/SVGProps.ts';

export const PencilIcon = ({
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
        <path d='M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z'></path>
      </svg>
    </i>
  );
};

export default PencilIcon;
