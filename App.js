import React, { useState } from 'react'; // Importando o React e o hook useState
import { TextInput, FlatList, StyleSheet, Text, View, Button } from 'react-native'; // Importando componentes do React Native

export default function App() { // Definindo o componente principal chamado "App"
  const valorInicial = []; // Criando um array vazio como valor inicial para a lista de tarefas

  const [listaTarefas, definirListaTarefas] = useState(valorInicial); // Criando um estado para a lista de tarefas usando o hook useState
  const [novoItem, setNovoItem] = useState(''); // Criando um estado para o novo item digitado

  const adicionarItem = () => { // Função para adicionar um novo item à lista
    if (novoItem.trim()) { // Verificando se o novo item não está vazio (apenas espaços)
      definirListaTarefas([...listaTarefas, novoItem]); // Atualizando a lista de tarefas com o novo item
      setNovoItem(''); // Limpando o campo de entrada
    }
  };

  const resetarLista = () => { // Função para limpar a lista de tarefas
    definirListaTarefas([]); // Definindo a lista de tarefas como vazia
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloLista}>Lista de Tarefas</Text>
      <FlatList
        data={listaTarefas}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} /* Renderização dos itens da lista */
        keyExtractor={(item, index) => index.toString()} // Função para extrair chaves únicas para cada item
      />

      <View style={styles.inputContainer}> 
        <TextInput
          placeholder="Digite o novo item"
          value={novoItem}
          onChangeText={(text) => setNovoItem(text)}
          style={styles.input}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>

      <Button title="Resetar Lista" onPress={resetarLista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4588', // Cor de fundo do contêiner
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 70, // Espaçamento interno
  },
  tituloLista: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espaçamento inferior
  },
  inputContainer: {
    flexDirection: 'row', // Alinhamento dos elementos na horizontal
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue', // Cor da borda
    borderRadius: 10, // Borda arredondada
    padding: 5, // Espaçamento interno
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 5,
  },
  item: {
    fontSize: 18,
  },
});
