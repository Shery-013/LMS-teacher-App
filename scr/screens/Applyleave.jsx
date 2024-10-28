import React, { useState } from "react";
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
import { Input } from '@rneui/themed';
import Dropdown from "../component/Dropdown";
import Datepicker from "../component/Datepicker";


const Applyleave = () => {
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Initial height of the input

  return (
    <>


      <View style={{ height: '100%', backgroundColor: 'white' }}>
      <Text style={styles.heading} >Apply for the Leave</Text>
        <View style={{ padding: 20 }}>
          <Dropdown />
          <Datepicker title="Apply Date" />
          <Datepicker title="From Date" />
          <Datepicker title="To Date" />
          <Input
            placeholder="Enter your Reason"
            leftIconContainerStyle={{ marginLeft: 15 }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'black',
              marginTop: 10,
              borderRadius: 10,
            }}
            rightIconContainerStyle={{ marginRight: 15 }}
            multiline={true}              // Enable multiline input
            textAlignVertical="top"       // Align the text to the top when typing
            value={text}                  // Controlled input
            onChangeText={(value) => setText(value)} // Update text on change
            onContentSizeChange={(contentSize) => {
              // Adjust the input height based on content size
              setInputHeight(contentSize.height); // Update height state
            }}
            style={{ height: inputHeight }} // Set dynamic height
          />
          <View>
          <Button title="submit">
          </Button>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  heading: {

    color: '#3085FE',
    fontSize: 20,
   padding: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  innerContainer: {
    padding: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 10,
  },
});

export default Applyleave;
