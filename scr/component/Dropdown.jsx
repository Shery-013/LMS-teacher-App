import React from "react";
import { View, Text } from "react-native";
import { ListItem } from '@rneui/themed'; 

const Dropdown = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = React.useState("Select the Type");

  // Function to handle when a user selects a leave type
  const handleLeaveTypeSelect = (type) => {
    setSelectedLeaveType(type);  // Set the selected leave type
    setExpanded(false);  // Collapse the accordion after selection
  };

  return (
    <>
      <View style={{borderWidth:1}}>
        
          <ListItem.Accordion
            content={
              <ListItem.Content>
                <ListItem.Title>
                  <Text>{selectedLeaveType}</Text>  {/* Display selected leave type */}
                </ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);  // Toggle the accordion
            }}
          >
            {/* List of leave types */}
            <ListItem onPress={() => handleLeaveTypeSelect("Casual Leave")}>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>Casual Leave</Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem onPress={() => handleLeaveTypeSelect("Sick Leave")}>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>Sick Leave</Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem onPress={() => handleLeaveTypeSelect("Annual/Vacation Leave")}>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>Annual/Vacation Leave</Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem onPress={() => handleLeaveTypeSelect("Earned Leave")}>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>Earned Leave</Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            <ListItem onPress={() => handleLeaveTypeSelect("Public Holidays")}>
              <ListItem.Content>
                <ListItem.Title>
                  <Text>Public Holidays</Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </ListItem.Accordion>
        </View>
    </>
  );
};

export default Dropdown;
