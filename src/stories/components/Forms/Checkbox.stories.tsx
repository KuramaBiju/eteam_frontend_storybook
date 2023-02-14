import { Checkbox } from "../../../components/Forms";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Checkbox',
    component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;


export const Default = Template.bind({});
Default.args = {
    name:"default",
    label:"Default agh"
};
                        