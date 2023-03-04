package com.railpariseva;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
 
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException; 

import android.telephony.SmsManager;

class MySendSmsModule extends ReactContextBaseJavaModule {
 
    public MySendSmsModule(ReactApplicationContext reactContext) {
        //required by React Native
        super(reactContext);
    }
 
    @Override
    //getName is required to define the name of the module
    public String getName() { 
        return "DirectSms";
    }
 
    @ReactMethod
    public void sendDirectSms(String phoneNumber, String msg) {
        try {  
            SmsManager smsManager = SmsManager.getDefault();
            smsManager.sendTextMessage(
              phoneNumber, null, msg, null, null
            );
        } catch (Exception ex) {
            System.out.println("couldn't send message.");
        } 
    }
}
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "railPariseva";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
