import { Category } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Member/Category',
    component: Category
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;


export const Default = Template.bind({});
Default.args = {
    category:"Cat1"
};
                        