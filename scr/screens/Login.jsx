import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  // State for email, password, and password visibility (secureEntry)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  // Hook to navigate to other screens
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* School Logo Image */}
      <View style={styles.imageBox}>
      <Image
        source={require('../assets/schoollogo.png')}
        style={styles.image}
      />
      </View>

      {/* Welcome Text */}
      {/* <Text style={styles.heading1}>Welcome Back To</Text>
      <Text style={styles.heading2}>School</Text> */}

      {/* Email Input Field */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          {/* Icon for Email */}
          <Ionicons
            name={'mail-outline'}
            size={20}
            color={'black'}
            style={{ marginLeft: 10 }}
          />

          {/* Email TextInput */}
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email"
            placeholderTextColor={'#808080'}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          {/* Icon for Password */}
          <Ionicons
            name={'key-outline'}
            size={20}
            color={'#808080'}
          />

          {/* Password TextInput */}
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Password"
            placeholderTextColor={'#808080'}
            secureTextEntry={secureEntry}
            value={password}
            onChangeText={setPassword}
          />

          {/* Toggle Password Visibility */}
          <TouchableOpacity
            onPress={() => setSecureEntry(prev => !prev)}
          >
            <Ionicons
              name={secureEntry ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={'#3085FE'}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={()=>navigation.navigate('HomeScreen')} // Navigates to HomeScreen
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    // alignItems:'center',
    marginTop: 20,
  },
  heading1: {
    color: '#000000',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  heading2: {
    color: '#000000',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    color: '#000',
    paddingHorizontal: 10,
  },
  image: {
    // marginLeft: 110,
    marginTop: 50,
    width: 150,
    height: 150,
  },
  loginButton: {
    backgroundColor: '#3085FE',
    marginTop: 40,
    borderRadius: 100,
    padding: 10,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageBox:{
    alignItems:'center',
    marginBottom: 50,
  }
});
