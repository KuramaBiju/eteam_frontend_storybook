import { TextArea } from "../../../components/Forms";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Forms/TextArea',
    component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;


export const Default = Template.bind({});
Default.args = {
    label:"TextArea",
    name:"default",
    placeholder:"Teeeeexteando afafafafafaaf"
    
};
                        