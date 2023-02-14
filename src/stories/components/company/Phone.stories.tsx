import { Phone } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Company/Phone',
    component: Phone
} as ComponentMeta<typeof Phone>;

const Template: ComponentStory<typeof Phone> = (args) => <Phone {...args} />;


export const Default = Template.bind({});
Default.args = {
    phone:"345678910"
};
                        