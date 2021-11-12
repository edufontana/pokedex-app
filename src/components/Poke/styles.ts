import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PokeCards = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const PokeTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  flex: 1;
`;

export const WrapperArrow = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-right: 20px;
`;

export const Arrow = styled.Text`
  font-size: ${RFValue(24)}px;
`;
