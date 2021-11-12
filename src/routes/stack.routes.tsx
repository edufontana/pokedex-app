import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokeList} from '../screens/PokeList';
import {PokeDetails} from '../screens/PokeDetails';

const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="PokeList"
        component={PokeList}
        options={{headerShown: false}}
      />
      <Screen name="PokeDetails" component={PokeDetails} />
    </Navigator>
  );
}
