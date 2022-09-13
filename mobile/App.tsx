import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='Send 1'></Button>
      <Button title='Send 2'></Button>
      <Button title='Send 1'></Button>
      <Button title='Hello Word'></Button>
    </View>
  );
}

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps){
  return (
      <TouchableOpacity>
        <Text>
            {props.title}
        </Text>
      </TouchableOpacity>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
