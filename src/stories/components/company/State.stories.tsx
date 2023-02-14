import { State } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Company/State',
    component: State
} as ComponentMeta<typeof State>;

const Template: ComponentStory<typeof State> = (args) => <State {...args} />;


export const Default = Template.bind({});
Default.args = {
    state:"Buenos Aires BR"
};
                        