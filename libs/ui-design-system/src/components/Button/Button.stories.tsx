import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonIcon } from './ButtonIcon';
import IconClose from '../Icons/IconClose';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  render: ({ ...args }) => (
    <>
      <div>
        <Button variant="primary" {...args}>
          Primary
        </Button>
        <Button variant="outline-primary" {...args}>
          Outline Primary
        </Button>
        <ButtonIcon variant="primary" icon={<IconClose />} {...args} />
        <ButtonIcon variant="outline-primary" icon={<IconClose />} {...args} />
      </div>
      <div>
        <Button variant="secondary" {...args}>
          Secondary
        </Button>
        <Button variant="outline-secondary" {...args}>
          Outline Secondary
        </Button>
        <ButtonIcon variant="secondary" icon={<IconClose />} {...args} />
        <ButtonIcon
          variant="outline-secondary"
          icon={<IconClose />}
          {...args}
        />
      </div>
      <div>
        <Button variant="success" {...args}>
          Success
        </Button>
        <Button variant="outline-success" {...args}>
          Outline Success
        </Button>
        <ButtonIcon variant="success" icon={<IconClose />} {...args} />
        <ButtonIcon variant="outline-success" icon={<IconClose />} {...args} />
      </div>
      <div>
        <Button variant="warning" {...args}>
          Warning
        </Button>
        <Button variant="outline-warning" {...args}>
          Outline Warning
        </Button>
        <ButtonIcon variant="warning" icon={<IconClose />} {...args} />
        <ButtonIcon variant="outline-warning" icon={<IconClose />} {...args} />
      </div>
      <div>
        <Button variant="error" {...args}>
          Error
        </Button>
        <Button variant="outline-error" {...args}>
          Outline Error
        </Button>
        <ButtonIcon variant="error" icon={<IconClose />} {...args} />
        <ButtonIcon variant="outline-error" icon={<IconClose />} {...args} />
      </div>
      <div>
        <Button variant="info" {...args}>
          Info
        </Button>
        <Button variant="outline-info" {...args}>
          Outline Info
        </Button>
        <ButtonIcon variant="info" icon={<IconClose />} {...args} />
        <ButtonIcon variant="outline-info" icon={<IconClose />} {...args} />
      </div>
    </>
  ),
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};
