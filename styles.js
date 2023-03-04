import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'stretch'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 12,
        marginHorizontal: 8
    },
    title: {
        fontSize: 32,
    },
    PNRHeader: {
        fontSize: 32,
    },
    PNRInput: {
        height: 40, borderColor: 'gray', borderWidth: 1,
        marginRight: 10, flex: 3,
        padding: 4

    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        flex: 1
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#333",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 4,
        borderRadius: 5,

    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

});
