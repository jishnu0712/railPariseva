import React from "react"
import {
    View, TextInput, Button, Text, Alert, Pressable, Linking, PermissionsAndroid
} from 'react-native';
import { styles } from "../styles.js"


const ActionButtons = ({ sendSMS, setInputVisible, PNR }) => {
    return (<View >
        <Pressable style={styles.actionButton} onPress={() => sendSMS("139", `IRPNR ${PNR}`)} >
            <Text style={styles.buttonText}>Berth Status Enquiry</Text></Pressable>
        <Pressable style={styles.actionButton} onPress={() => sendSMS("139", `CLEAN ${PNR}`)} >
            <Text style={styles.buttonText}>Clean My Coach</Text></Pressable>
        <Pressable style={styles.actionButton} onPress={() => sendSMS("139", `PNR ${PNR}`)} >
            <Text style={styles.buttonText}>Pressable 3</Text></Pressable>
        <Pressable style={styles.actionButton} onPress={() => setInputVisible(true)} >
            <Text style={styles.buttonText}>Reset PNR</Text></Pressable>

        {/* requires train number */}

        <Pressable style={styles.actionButton} onPress={() => setInputVisible(true)} >
            <Text style={styles.buttonText}>Train Arrival/Departure Enquiry</Text></Pressable>
    </View>)
}

export default ActionButtons;