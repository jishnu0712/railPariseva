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
  
export default sendSMS;