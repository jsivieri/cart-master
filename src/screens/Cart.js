import { Text, View, Button, ScrollView } from "react-native";

export const Cart = ({ items = [], getTotalPrice, navigation, route, ...props }) => {
  // Funções para alterar quantidade
  const addQty = (id) => {
    if (props.addItemToCart) props.addItemToCart(id);
  };
  const subQty = (id) => {
    if (props.removeItemFromCart) props.removeItemFromCart(id);
  };

  if (!items || items.length === 0) {
    return <Text style={{ flex: 1, alignSelf:'center',textAlignVertical:'center' ,fontSize:20,fontWeight:'bold'}}>Seu carrinho está vazio</Text>;
  }

  return (
    <ScrollView>
      {items.map((item) => (
        <View key={item.id} style={{ margin: 8, padding: 8, backgroundColor: '#eee', borderRadius: 8 }}>
          <Text>{item.product.name}</Text>
          <Text>Preço: R$ {item.product.price?.toFixed(2)}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button title="-" onPress={() => subQty(item.id)} />
            <Text style={{ marginHorizontal: 8 }}>{item.qty}</Text>
            <Button title="+" onPress={() => addQty(item.id)} />
          </View>
          <Text>Subtotal: R$ {(item.product.price * item.qty).toFixed(2)}</Text>
        </View>
      ))}
      <View style={{ margin: 16 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Total: R$ {getTotalPrice().toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};
