import { Country } from "../../../components/Shared";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Shared/Country',
    component: Country
} as ComponentMeta<typeof Country>;

const Template: ComponentStory<typeof Country> = (args) => <Country {...args} />;


export const Argentina = Template.bind({});
Argentina.args = {
   country:'Argentina'
};
                        