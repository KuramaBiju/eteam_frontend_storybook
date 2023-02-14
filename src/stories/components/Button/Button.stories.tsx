import { Button } from "../../../components/Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title:'Buttons/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Login = Template.bind({});
Login.args = {
    type:"button",
    text:"Login",
    typeButton:"button-login",
    clickHandler: action('Login')
};

export const Pagination = Template.bind({});
Pagination.args = {
    type:"button",
    text:"Next",
    typeButton:"button-pagination",
    clickHandler: action('Pagination')
};

export const Decline = Template.bind({});
Decline.args = {
    type:"button",
    text:"Decline",
    typeButton:"button-decline",
    clickHandler: action('Decline')
};
                        

export const Accept = Template.bind({});
Accept.args = {
    type:"button",
    text:"Accept",
    typeButton:"button-accept",
    clickHandler: action('Accept')
};


export const Submit = Template.bind({});
Submit.args = {
    type:"submit",
    text:"Submit",
    typeButton:"button-submit",
    clickHandler: action('Submit')
};

