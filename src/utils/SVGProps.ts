export interface SVGProps {
  colour?:
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'black'
    | 'grey'
    | 'white';
  isGradient?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}
