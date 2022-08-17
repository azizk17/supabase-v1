import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";
import { forwardRef } from "react";

export type FilterProps = IResourceComponentsProps & {
    filters?: string
    onUpdated?: Function
}
const Filter = forwardRef<HTMLDivElement, FilterProps>(
    (
        { children, onUpdated, ...props },
        ref
    ): JSX.Element => {
        const t = useTranslate();

        return (
            <p></p>
        )
    });