import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const AddHomeWork = () => {
    const [question, setQuestion] = useState('');
    const [description, setDescription] = useState('');
    const [assignDate, setAssignDate] = useState(new Date());
    const [submissionDate, setSubmissionDate] = useState(new Date());
    const [showAssignDatePicker, setShowAssignDatePicker] = useState(false);
    const [showSubmissionDatePicker, setShowSubmissionDatePicker] = useState(false);

    const handleSubmit = () => {
        if (!question || !description || !assignDate || !submissionDate) {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Homework Submitted:', {
            question,
            description,
            assignDate,
            submissionDate,
        });
        setQuestion('');
        setDescription('');
        setAssignDate(new Date());
        setSubmissionDate(new Date());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Homework</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Question"
                placeholderTextColor="#888"
                color= '#000'
                value={question}
                onChangeText={(text) => setQuestion(text)}
            />

            {/* Assign Date Picker */}
            <TouchableOpacity onPress={() => setShowAssignDatePicker(true)}>
                <Text style={styles.dateText}>
                    Assign Date: {assignDate.toLocaleDateString()}
                </Text>
            </TouchableOpacity>
            <DatePicker
                modal
                open={showAssignDatePicker}
                date={assignDate}
                mode="date"
                onConfirm={(date) => {
                    setShowAssignDatePicker(false);
                    setAssignDate(date);
                }}
                onCancel={() => {
                    setShowAssignDatePicker(false);
                }}
            />

            {/* Submission Date Picker */}
            <TouchableOpacity onPress={() => setShowSubmissionDatePicker(true)}>
                <Text style={styles.dateText}>
                    Submission Date: {submissionDate.toLocaleDateString()}
                </Text>
            </TouchableOpacity>
            <DatePicker
                modal
                open={showSubmissionDatePicker}
                date={submissionDate}
                mode="date"
                onConfirm={(date) => {
                    setShowSubmissionDatePicker(false);
                    setSubmissionDate(date);
                }}
                onCancel={() => {
                    setShowSubmissionDatePicker(false);
                }}
            />

            <TextInput
                style={[styles.input, styles.description]}
                placeholder="Enter Description"
                placeholderTextColor="#888"
                color= '#000'
                value={description}
                onChangeText={(text) => setDescription(text)}
                multiline={true}
            />

            <Button title="Submit" onPress={handleSubmit} color="#3085FE" />
        </View>
    );
};

export default AddHomeWork;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3085FE',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    dateText: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    description: {
        height: 100,
        textAlignVertical: 'top',
    },
});
