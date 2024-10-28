import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,

} from 'react-native';
import React, { useState } from 'react';
import { ListItem } from '@rneui/themed'; // Ensure this import includes Avatar
const Student = ({ navigation }) => {
    // State for email, password, password visibility (secureEntry), and accordion expansion
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);
    const [expanded, setExpanded] = useState(false); // State for accordion expansion
    const [expanded1, setExpanded1] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.Topbar}>
                <Text style={styles.title}>Student search</Text>
            </View>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Class</ListItem.Title>
                        <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                <ListItem>
                    <TouchableOpacity>
                        <Text style={styles.dropDownClass} >A</Text>
                    </TouchableOpacity>
                </ListItem>
            </ListItem.Accordion>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Section</ListItem.Title>
                        <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expanded1}
                onPress={() => {
                    setExpanded1(!expanded1);
                }}
            >
                <ListItem>
                    <TouchableOpacity>
                        <Text style={styles.dropDownClass} >A</Text>
                    </TouchableOpacity>
                </ListItem>
            </ListItem.Accordion>
            <View>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search By Name"
                            placeholderTextColor={'#808080'}
                            keyboardType="text"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search By RollNo"
                            placeholderTextColor={'#808080'}
                            keyboardType="numeric"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.loginText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Student;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3085FE',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    dropDownClass: {
        color: 'black',
    },


    button: {
        backgroundColor: '#3085FE',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    loginText:{
        fontSize: 18,
        color: "#fff",

    },
   
});
