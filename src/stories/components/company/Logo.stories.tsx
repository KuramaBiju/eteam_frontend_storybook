import { Logo } from "../../../components/Company";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Logo',
    component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;


export const Default = Template.bind({});
Default.args = {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckEPDD6tJhLIx2riKqT9H_OcBZ8P_0HKG8jKOdfUMUQ&s"
};
                        