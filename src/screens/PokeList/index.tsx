import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  Title,
  Footer,
  WrapperPokeList,
  PokeFlatList,
  ButtonRight,
  ButtonLeft,
  MenuTitle,
} from './styles';
import {StatusBar, View} from 'react-native';
import api from '../../services/api';
import {Poke} from '../../components/Poke';
import {Load} from '../../components/Load';
import axios from 'axios';
import {pokeDTO} from '../../dtos/pokeDTO';

export function PokeList() {
  const [pokemons, setPokemons] = useState<pokeDTO>();
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [loading, setLoading] = useState(true);

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#aaa',
        }}
      />
    );
  };

  useEffect(() => {
    async function fetchPoke() {
      try {
        const response = await api.get('/pokemon?limit=10&offset=0');

        setPreviousPage(response.data.previous);
        setNextPage(response.data.next);
        setPokemons(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPoke();

    if (setPreviousPage === null) {
      console.log('aa');
    }
  }, []);

  return (
    <>
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="black"
        />
        <Header>
          <Title>Pokedex</Title>
        </Header>
        <WrapperPokeList>
          {loading ? (
            <Load />
          ) : (
            <PokeFlatList
              data={pokemons}
              keyExtractor={item => item.name}
              ItemSeparatorComponent={FlatListItemSeparator}
              renderItem={({item}) => <Poke item={item} />}
            />
          )}
        </WrapperPokeList>

        {/*  {pokemons.map(item => (
          <Title>{item.name}</Title>
        ))} */}
      </Container>
      <Footer>
        <ButtonLeft
          onPress={() => {
            async function fetchPoke() {
              try {
                const response = await axios.get(String(previousPage));

                setPreviousPage(response.data.previous);
                setNextPage(response.data.next);
                setPokemons(response.data.results);
                console.log(response.data.results);
              } catch (err) {
                console.log(err);
              }
            }

            fetchPoke();
          }}>
          {previousPage ? (
            <MenuTitle>Previous</MenuTitle>
          ) : (
            <MenuTitle>---</MenuTitle>
          )}
        </ButtonLeft>
        <ButtonRight
          onPress={() => {
            async function fetchPoke() {
              try {
                const response = await axios.get(String(nextPage));

                setPreviousPage(response.data.previous);
                setNextPage(response.data.next);
                setPokemons(response.data.results);
                console.log(response.data.results);
              } catch (err) {
                console.log(err);
              }
            }

            fetchPoke();
          }}>
          {nextPage ? <MenuTitle>Next</MenuTitle> : <MenuTitle>---</MenuTitle>}
        </ButtonRight>
      </Footer>
    </>
  );
}
