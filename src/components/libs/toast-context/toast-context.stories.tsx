import type { Meta, StoryObj } from '@storybook/react';
import { ToastTrigger } from './toast-trigger';
import { ToastProvider } from './toast-context';

const meta = {
  title: 'Composants/Toast/Toast',
  component: ToastTrigger,
  decorators: [(Story) => <ToastProvider>{<Story />}</ToastProvider>],
  tags: ['autodocs'],
} satisfies Meta<typeof ToastTrigger>;

export default meta;
type Story = StoryObj<typeof meta>;

//const Template: ComponentStory<typeof ToastTrigger> = (args) => (
//  <ToastTrigger {...args} />
//);

export const ToastSuccess: Story = {
  args: {
    severity: 'success',
    summary: 'Titre (facultatif)',
    detail: 'Message toast de succès',
  },
};

export const ToastInfo = {
  args: {
    severity: 'info',
    summary: 'Titre (facultatif)',
    detail: "Message toast d'info",
  },
};

export const ToastAvertissement = {
  args: {
    severity: 'warn',
    summary: 'Titre (facultatif)',
    detail: "Message toast d'avertissement",
  },
};

export const ToastErreur = {
  args: {
    severity: 'error',
    summary: 'Titre (facultatif)',
    detail: "Message toast d'erreur",
  },
};
