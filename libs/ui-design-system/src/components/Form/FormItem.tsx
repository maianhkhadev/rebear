import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';
import { useFormContext } from './useFormContext';
import { ClassNames } from './Form.constants';

export type FormItemProps = {
  name: string;
};

export const FormItem = forwardRef<
  HTMLDivElement,
  FormItemProps & Omit<HTMLProps<HTMLDivElement>, 'size'>
>(function FormItem(props, ref) {
  const { name, label, className, children, ...rest } = props;
  const { register } = useFormContext();

  const classes = clsx([ClassNames.FormItem, className]);

  return (
    <div ref={ref} className={classes} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (typeof child.type !== 'string' && 'displayName' in child.type) {
            const componentName = child.type.displayName;

            if (componentName !== 'FormLabel') {
              const props = {
                ...child.props,
                ...register(name),
              };
              return React.cloneElement(child, props);
            }
          }
        }
        return child;
      })}
    </div>
  );
});

export default FormItem;
