import * as React from "react";

declare class Numpad extends React.Component<NumpadProps, any> { }

export interface NumpadProps {
    onKeyPress: Function;
}

export default Numpad;
