import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {toUpperCase} from '../../utils/Converts';
import {
  Container,
  Header,
  Title,
  ViewImg,
  Img,
  ViewPokeName,
  PokeType,
  ViewAttibutes,
  PokeTypeTitle,
  PokeTypeView,
  PokeScaleView,
  PokeScaleText,
} from './styles';
import api from '../../services/api';
import {StatusBar} from 'react-native';
import {Load} from '../../components/Load';
import {pokeDetailsDTO} from '../../dtos/pokeDTO';

export function PokeDetails() {
  const [pokemonSelected, setPokemonSelected] = useState<pokeDetailsDTO>();
  const [pokeTypes, setPokeTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const id = route.params;

  useEffect(() => {
    async function fetchPoke() {
      try {
        const response = await api.get(`/pokemon/${id}`);

        await setPokemonSelected(response.data);
        setPokeTypes(response.data.types);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPoke();
  }, []);

  return (
    <>
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="black"
        />
        {loading ? (
          <Load />
        ) : (
          <>
            <Header />

            <ViewAttibutes>
              <ViewImg>
                <Img
                  source={{
                    uri: pokemonSelected?.sprites.front_default,
                  }}
                />
              </ViewImg>
              <ViewPokeName>
                <Title>{toUpperCase(String(pokemonSelected?.name))}</Title>
              </ViewPokeName>
              <PokeType>
                {pokeTypes.map(item => (
                  <PokeTypeView type={item.type.name} key={item.type.name}>
                    <PokeTypeTitle>{item.type.name}</PokeTypeTitle>
                  </PokeTypeView>
                ))}
              </PokeType>

              <PokeScaleView>
                <PokeScaleText>{`Height: ${(
                  pokemonSelected?.height * 0.1
                ).toFixed(2)}m`}</PokeScaleText>
              </PokeScaleView>
              <PokeScaleView>
                <PokeScaleText>{`Weight: ${(
                  pokemonSelected?.weight * 0.1
                ).toFixed(1)}Kg`}</PokeScaleText>
              </PokeScaleView>
            </ViewAttibutes>
          </>
        )}
      </Container>
    </>
  );
}
