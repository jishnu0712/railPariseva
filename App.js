import React, { useState } from 'react';
import {
  View, TextInput, Button, Text, Alert, Pressable, Linking, PermissionsAndroid
} from 'react-native';

import { styles } from "./styles"
import { NativeModules } from 'react-native';

const sendSMSNow = async (number, msg) => {
  let DirectSms = NativeModules.DirectSms;
  console.log('DirectSms', DirectSms)
  DirectSms.sendDirectSms(number, msg)
};

const sendSMS = async (number, msg) => {
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
      sendSMSNow(number, msg);
    } else {
      console.log('SMS permission denied');
    }
  } catch (error) {
    console.log(error);
  }
};


const App = () => {
  const [PNR, setPNR] = useState('');
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
          <View >
            <Pressable style={styles.actionButton} onPress={() => sendSMS("139", `IRPNR ${PNR}`)} >
              <Text style={styles.buttonText}>Berth Status Enquiry</Text></Pressable>
            <Pressable style={styles.actionButton} onPress={() => sendSMS("139", `CLEAN ${PNR}`)} >
              <Text style={styles.buttonText}>Clean My Coach</Text></Pressable>
            <Pressable style={styles.actionButton} onPress={() => sendSMS("139", `PNR ${PNR}`)} >
              <Text style={styles.buttonText}>Pressable 3</Text></Pressable>
            <Pressable style={styles.actionButton} onPress={() => setInputVisible(true)} >
              <Text style={styles.buttonText}>Reset PNR</Text></Pressable>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default App;
