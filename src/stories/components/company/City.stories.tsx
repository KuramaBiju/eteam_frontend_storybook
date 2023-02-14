import { City } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Company/City',
    component: City
} as ComponentMeta<typeof City>;

const Template: ComponentStory<typeof City> = (args) => <City {...args} />;


export const Default = Template.bind({});
Default.args = {
    city:"LP PA"
};
                        