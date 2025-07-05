import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from '../../../styles/styles';

export default function ProductDetails() {
  const { id } = useLocalSearchParams()
  return (
    <View style={[styles.container, { backgroundColor: "green" }]}>
        <Text>Product Details</Text>
        <Text>Produto com o id: {id}</Text>
    </View>
    
  );
}