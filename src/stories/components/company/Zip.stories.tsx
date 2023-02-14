import { Zip } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Company/Zip',
    component: Zip
} as ComponentMeta<typeof Zip>;

const Template: ComponentStory<typeof Zip> = (args) => <Zip {...args} />;


export const Default = Template.bind({});
Default.args = {
    zip:"1900"
};
                        