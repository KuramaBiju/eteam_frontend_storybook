import { ErrorInputMessage } from "../../../components/Forms";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'ErrorInputMessage',
    component: ErrorInputMessage
} as ComponentMeta<typeof ErrorInputMessage>;

const Template: ComponentStory<typeof ErrorInputMessage> = (args) => <ErrorInputMessage {...args} />;


export const Default = Template.bind({});
Default.args = {
    error:"Hubo un error pa uwuwuuwwu"
};
                        