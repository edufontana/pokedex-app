import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';
import {pokeDTO} from '../../dtos/pokeDTO';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(165)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: 800;
`;

export const MenuTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: 600;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};

  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperPokeList = styled.View`
  flex: 1;
`;

export const PokeFlatList = styled(FlatList as new () => FlatList<pokeDTO>)``;

export const ButtonLeft = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  padding: 10px;

  border-right-color: black;
  border-right-width: 0.8px;
`;

export const ButtonRight = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  padding: 10px;
  border-left-color: black;
  border-left-width: 0.8px;
`;
