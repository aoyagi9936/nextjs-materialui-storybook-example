// MyCard.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import MyCard from '@/components/MyCard';

const meta: Meta<typeof MyCard> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'MyCard',
    component: MyCard,
    argTypes: {
        minWidth: {
            control: { type: 'number', min: 275, max: 400, step: 5 }
        },
        path: {
            control: 'text'
        },
        title: {
            control: 'text'
        },
        color: {
            options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
            control: { type: 'select' },
        }
    }
};

export default meta;
type Story = StoryObj<typeof MyCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        title: "Word of the Day",
        color: "primary",
    }
};
