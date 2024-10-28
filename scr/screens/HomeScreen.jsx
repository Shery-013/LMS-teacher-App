import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
    // Define the list of boxes with icons and labels
    const boxes = [
        { id: 1, icon: 'user', label: 'Student', screen: 'StudentScreen' },
        { id: 2, icon: 'book', label: 'Academic', screen: 'AcademicScreen' },
        { id: 3, icon: 'checksquareo', label: 'Attendance', screen: 'AttendanceScreen' },
        { id: 4, icon: 'home', label: 'Leave', screen: 'Leave' },
        { id: 6, icon: 'codesquareo', label: 'Notice', screen: 'Notice' },
        { id: 8, icon: 'form', label: 'Home Work', screen: 'HomeWorkScreen' },
        { id: 9, icon: 'solution1', label: 'About', screen: 'AboutTeacher' },
        { id: 11, icon: 'setting', label: 'Settings', screen: 'SettingScreen' },
    ];

    return (
        <View>
            <View style={styles.container}>
                {/* Display Welcome Message */}
                <View style={styles.topContainer}>
                    <Image
                        source={require('../assets/schoollogo.png')}
                        style={styles.image}
                    />
                </View>
            </View>

            {/* Grid with Touchable Boxes */}
            <View style={styles.gridContainer}>
                {boxes.map((box) => (
                    <TouchableOpacity
                        key={box.id}
                        style={styles.box}
                        onPress={() => navigation.navigate(box.screen)} // Navigate to the corresponding screen
                    >
                        <AntDesign name={box.icon} size={30} color="#3085FE" />
                        <Text style={styles.boxText}>{box.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    gridContainer: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    box: {
        width: '35%', // 3 boxes per row
        aspectRatio: 1, // Makes the box square
        backgroundColor: '#fff',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3, // For Android shadow
    },
    boxText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3085FE',
    },
    heading1: {
        color: '#fff',
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});
