import { Name } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Member/Name',
    component: Name
} as ComponentMeta<typeof Name>;

const Template: ComponentStory<typeof Name> = (args) => <Name {...args} />;


export const Default = Template.bind({});
Default.args = {
    name:"MemberName"
};
                        