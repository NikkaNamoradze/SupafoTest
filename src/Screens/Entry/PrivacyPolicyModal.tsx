import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import BackArrow from '../../Assets/Icons/BackArrow';
import { Modal } from '../../Components/ModalComponent/Modal';

interface PrivacyPolicyModalProps {
  visible: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({visible, onClose}: PrivacyPolicyModalProps) => {
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
          <Text style={styles.headerText}>Gizlilik Politikası</Text>
        </View>
        <Text style={styles.text}>
          Şartlar ve koşullara ve Gizlilik Politikasına ait metin girilecek.
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

export default PrivacyPolicyModal;
