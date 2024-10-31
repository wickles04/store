import { router } from 'expo-router';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Index() {
    function handleClick(){
        router.navigate("/test");
    }
  return (
    <View style={styles.container}>
        <Text>Olá index</Text>
        <Button title='ME LEVAR' onPress={handleClick}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    gap:16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
