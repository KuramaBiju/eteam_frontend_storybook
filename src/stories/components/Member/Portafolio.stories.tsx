import { Portafolio } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Member/Portafolio',
    component: Portafolio
} as ComponentMeta<typeof Portafolio>;

const Template: ComponentStory<typeof Portafolio> = (args) => <Portafolio {...args} />;


export const Default = Template.bind({});
Default.args = {
    portafolio:"UwWuuuuUuUU"
};
                        