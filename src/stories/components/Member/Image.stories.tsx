import { Image } from "../../../components/Member";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Image',
    component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;


export const Default = Template.bind({});
Default.args = {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckEPDD6tJhLIx2riKqT9H_OcBZ8P_0HKG8jKOdfUMUQ&s"
};
                        