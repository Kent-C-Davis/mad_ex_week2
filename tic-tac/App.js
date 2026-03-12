import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.outerBorder}>
        <View style={styles.grid}>
          <View style={styles.box}>
            <Text style={styles.text}>
              O
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              O
            </Text>
          </View>


          <View style={styles.box}>
            <Text style={styles.text}>
              X
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              X
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              O
            </Text>
          </View>



          <View style={styles.box}>
            <Text style={styles.text}>
              X
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              O
            </Text>
          </View>
          
        </View>  
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    borderWidth: 25,
    borderColor: 'orange',
    borderRadius: 20,
    width: 350,
    height: 350,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',

  },
  box: {
    width: 96,
    height: 96,
    backgroundColor: 'green',

    margin: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',

  },
  outerBorder: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 23,
  }
});
