import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function User() {

  return (
    <View style={[styles.container, { backgroundColor: "purple" }]}>
        <Text>Usuário</Text>
    </View>
    
  );
}