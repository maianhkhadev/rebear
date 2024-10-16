import type { Meta, StoryObj } from '@storybook/react';
import { Accordions } from './Accordions';
import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionPanel } from './AccordionPanel';

const meta: Meta<typeof Accordions> = {
  component: Accordions,
  title: 'Accordions',
  render: ({ ...args }) => (
    <Accordions>
      <Accordion>
        <AccordionHeader>Accordion title 1</AccordionHeader>
        <AccordionPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </AccordionPanel>
      </Accordion>
      <Accordion>
        <AccordionHeader>Accordion title 2</AccordionHeader>
        <AccordionPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </AccordionPanel>
      </Accordion>
      <Accordion>
        <AccordionHeader>Accordion title 3</AccordionHeader>
        <AccordionPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </AccordionPanel>
      </Accordion>
    </Accordions>
  ),
};
export default meta;
type Story = StoryObj<typeof Accordions>;

export const Default: Story = {
  args: {},
};
