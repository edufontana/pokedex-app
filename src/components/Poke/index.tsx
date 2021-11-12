import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Container, PokeCards, PokeTitle, Arrow, WrapperArrow} from './styles';
import {toUpperCase} from '../../utils/Converts';
import {pokeDTO} from '../../dtos/pokeDTO';

export function Poke({item}: pokeDTO) {
  const navigation = useNavigation();

  function handlepoke() {
    const id = String(item.url);
    const d = id.substr(25, 31);
    const formatedID = d.replace(/\D/g, '');

    navigation.navigate('PokeDetails', formatedID);
  }

  return (
    <Container>
      <PokeCards
        onPress={() => {
          handlepoke();
        }}>
        <PokeTitle>{toUpperCase(String(item.name))}</PokeTitle>
        <WrapperArrow>
          <Arrow>{`${'>'}`}</Arrow>
        </WrapperArrow>
      </PokeCards>
    </Container>
  );
}
