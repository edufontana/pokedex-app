import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface TypeProps {
  type: string;
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  flex: 1;
`;

export const Header = styled.View`
  height: ${RFValue(155)}px;
`;

export const ViewPokeName = styled.Text`
  text-align: center;
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  color: ${({theme}) => theme.colors.dark_text};
`;
export const ViewImg = styled.View`
  justify-content: center;
  align-items: center;
  bottom: 20px;
`;

export const Img = styled.Image`
  width: ${RFValue(200)}px
  height: ${RFValue(200)}px
  position: absolute;
`;

export const ViewAttibutes = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  align-items: center;
`;
export const PokeWeight = styled.View``;
export const PokeType = styled.View`
  padding: 15px;
  border-radius: 20px;

  flex-direction: row;
`;

export const PokeTypeView = styled.View<TypeProps>`
  background-color: ${({type}) =>
    type === 'grass'
      ? theme.typesColors.grassType
      : type === 'poison'
      ? theme.typesColors.poisonType
      : type === 'fire'
      ? theme.typesColors.fireType
      : type === 'water'
      ? theme.typesColors.waterType
      : type === 'bug'
      ? theme.typesColors.bugType
      : type === 'normal'
      ? theme.typesColors.normalType
      : type === 'flying'
      ? theme.typesColors.flyingType
      : type === 'electric'
      ? theme.typesColors.electricType
      : type === 'ground'
      ? theme.typesColors.groundType
      : type === 'fighting'
      ? theme.typesColors.fightingType
      : type === 'dragon'
      ? theme.typesColors.dragonType
      : type === 'ice'
      ? theme.typesColors.iceType
      : type === 'ghost'
      ? theme.typesColors.ghostType
      : type === 'dark'
      ? theme.typesColors.darkType
      : type === 'fairy'
      ? theme.typesColors.fairyType
      : type === 'psychic'
      ? theme.typesColors.psychicType
      : type === 'rock'
      ? theme.typesColors.rockType
      : type === 'steel'
      ? theme.typesColors.steelType
      : '#aaa'}
  margin: 10px;
  padding: 10px;
  width: 30%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const PokeTypeTitle = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-weight: 600;
`;
export const PokeScaleView = styled.View`
  margin-top: 10px;
`;

export const PokeScaleText = styled.Text`
  font-size: ${RFValue(22)}px;
`;
