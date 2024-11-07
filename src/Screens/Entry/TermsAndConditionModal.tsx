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

interface TermsAndConditionsModalProps {
  visible: boolean;
  onClose: () => void;
}

const TermsAndConditionsModal = ({
  visible,
  onClose,
}: TermsAndConditionsModalProps) => {
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
          <Text style={styles.headerText}>Zorunlu Çerezler</Text>
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

export default TermsAndConditionsModal;
