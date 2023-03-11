import React, { useState } from 'react';
import {
  View, TextInput, Button, Text, Alert, Pressable, Linking, PermissionsAndroid, Image
} from 'react-native';
import ActionButtons from './components/ActionButtons';
import { styles } from "./styles"
import sendSMS from './sendSMS';


const App = () => {
  const [PNR, setPNR] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  const handleSubmit = () => {
    setInputVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./imgs/railSeva.png')}
        style={{ alignSelf: 'center',width: '20%', height: '20%' }}
      />
      <View style={{ margin: 8 }}>
        {/* Input PNR view */}
        <Text style={styles.PNRHeader}>{inputVisible ? 'Enter PNR' : "PNR: " + PNR}</Text>
        {inputVisible ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <TextInput
              style={styles.PNRInput}
              onChangeText={setPNR}
              value={PNR}
              keyboardType="numeric"
            />
            <Pressable style={styles.submitButton} onPress={handleSubmit}><Text style={styles.buttonText}>Submit</Text></Pressable>
          </View>
        ) : null}
        {!inputVisible ? (
          <ActionButtons
            sendSMS={sendSMS}
            setInputVisible={setInputVisible}
            PNR={PNR}
            setTrainNumber={setTrainNumber}
          />
        ) : null}
      </View>
    </View>
  );
};

export default App;
