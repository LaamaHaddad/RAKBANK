import {StyleProp} from 'react-native';

export interface ButtonProps {
  type: 'solid' | 'outline';
  buttonColor: string;
  title: string;
  titleColor: string;
  titleStyle?: StyleProp<any> | StyleProp<any>[];
  buttonStyle?: StyleProp<any> | StyleProp<any>[];
  onPress: () => void;
}
