import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppleIcon from '../../Assets/Icons/Apple';
import MailIcon from '../../Assets/Icons/Email';
import FacebookIcon from '../../Assets/Icons/Facebook';
import GoogleIcon from '../../Assets/Icons/Google';
import LockIcon from '../../Assets/Icons/Lock';
import EyeFalseIcon from '../../Assets/Icons/EyeFalse';
import EyeTrueIcon from '../../Assets/Icons/EyeTrue';
import PersonIcon from '../../Assets/Icons/Person';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giriş Yap</Text>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../Assets/Images/Logo.png')}
          style={styles.logo}
        />
      </View>
      <Text>Ad Soyad</Text>
      <View style={styles.inputContainer}>
        <PersonIcon />
        <TextInput
          placeholder="Ad Soyad"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text>Email</Text>
      <View style={styles.inputContainer}>
        <MailIcon />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '20%'}}>
          <Text>Ülke</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="+90"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={{width: '70%'}}>
          <Text>Telefon Numarası</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="123 456 789"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
      </View>

      <Text>Şifre</Text>
      <View style={styles.inputContainer}>
        <LockIcon />
        <TextInput
          placeholder="Şifre"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {showPassword ? <EyeTrueIcon /> : <EyeFalseIcon />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <Text style={styles.forgotText}>Şifreni mi unuttun?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>VEYA</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AppleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FacebookIcon />
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Hesabınız yok mu? <Text style={styles.signupLink}>Kayıt Ol</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 120,
    objectFit: 'contain',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 15,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: '#333',
  },
  forgotText: {
    fontSize: 12,
    marginLeft: 8,
    color: '#66AE7B',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    borderColor: '#F2F2F2',
    borderWidth: 2,
  },
  signupText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  separatorContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#979797',
    width: '30%',
  },
});

export default SignUpScreen;
