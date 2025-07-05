import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from '../../../styles/styles';

export default function Products() {
  return (
    <View style={[styles.container, { backgroundColor: "yellow" }]}>
        <Text>Products</Text>
        <Link push href="/products/1"> Produto 1 ➡️</Link>
        <Link push href="/products/2"> Produto 2 ➡️</Link>
        <Link push href="/products/3"> Produto 3 ➡️</Link>
        <Link push href="/products/4"> Produto 4 ➡️</Link>
        <Link push href="/products/5"> Produto 5 ➡️</Link>
    </View>
    
  );
}