import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Modal} from '../../Components/ModalComponent/Modal';
import BackArrow from '../../Assets/Icons/BackArrow';

interface PrivacyPolicyModalProps {
  visible: boolean;
  onClose: () => void;
}

const StaticDataModal = ({visible, onClose}: PrivacyPolicyModalProps) => {
  return (
    <Modal
      visible={visible}
      animation="fade"
      style={{justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Teknik olarak gerekli ve istatistik verileri
          </Text>
        </View>
        <Text style={styles.text}>
          Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri
          topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini
          kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı
          davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve
          anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz.
          Uygulamadan elde edilen istatistiksel veriler toplanır ve
          uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için
          kullanılır.
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default StaticDataModal;
