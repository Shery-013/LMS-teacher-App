import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Button,
    Alert,
} from 'react-native';

const ShowStudent = ({ navigation }) => {
    // Sample data for students
    const [students, setStudents] = useState([
        {
            id: '1',
            rollNumber: '101',
            name: 'John Doe',
            class: '5th Grade',
            image: 'https://via.placeholder.com/100',
            attendanceStatus: 'Absent', // Default status
        },
        {
            id: '2',
            rollNumber: '102',
            name: 'Jane Smith',
            class: '5th Grade',
            image: 'https://via.placeholder.com/100',
            attendanceStatus: 'Absent',
        },
        {
            id: '3',
            rollNumber: '103',
            name: 'Alice Johnson',
            class: '6th Grade',
            image: 'https://via.placeholder.com/100',
            attendanceStatus: 'Absent',
        },
        {
            id: '4',
            rollNumber: '104',
            name: 'Bob Brown',
            class: '6th Grade',
            image: 'https://via.placeholder.com/100',
            attendanceStatus: 'Absent',
        },
        // Add more students as needed
    ]);

    // Function to handle attendance status change
    const handleAttendanceChange = (id, status) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, attendanceStatus: status } : student
            )
        );
    };

    // Function to handle save attendance
    const handleSaveAttendance = () => {
        const attendanceData = students.map(student => ({
            rollNumber: student.rollNumber,
            name: student.name,
            status: student.attendanceStatus,
        }));

        // You can replace the alert with actual save logic (e.g., API call)
        Alert.alert("Attendance Saved", JSON.stringify(attendanceData, null, 2));
    };

    const renderItem = ({ item }) => (
        <View style={styles.studentRow}>
            <Image source={{ uri: item.image }} style={styles.studentImage} />
            <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{item.name}</Text>
                <Text style={styles.studentDetails}>Roll No: {item.rollNumber}</Text>
                <Text style={styles.studentDetails}>Class: {item.class}</Text>
                <View style={styles.attendanceButtons}>
                    {['Present', 'Absent', 'Leave', 'Half Day'].map(status => (
                        <TouchableOpacity
                            key={status}
                            style={[
                                styles.attendanceButton,
                                item.attendanceStatus === status && styles.selectedButton,
                            ]}
                            onPress={() => handleAttendanceChange(item.id, status)}
                        >
                            <Text style={styles.buttonText}>{status}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading1}>Student List</Text>
            <FlatList
                data={students}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveAttendance}>
                <Text style={styles.saveButtonText}>Save Attendance</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ShowStudent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        marginTop: 20,
    },
    heading1: {
        color: '#000000',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    studentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    studentImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    studentInfo: {
        flex: 1,
    },
    studentName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    studentDetails: {
        fontSize: 14,
        color: '#555',
    },
    attendanceButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
    },
    attendanceButton: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        padding: 5,
        marginRight: 5,
    },
    selectedButton: {
        backgroundColor: '#3085FE',
    },
    buttonText: {
        color: '#000',
    },
    saveButton: {
        backgroundColor: '#3085FE',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});
