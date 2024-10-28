import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { ListItem } from '@rneui/themed';

const TimeTable = ({ navigation }) => {
    // States for managing accordion expansion and form inputs
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [searchByName, setSearchByName] = useState(''); // State for search by name
    const [searchByRollNo, setSearchByRollNo] = useState(''); // State for search by roll number

    return (
        <View style={styles.container}>
            <View style={styles.Topbar}>
                <Text style={styles.title}>My Routine</Text>
            </View>

            {/* Accordion for selecting Class */}
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Class</ListItem.Title>
                        <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => setExpanded(!expanded)}
            >
                <ListItem>
                    <TouchableOpacity>
                        <Text style={styles.dropDownClass}>A</Text>
                    </TouchableOpacity>
                </ListItem>
            </ListItem.Accordion>

            {/* Accordion for selecting Section */}
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title>Section</ListItem.Title>
                        <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                    </ListItem.Content>
                }
                isExpanded={expanded1}
                onPress={() => setExpanded1(!expanded1)}
            >
                <ListItem>
                    <TouchableOpacity>
                        <Text style={styles.dropDownClass}>A</Text>
                    </TouchableOpacity>
                </ListItem>
            </ListItem.Accordion>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.loginText}>Search</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default TimeTable;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    Topbar: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3085FE',
        marginBottom: 20,
        textAlign: 'center',
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
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    dropDownClass: {
        color: 'black',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#3085FE',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    loginText: {
        fontSize: 18,
        color: '#fff',
    },
});
