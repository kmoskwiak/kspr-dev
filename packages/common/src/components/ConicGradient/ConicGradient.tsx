import React from 'react';
import { styles } from './ConicGradient.css';

interface ConicGradientProps {

}

/**
 * Primary UI component for user interaction
 */
export const ConicGradient = ({
  ...props
}: ConicGradientProps) => {

  return (
    <div {...props} css={styles}>

    </div>
  );
};
