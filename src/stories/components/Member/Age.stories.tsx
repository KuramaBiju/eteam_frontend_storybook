import { Age } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Member/Age',
    component: Age
} as ComponentMeta<typeof Age>;

const Template: ComponentStory<typeof Age> = (args) => <Age {...args} />;


export const Default = Template.bind({});
Default.args = {
    age:18
};
                        