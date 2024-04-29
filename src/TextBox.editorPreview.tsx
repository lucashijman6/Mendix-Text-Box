import { Component, createElement, ReactNode } from "react";
import { TextBoxPreviewProps } from "../typings/TextBoxProps";
import { TextInput } from "./components/TextInput";

declare function require(name: string): string;

export class preview extends Component<TextBoxPreviewProps> {
    render(): ReactNode {
        const value = `[${this.props.textAttribute}]`;
        return <TextInput value={value} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TextBox.css");
}
