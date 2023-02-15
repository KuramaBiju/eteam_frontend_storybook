import { Pagination } from "../../../components/Pagination";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";

export default {
    title:'Pagination/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;


export const Default = Template.bind({});
Default.args = {
   isCreateMember: true,
   page: 2,
   setPage: action('Set page'),
   maxPage: 4,

};
                        