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

const MarketingModal = ({visible, onClose}: PrivacyPolicyModalProps) => {
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
          <Text style={styles.headerText}>Pazarlama</Text>
        </View>
        <Text style={styles.text}>
          Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş
          reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla
          kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme
          vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip
          potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri
          profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf
          reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek
          kişisel verilerinizin profil oluşturma ve pazarlama amacıyla
          kullanılmasına izin vermiş olursunuz. Onayınızı her zaman uygulamanın
          ayarlarından geri çekebilirsiniz.
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

export default MarketingModal;
