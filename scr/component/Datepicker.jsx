import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { View,Text } from 'react-native'
import {Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
export default (props) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      

        <TouchableOpacity title="Open" onPress={() => setOpen(true)}>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',padding:5,alignItems:'center',borderBottomWidth:1,}}>
            <Text style={{color:'black',marginLeft:10}}>{props.title}</Text>
            <Icon
              name="calendar-month"
              type="material"
              color={'black'}
              style={{width: 40,marginBottom:5,alignItems:'center'}}
              size={25}
            />
        </View>
        </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}