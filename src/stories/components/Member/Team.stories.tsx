import { Team } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Member/Team',
    component: Team
} as ComponentMeta<typeof Team>;

const Template: ComponentStory<typeof Team> = (args) => <Team {...args} />;


export const Default = Template.bind({});
Default.args = {
    team:{
        name:"Team 1"
    }
};
                        