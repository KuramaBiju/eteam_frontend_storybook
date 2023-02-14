import { Web } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Company/Web',
    component: Web
} as ComponentMeta<typeof Web>;

const Template: ComponentStory<typeof Web> = (args) => <Web {...args} />;


export const Default = Template.bind({});
Default.args = {
    web:"https://www.trik.com.br"
};
                        