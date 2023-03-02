import React, { useState } from 'react';
import {
  View, TextInput, Button, Text, Alert, Pressable, Linking, PermissionsAndroid
} from 'react-native';

import { styles } from "./styles"
import SMS from 'react-native-sms';

const sendSMS = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: 'SMS Permission',
        message: 'This app needs access to send SMS',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // SMS.send('+1234567890', 'Hello, World!');
      SMS.send({
        body: 'The default body of the SMS!',
        recipients: ['0123456789', '9876543210'],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true
      }, (completed, cancelled, error) => {

        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

      });
    } else {
      console.log('SMS permission denied');
    }
  } catch (error) {
    console.log(error);
  }
};


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  const handleSubmit = () => {
    setInputVisible(false);
  };

  const handleOtherButtonPress = () => {
    Alert.alert(
      'Send SMS', //title
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            Alert.alert('Ok Pressed')
            //send sms action here
          },
          style: 'ok',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 8 }}>
        <Text style={styles.PNRHeader}>{inputVisible ? 'Enter PNR' : "PNR: " + inputValue}</Text>
        {inputVisible ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <TextInput
              style={styles.PNRInput}
              onChangeText={setInputValue}
              value={inputValue}
              keyboardType="numeric"
            />
            <Pressable style={styles.submitButton} onPress={handleSubmit}><Text style={styles.buttonText}>Submit</Text></Pressable>
          </View>
        ) : null}
        {!inputVisible ? (
          <View >
            <Button title="Ticket Status" onPress={() => {
              Linking.openURL(`sms:139?body=PNR ${inputValue}`)
            }} />
            <Button title="Reserved Ticket Berth Status" onPress={handleOtherButtonPress} />
            <Button title="Button 3" onPress={sendSMS} />
            <Button title="Reset PNR" onPress={() => setInputVisible(true)} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default App;
