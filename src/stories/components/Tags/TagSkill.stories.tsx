import { TagSkill } from "../../../components/Tags";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Tags/Skill',
    component: TagSkill
} as ComponentMeta<typeof TagSkill>;

const Template: ComponentStory<typeof TagSkill> = (args) => <TagSkill {...args} />;


export const Skill = Template.bind({});
Skill.args = {
   name:"Node.js"
};
                        