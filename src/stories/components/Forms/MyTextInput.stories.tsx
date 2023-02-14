import { MyTextInput } from "../../../components/Forms";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'MyTextInput',
    component: MyTextInput
} as ComponentMeta<typeof MyTextInput>;

const Template: ComponentStory<typeof MyTextInput> = (args) => <MyTextInput {...args} />;


export const Default = Template.bind({});
Default.args = {
   label:"Default",
   name:"default",
   htmlFor:"default",
   arial:"default",
   type:"text",
   placeholder:"Text"
};
                        