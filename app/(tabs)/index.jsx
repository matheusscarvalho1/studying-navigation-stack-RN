import { Text, View } from 'react-native';
import { styles } from '../../styles/styles';

export default function Home() {
 // No link, por padrão é navigate, então, (Vai para a tela. Se ela já existir na pilha, usa a mesma instância)
 // Mas se quisermos que ele faça um push, podemos usar o atributo replace
  // O replace é usado para substituir a tela atual na pilha de navegação
  return (
    <View style={[styles.container, { backgroundColor: "red" }]}>
        <Text>Home</Text>
    </View>
    
  );
}