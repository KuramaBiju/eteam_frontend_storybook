import { Select } from "../../../components/Forms";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const Default = Template.bind({});
Default.args = {
    label:"Selectovich",
    name:"default",
    
};
                        