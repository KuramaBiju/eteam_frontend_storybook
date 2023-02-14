import { Name } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Name',
    component: Name
} as ComponentMeta<typeof Name>;

const Template: ComponentStory<typeof Name> = (args) => <Name {...args} />;


export const Default = Template.bind({});
Default.args = {
    name:"Company aweonada"
};
                        