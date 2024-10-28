import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';

const TeacherSubject = ({ navigation }) => {
    // Mock data for teacher's subjects with time only
    const subjects = [
        { id: '1', subjectName: 'Mathematics', className: 'Class 10', time: '10:00 AM to 11:00' },
        { id: '2', subjectName: 'Physics', className: 'Class 9', time: '10:00 AM to 11:00' },
        { id: '3', subjectName: 'Chemistry', className: 'Class 11', time: '10:00 AM to 11:00' },
        { id: '4', subjectName: 'Biology', className: 'Class 12', time: '10:00 AM to 11:00' },
        { id: '5', subjectName: 'English', className: 'Class 8', time: '10:00 AM to 11:00' },
    ];

    // Function to render each subject in a table row
    const renderSubjectRow = ({ item }) => (
        <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.subjectName}</Text>
            <Text style={styles.tableCell}>{item.className}</Text>
            <Text style={styles.tableCell}>{item.time}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Teacher's Time Table</Text>

            {/* Table Header */}
            <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Subject</Text>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Class</Text>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Time</Text>
            </View>

            {/* Table Content */}
            <FlatList
                data={subjects}
                renderItem={renderSubjectRow}
                keyExtractor={(item) => item.id}
                style={styles.tableContent}
            />
        </View>
    );
};

export default TeacherSubject;

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
        textAlign: 'center',
    },
    // Table header styles
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#3085FE',
        padding: 10,
        
    },
    tableHeaderText: {
        fontWeight: 'bold',
    },
    // Table row styles
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: {
        flex: 1,
        fontSize: 12,
        color: '#000',
        textAlign: 'center',
    },
    tableHeder: {
        flex: 1,
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    // FlatList content style
    tableContent: {
        marginTop: 10,
    },
});
