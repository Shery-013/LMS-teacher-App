import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    Button,
} from 'react-native';
import React, { useState } from 'react';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Calendar } from 'react-native-calendars';
// import StudentList from './StudentList';

const AddAttendance = () => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
    const [attendanceData, setAttendanceData] = useState([]); // State to hold attendance data

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleDone = () => {
        setModalVisible(false);
        // Navigate to AttendanceList with selected date
        navigation.navigate('StudentList', {
            selectedDate: selectedDate,
            attendanceData: attendanceData, // Pass attendance data
        });
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString); // Update selected date when a day is pressed
        setAttendanceData([]); // Reset attendance data for the new date
    };

    return (
        <View style={styles.container}>
            <View style={styles.Topbar}>
                <Text style={styles.title}>Add New Attendance</Text>
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
                        <Text style={styles.dropDownClass}>A</Text>
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
                        <Text style={styles.dropDownClass}>A</Text>
                    </TouchableOpacity>
                </ListItem>

            </ListItem.Accordion>


            {/* Button to open the calendar modal */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.loginText}>Select Date</Text>
            </TouchableOpacity>

            {/* Modal for Calendar */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Selected Date: {formatDate(new Date(selectedDate))}</Text>

                    {/* Calendar Component */}
                    <Calendar
                        onDayPress={onDayPress}
                        markedDates={{
                            [selectedDate]: { selected: true, marked: true, selectedColor: '#3085FE' },
                        }}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={handleCancel}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={handleDone}
                        >
                            <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.loginText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddAttendance;

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
    loginText: {
        fontSize: 18,
        color: "#fff",
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        backgroundColor: '#3085FE',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
