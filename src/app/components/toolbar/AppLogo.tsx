import * as React from "react";
import { IconButton } from "@alethio/ui/lib/control/IconButton";
import { AlethioIcon } from "app/components/icon/AlethioIcon";

export interface IToolbarLogoProps {

}

export class AppLogo extends React.Component<IToolbarLogoProps> {
    render() {
        return (
            <IconButton Icon={AlethioIcon} color={theme => theme.colors.toolbarAlethioIconHover} />
        );
    }
}
