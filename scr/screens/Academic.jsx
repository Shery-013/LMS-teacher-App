import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

// import AntDesign from 'react-native-vector-icons/AntDesign';
import { Icon } from '@rneui/base';
const AcademicScreen = ({ navigation }) => {
    // Define the list of boxes with icons and labels
    const boxes = [
        { id: 1, icon: 'calendar', label: 'Time Table', screen: 'TimeTableScreen' },
        { id: 2, icon: 'bar-chart', label: 'My Time Table', screen: 'TeacherSubjectScreen' },
    ];

    return (
        <View>
            <View style={styles.container}>
                {/* Display Welcome Message */}
               <Text style={styles.topHeading}>Academic</Text>
            </View>

            {/* Grid with Touchable Boxes */}
            <View style={styles.gridContainer}>
                {boxes.map((box) => (
                    <TouchableOpacity
                        key={box.id}
                        style={styles.box}
                        onPress={() => navigation.navigate(box.screen)} // Navigate to the corresponding screen
                    >
                        <Icon name={box.icon} type ="ionicon" size={30} color="#3085FE" />
                        <Text style={styles.boxText}>{box.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default AcademicScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
     marginTop: 50,
    },
    gridContainer: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    box: {
        width: '30%', // 3 boxes per row
        aspectRatio: 1, // Makes the box square
        backgroundColor: '#fff',
        marginBottom: 20,
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
    topHeading: {
        color: '#3085FE',
        fontSize: 30,
        marginTop: 15,
        fontWeight: 'bold',
    },
    image: {
        width: 70,
        height: 70,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});
