import { JSX, ReactNode } from "react";
interface WrapperProps {
    children?: ReactNode;
}
export function VanWrapper({ children }: WrapperProps): JSX.Element;