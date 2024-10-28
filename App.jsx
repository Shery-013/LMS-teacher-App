import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './scr/screens/Login'; // Ensure this path is correct
import HomeScreen from './scr/screens/HomeScreen'; 
import StudentScreen from './scr/screens/Student';
import AcademicScreen from './scr/screens/Academic';
import TimeTableScreen from './scr/screens/timeTable';
import TeacherSubjectScreen from './scr/screens/TeacherSubject';
import AttendanceScreen from './scr/screens/Attendance';
import AddAttendance from './scr/screens/AddAttendance';
import StudentList from './scr/screens/StudentList';
import SearchAttandance from './scr/screens/SearchAttandance';
import MontlyAttandance from './scr/screens/MontlyAttandance';
import Leave from './scr/screens/Leave';
import Applyleave from './scr/screens/Applyleave';
import Leavelist from './scr/screens/Leavelist';
import Notice from './scr/screens/Notice';
import HomeWorkScreen from './scr/screens/HomeWork';
import AddHomeWork from './scr/screens/AddHomeWork';
import HomeWorkList from './scr/screens/HomeWorkList';
import AboutTeacher from './scr/screens/AboutTeacher';
import SettingScreen from './scr/screens/Setting';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
       < Stack.Screen name="StudentScreen" component={StudentScreen} />
       < Stack.Screen name="AcademicScreen" component={AcademicScreen} />
       < Stack.Screen name="TimeTableScreen" component={TimeTableScreen} />
       < Stack.Screen name="TeacherSubjectScreen" component={TeacherSubjectScreen} />
       < Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
       < Stack.Screen name="AddAttendance" component={AddAttendance} />
       < Stack.Screen name="StudentList" component={StudentList} />
       < Stack.Screen name="SearchAttandance" component={SearchAttandance} />
       < Stack.Screen name="MontlyAttandance" component={MontlyAttandance} />
       < Stack.Screen name="Leave" component={Leave} />
       < Stack.Screen name="Applyleave" component={Applyleave} />
       < Stack.Screen name="Leavelist" component={Leavelist} />
       < Stack.Screen name="Notice" component={Notice} />
       < Stack.Screen name="HomeWorkScreen" component={HomeWorkScreen} />
       < Stack.Screen name="AddHomeWork" component={AddHomeWork} />
       < Stack.Screen name="HomeWorkList" component={HomeWorkList} />
       < Stack.Screen name="AboutTeacher" component={AboutTeacher} />
       < Stack.Screen name="SettingScreen" component={SettingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
