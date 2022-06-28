import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Gradiente from '../assets/gradiente.svg';
import topo from '../assets/topo.png';

export default function Topo({ titulo }) {
  const navigation = useNavigation();

  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={estilos.botaoBack}
      >
        <Feather name='arrow-left' size={28} color='#777' />
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: 150,
  },
  gradiente: {
    position: 'absolute',
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  botaoBack: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});
