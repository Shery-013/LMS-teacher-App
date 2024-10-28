import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const AboutTeacher = () => {
    // Sample data for the teacher's profile
    const teacherData = {
        image: require('../assets/teacher1.jpeg'),
        name: 'XYZ',
        majorSubject: 'Mathematics',
        phoneNumber: '+123 456 7890',
        qualification: 'M.Sc. in Mathematics',
        joiningDate: '01-08-2020',
        age: 35,
        payroll: '$4000/month',
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={teacherData.image} style={styles.profileImage} />
                <Text style={styles.name}>{teacherData.name}</Text>
                <Text style={styles.subject}>Subject: {teacherData.majorSubject}</Text>
            </View>

            <View style={styles.detailsContainer}>
                <DetailItem label="Phone Number" value={teacherData.phoneNumber} />
                <DetailItem label="Qualification" value={teacherData.qualification} />
                <DetailItem label="Joining Date" value={teacherData.joiningDate} />
                <DetailItem label="Age" value={`${teacherData.age} years`} />
                <DetailItem label="Payroll" value={teacherData.payroll} />
            </View>
        </ScrollView>
    );
};

// Helper component to display each detail
const DetailItem = ({ label, value }) => (
    <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>{label}:</Text>
        <Text style={styles.detailValue}>{value}</Text>
    </View>
);

export default AboutTeacher;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    subject: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    detailLabel: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
    },
    detailValue: {
        fontSize: 16,
        color: '#333',
    },
});
