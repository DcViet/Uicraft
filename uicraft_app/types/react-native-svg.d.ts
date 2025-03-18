declare module "react-native-svg" {
    export * from "react-native-svg/lib/commonjs";
    import { Component } from "react";
  
    export interface SvgUriProps {
      uri: string;
      width?: number | string;
      height?: number | string;
    }
  
    export class SvgUri extends Component<SvgUriProps> {}
  }
  