import { Description } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Description',
    component: Description
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;


export const Default = Template.bind({});
Default.args = {
    description:"Soy el member mas picado de los members",
    label:"Description:"
};
                        