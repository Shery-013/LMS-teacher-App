import React, { useState } from "react";
import { View,Text } from "react-native";
import Leavelisttabs from "../component/Leavelisttabs";
const Leavelist = () => {
  return(
    <>
    <View style={{height:'100%',backgroundColor:'white'}}>
        
        <View style={{padding:20}}>
            <Text style={{color:'#3085FE',fontSize:20,fontWeight:'600'}}>My Leave</Text>
            <View style={{marginTop:10}}>
                <View style={{width:'100%',flexDirection:'row'}}>
                    <View style={{width:'60%'}}>
                        <Text style={{color:'black'}}>Casual Leave</Text>
                    </View>
                    <View style={{width:'40%'}}>
                        <Text style={{color:'black'}}>8 days</Text>
                    </View>
                </View>

                <View style={{width:'100%',flexDirection:'row'}}>
                    <View style={{width:'60%'}}>
                        <Text style={{color:'black'}}>Sick Leave</Text>
                    </View>
                    <View style={{width:'40%'}}>
                        <Text style={{color:'black'}}>8 days</Text>
                    </View>
                </View>

                <View style={{width:'100%',flexDirection:'row'}}>
                    <View style={{width:'60%'}}>
                        <Text style={{color:'black'}}>Annual/Vacation Leave</Text>
                    </View>
                    <View style={{width:'40%'}}>
                        <Text style={{color:'black'}}>8 days</Text>
                    </View>
                </View>

                <View style={{width:'100%',flexDirection:'row'}}>
                    <View style={{width:'60%'}}>
                        <Text style={{color:'black'}}>Earned Leave</Text>
                    </View>
                    <View style={{width:'40%'}}>
                        <Text style={{color:'black'}}>8 days</Text>
                    </View>
                </View>

                <View style={{width:'100%',flexDirection:'row'}}>
                    <View style={{width:'60%'}}>
                        <Text style={{color:'black'}}>Public holidays</Text>
                    </View>
                    <View style={{width:'40%'}}>
                        <Text style={{color:'black'}}>8 days</Text>
                    </View>
                </View>
            </View>
        </View>
        <View>
        <Text style={{color:'black',fontSize:20,fontWeight:'600',margin:20}}>Leave List</Text>
        <View style={{height:460}}>
            <Leavelisttabs/>
        </View>
        </View>
    </View>
    </>
  )
};

export default Leavelist;
