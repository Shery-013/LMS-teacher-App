import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { View } from 'react-native';
export default () => {
    const [index, setIndex] = React.useState(0);

    return (
        <>
            <Tab
                value={index}
                containerStyle={{ backgroundColor: '#3085FE' }}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Pending"
                    titleStyle={{ fontSize: 12 }}

                />
                <Tab.Item
                    title="Approved"
                    titleStyle={{ fontSize: 12 }}

                />
                <Tab.Item
                    title="Rejected"
                    titleStyle={{ fontSize: 12 }}

                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                            No data available
                        </Text>
                    </View>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                            No data available
                        </Text>
                    </View>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                            No data available
                        </Text>
                    </View>
                </TabView.Item>
            </TabView>
        </>
    );
};