import { TagRole } from "../../../components/Tags";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Tags/Role',
    component: TagRole
} as ComponentMeta<typeof TagRole>;

const Template: ComponentStory<typeof TagRole> = (args) => <TagRole {...args} />;


export const Role = Template.bind({});
Role.args = {
   name:"Tech Lead"
};
                        