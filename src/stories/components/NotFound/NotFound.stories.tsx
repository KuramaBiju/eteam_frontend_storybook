import { NotFound } from "../../../components/NotFound";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'NotFound/NotFound',
    component: NotFound
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;


export const Default = Template.bind({});
Default.args = {
   
};
                        