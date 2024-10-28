import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, Button } from 'react-native';

// Sample data for homework list
const homeworkData = [
    {
        id: '1',
        question: 'What is Photosynthesis?',
        description: 'Explain the process of Photosynthesis in detail.',
        assignDate: '2023-10-01',
        submissionDate: '2023-10-07',
        class: '8th green',
    },
    {
        id: '2',
        question: 'Math Algebra',
        description: 'Solve the given algebra problems in the notebook.',
        assignDate: '2023-10-02',
        submissionDate: '2023-10-08',
        class: '5th rose',
    },
    // Add more items if needed
];

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedHomework, setSelectedHomework] = useState(null);

    const openModal = (homework) => {
        setSelectedHomework(homework);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedHomework(null);
    };

    const renderHomeworkItem = ({ item }) => (
        <TouchableOpacity
            style={styles.homeworkItem}
            onPress={() => openModal(item)}
        >
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.question}>{item.class}</Text>
            <Text style={styles.dateText}>Assign Date: {item.assignDate}</Text>
            <Text style={styles.dateText}>Submission Date: {item.submissionDate}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Homework List</Text>
            <FlatList
                data={homeworkData}
                renderItem={renderHomeworkItem}
                keyExtractor={(item) => item.id}
            />

            {/* Modal for Homework Details */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.heading}>Homework Details</Text>
                        {selectedHomework && (
                            <>
                                <Text style={styles.label}>Question:</Text>
                                <Text style={styles.content}>{selectedHomework.question}</Text>
                                <Text style={styles.label}>Description:</Text>
                                <Text style={styles.content}>{selectedHomework.description}</Text>
                                <Text style={styles.label}>Assign Date:</Text>
                                <Text style={styles.content}>{selectedHomework.assignDate}</Text>
                                <Text style={styles.label}>Submission Date:</Text>
                                <Text style={styles.content}>{selectedHomework.submissionDate}</Text>
                            </>
                        )}
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#3085FE',
    },
    homeworkItem: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    question: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    dateText: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
    },
    content: {
        fontSize: 15,
        color: '#555',
        marginBottom: 10,
    },
});

export default App;
