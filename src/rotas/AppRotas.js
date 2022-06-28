import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MelhoresProdutores from '../telas/MelhoresProdutores';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2e856e',
          tabBarInactiveTintColor: '#bbb',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
      
      >
        <Tab.Screen
          name='Home'
          component={ProdutorRotas}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name='home' size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Melhores Produtores'
          component={MelhoresProdutoresRotas}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name='heart' size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
