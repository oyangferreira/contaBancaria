import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Switch, Button } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [dados, setDados] = useState('');

  const confirmarDados = () => {
    const info = `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nEscolaridade: ${escolaridade}\nLimite: ${limite}\nBrasileiro: ${brasileiro ? 'Sim' : 'Não'}`;
    setDados(info);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Abertura de Conta</Text>
      <View style={styles.formRow}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setNome(text)}
          value={nome}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setIdade(text)}
          value={idade}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          style={styles.picker}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          style={styles.picker}
          selectedValue={escolaridade}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
        >
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Graduação" value="Graduação" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Limite</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={200}
          step={1}
          value={limite}
          onValueChange={(value) => setLimite(value)}
        />
        <Text style={styles.sliderValue}>{limite}</Text>
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch
          style={styles.switch}
          value={brasileiro}
          onValueChange={(value) => setBrasileiro(value)}
        />
      </View>
      <Button
        title="Confirmar"
        onPress={confirmarDados}
        color="black" // Cor do texto do botão
        style={styles.button} // Estilo da borda do botão
      />
      <Text style={styles.tituloDados}>Dados Informados</Text>
      <Text style={styles.dados}>{dados}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  picker: {
    flex: 1,
    height: 40,
  },
  slider: {
    flex: 3,
  },
  sliderValue: {
    fontSize: 18,
    marginLeft: 10,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  button: {
    borderColor: '', // Cor da borda do botão
    borderWidth: 1, // Largura da borda do botão
    color: 'blue',
  },
  tituloDados: { 
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  dados: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
  },
});
