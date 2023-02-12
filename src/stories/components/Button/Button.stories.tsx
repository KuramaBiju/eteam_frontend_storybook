import { Button } from "../../../components/Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Login = Template.bind({});
Login.args = {
    type:"button",
    text:"Login",
    typeButton:"button-login"
};
                        