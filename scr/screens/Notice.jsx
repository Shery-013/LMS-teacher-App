import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Notice = () => {
    // Mock data for daily notices
    const notices = [
        { id: '1', message: 'Math exam will be held on Friday.', date: 'October 24, 2024' },
        { id: '2', message: 'Physics project submission due next Monday.', date: 'October 24, 2024' },
        { id: '3', message: 'Chemistry lab scheduled for Wednesday.', date: 'October 24, 2024' },
        { id: '4', message: 'Parent-Teacher meeting on Saturday.', date: 'October 24, 2024' },
        { id: '5', message: 'English poetry competition next week.', date: 'October 24, 2024' },
    ];

    // Mock data for teacher's subjects


    // Function to render each notice
    const renderNoticeItem = ({ item }) => (
        <View style={styles.noticeItem}>
            <Text style={styles.noticeDate}>{item.date}</Text>
            <Text style={styles.noticeMessage}>{item.message}</Text>
        </View>
    );

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
            {/* Daily Notices */}
            <FlatList
                data={notices}
                renderItem={renderNoticeItem}
                keyExtractor={(item) => item.id}
                style={styles.noticeList}
                ListHeaderComponent={<Text style={styles.title}>Important Notices:</Text>}
            />
        </View>
    );
};

export default Notice;

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
    noticeHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
    },
    noticeList: {
        marginBottom: 20,
    },
    noticeItem: {
        padding: 10,
        backgroundColor: '#e0f7fa',
        borderRadius: 5,
        marginBottom: 10,
    },
    noticeDate: {
        fontSize: 12,
        color: '#555',
    },
    noticeMessage: {
        fontSize: 14,
        color: '#000',
    },
    // Table header styles
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#3085FE',
        padding: 10,
    },
    tableHeaderText: {
        fontWeight: 'bold',
        color: '#fff',
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
    // FlatList content style
    tableContent: {
        marginTop: 10,
    },
});
