import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import LoginScreen from './src/LoginScreen';
import CadastroScreen from './src/CadastroScreen';
import MapScreen from './src/MapScreen';
import GroupsScreen from './src/GroupsScreen';
import EventsScreen from './src/EventsScreen';
import ProfileScreen from './src/ProfileScreen';
import HomeScreen from './src/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Importando os ícones personalizados
const mapIcon = require('./src/icons/Maps.png');
const groupsIcon = require('./src/icons/Groups.png');
const eventsIcon = require('./src/icons/Events.png');
const profileIcon = require('./src/icons/User.png');
const homeIcon = require('./src/icons/Home.png');

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Configura os ícones para cada tela
          if (route.name === 'Mapa') {
            iconSource = mapIcon;
          } else if (route.name === 'Grupos') {
            iconSource = groupsIcon;
          } else if (route.name === 'Eventos') {
            iconSource = eventsIcon;
          } else if (route.name === 'Perfil') {
            iconSource = profileIcon;
          } else if (route.name === 'Home') {
            iconSource = homeIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: focused ? 28 : 24, // Aumenta o tamanho quando está focado
                height: focused ? 28 : 24,
                tintColor: focused ? '#007AFF' : '#8E8E93', // Azul quando focado, cinza quando não
              }}
            />
          );
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#fff',
        },
        headerShown: true,
      })}
    >
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Grupos" component={GroupsScreen} />
      <Tab.Screen name="Eventos" component={EventsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
