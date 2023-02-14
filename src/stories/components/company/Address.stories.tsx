import { Address } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Company/Address',
    component: Address
} as ComponentMeta<typeof Address>;

const Template: ComponentStory<typeof Address> = (args) => <Address {...args} />;


export const Default = Template.bind({});
Default.args = {
    address:"Direcc"
};

                        