import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Alert } from 'react-native';

const Setting = () => {
    const [languageModalVisible, setLanguageModalVisible] = useState(false);
    const [passwordModalVisible, setPasswordModalVisible] = useState(false);

    const handleDeleteAccount = () => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete your account?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => {
                        // Handle app exit or deletion action here
                        console.log("Account deleted");
                    },
                },
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Settings</Text>
            
            <View style={styles.optionsContainer}>
                {/* Change Language Option */}
                <TouchableOpacity style={styles.optionButton} onPress={() => setLanguageModalVisible(true)}>
                    <Text style={styles.optionText}>Change Language</Text>
                </TouchableOpacity>
                
                {/* Change Password Option */}
                <TouchableOpacity style={styles.optionButton} onPress={() => setPasswordModalVisible(true)}>
                    <Text style={styles.optionText}>Change Password</Text>
                </TouchableOpacity>

                {/* Delete Account Option */}
                <TouchableOpacity style={[styles.optionButton, { backgroundColor: '#FF3B30' }]} onPress={handleDeleteAccount}>
                    <Text style={styles.optionText}>Delete Account</Text>
                </TouchableOpacity>
            </View>

            {/* Change Language Modal */}
            <Modal visible={languageModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Language</Text>
                        <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
                            <Text style={styles.languageOption}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
                            <Text style={styles.languageOption}>Urdu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
                            <Text style={styles.languageOption}>Arabic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setLanguageModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Change Password Modal */}
            <Modal visible={passwordModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Change Password</Text>
                        <TextInput placeholder="Old Password" secureTextEntry style={styles.input} />
                        <TextInput placeholder="New Password" secureTextEntry style={styles.input} />
                        <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
                        <TouchableOpacity style={styles.saveButton} onPress={() => setPasswordModalVisible(false)}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setPasswordModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3085FE',
        marginBottom: 40,
    },
    optionsContainer: {
        width: '100%',
    },
    optionButton: {
        backgroundColor: '#3085FE',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    languageOption: {
        fontSize: 18,
        color: '#3085FE',
        paddingVertical: 10,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: '#3085FE',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        marginTop: 15,
    },
    closeButtonText: {
        color: '#3085FE',
        fontSize: 16,
    },
});
