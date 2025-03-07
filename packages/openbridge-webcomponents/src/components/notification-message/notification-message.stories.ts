import type {Meta, StoryObj} from '@storybook/web-components';
import {ObcNotificationMessage} from './notification-message';
import './notification-message';
import '../notification-message-item/notification-message-item';
import '../../icons/icon-14-alarm-unack';
import {html} from 'lit';

const meta: Meta<typeof ObcNotificationMessage> = {
  title: 'Application/Notification message',
  tags: ['autodocs'],
  component: 'obc-notification-message',
  args: {},
  argTypes: {},
} satisfies Meta<ObcNotificationMessage>;

export default meta;
type Story = StoryObj<ObcNotificationMessage>;

export const Primary: Story = {
  render: () => html`
    <obc-notification-message>
      <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
        <obi-14-alarm-unack slot="icon" use-css-color></obi-14-alarm-unack>
        <div slot="message">This is a message</div>
      </obc-notification-message-item>
      <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `,
};

export const Empty: Story = {
  render: () => html`
    <obc-notification-message empty>
      <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `,
};

export const Large: Story = {
  render: () => html`
    <obc-notification-message large>
      <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
        <obi-14-alarm-unack slot="icon" use-css-color></obi-14-alarm-unack>
        <div slot="message">This is a message</div>
      </obc-notification-message-item>
      <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
        <obi-14-alarm-unack slot="icon" use-css-color></obi-14-alarm-unack>
        <div slot="message">This is a message</div>
      </obc-notification-message-item>
      <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `,
};

export const LargeSingleMessage: Story = {
  render: () => `
    <obc-notification-message large>
        <obc-notification-message-item time="2023-01-01T13:37:01+01:00">
            <obi-14-alarm-unack slot="icon" use-css-color></obi-14-alarm-unack>
            <div slot="message">This is a message</div>
        </obc-notification-message-item>
        <div slot="empty">No active alerts</div>
    </obc-notification-message>
  `,
};
