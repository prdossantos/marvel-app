import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../themes/theme-default.scss";
import Loader from "../components/Loader";

export default {
    title: "MarvelAPp/Components/Loader",
    component: Loader,
    argTypes: {
        color: {
            options: ["text-primary", "text-secondary", "text-warning", "text-success", "text-info", "text-light"],
            control: { type: "select" }
        },
        background: {
            options: ["bg-primary", "bg-secondary", "bg-warning", "bg-success", "bg-info", "bg-light"],
            control: { type: "select" }
        },
    }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    isActive: true,
    isPageLoader: false,
    showDots: true,
    color: "text-secondary",
    background: "bg-primary",
    message: "PROCESSANDO"
};

