import { forwardRef, ComponentProps } from 'react';
import './button.css';

export const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<'button'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} className="button" {...rest}>
      {children}
    </button>
  );
});
