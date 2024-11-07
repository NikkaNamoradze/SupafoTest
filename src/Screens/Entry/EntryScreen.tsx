import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckboxFalse from '../../Assets/Icons/CheckboxFalse';
import CheckboxTrue from '../../Assets/Icons/CheckboxTrue';
import TermsAndConditionsModal from './TermsAndConditionModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import EntryModal from './EntryModal';
import {useNavigation} from '@react-navigation/native';

const EntryScreen = () => {
  const navigation = useNavigation();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [termsAndConditionsModalVisible, setTermsAndConditionsModalVisible] =
    useState(false);
  const [privacyPolicyModalVisible, setPrivacyPolicyModalVisible] =
    useState(false);
  const [entryModalVisible, setEntryModalVisible] = useState(true);

  const toggleCheckbox1 = () => setIsChecked1(prev => !prev);
  const toggleCheckbox2 = () => setIsChecked2(prev => !prev);

  const handleCloseTermsAndConditionsModal = () => {
    setTermsAndConditionsModalVisible(false);
  };

  const handleClosePrivacyPolicyModal = () => {
    setPrivacyPolicyModalVisible(false);
  };

  const handleNavigationToSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  const handleNavigationToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../Assets/Images/Logo.png')}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigationToSignIn}>
          <Text style={styles.buttonTextLogin}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={handleNavigationToSignUp}>
          <Text style={styles.buttonTextSignUp}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={toggleCheckbox1}>
            {isChecked1 ? <CheckboxTrue /> : <CheckboxFalse />}
          </TouchableOpacity>
          <Text>
            Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun
            şekilde saklamasına izin veriyorum.
          </Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={toggleCheckbox2}>
            {isChecked2 ? <CheckboxTrue /> : <CheckboxFalse />}
          </TouchableOpacity>
          <Text>
            <Text
              onPress={() => setTermsAndConditionsModalVisible(true)}
              style={styles.linkText}>
              Şartlar & Koşullar
            </Text>{' '}
            ve{' '}
            <Text
              onPress={() => setPrivacyPolicyModalVisible(true)}
              style={styles.linkText}>
              Gizlilik Politikasını
            </Text>{' '}
            kabul ediyorum.
          </Text>
        </View>
      </View>
      <TermsAndConditionsModal
        visible={termsAndConditionsModalVisible}
        onClose={handleCloseTermsAndConditionsModal}
      />
      <PrivacyPolicyModal
        visible={privacyPolicyModalVisible}
        onClose={handleClosePrivacyPolicyModal}
      />
      <EntryModal
        visible={entryModalVisible}
        onClose={() => setEntryModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    margin: 15,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    width: '95%',
    backgroundColor: '#66AE7B',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },
  outlineButton: {
    width: '95%',
    paddingVertical: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#66AE7B',
    alignItems: 'center',
  },
  buttonTextLogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSignUp: {
    color: '#66AE7B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    width: '95%',
    gap: 10,
  },
  linkText: {
    color: '#66AE7B',
    textDecorationLine: 'underline',
  },
});

export default EntryScreen;
