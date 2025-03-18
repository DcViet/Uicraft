declare module 'react-native-onboarding-swiper' {
    import { ComponentType } from 'react';
    import { ViewStyle, ImageSourcePropType } from 'react-native';
  
    interface Page {
      backgroundColor: string;
      image: JSX.Element | ImageSourcePropType;
      title: string;
      subtitle: string;
    }
  
    interface OnboardingProps {
      pages: Page[];
      onSkip?: () => void;
      onDone?: () => void;
      containerStyles?: ViewStyle;
      imageContainerStyles?: ViewStyle;
      titleStyles?: any;
      subtitleStyles?: any;
    }
  
    const Onboarding: ComponentType<OnboardingProps>;
    export default Onboarding;
  }