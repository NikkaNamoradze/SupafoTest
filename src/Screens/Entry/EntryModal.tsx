import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CloseIcon from '../../Assets/Icons/Close';
import {Modal} from '../../Components/ModalComponent/Modal';
import MarketingModal from './MarketingModal';
import StaticDataModal from './StaticDataModal';
import {useNavigation} from '@react-navigation/native';

interface TermsAndConditionsModalProps {
  visible: boolean;
  onClose: () => void;
}

const EntryModal = ({visible, onClose}: TermsAndConditionsModalProps) => {
  const navigation = useNavigation();

  const [mandatoryCookies, setMandatoryCookies] = useState(true);
  const [optionalCookies, setOptionalCookies] = useState(false);
  const [staticDataModalVisible, setStaticDataModalVisible] = useState(false);
  const [marketingModalVisible, setMarketingModalVisible] = useState(false);

  const handleShowStaticDataModal = () => {
    setStaticDataModalVisible(true);
  };
  const handleShowMarketingModal = () => {
    setMarketingModalVisible(true);
  };

  const handleNavigationToSignIn = () => {
    onClose();
    navigation.navigate('SignInScreen');
  };

  return (
    <Modal
      visible={visible}
      animation="fade"
      style={{justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeIconContainer} onPress={onClose}>
            <CloseIcon />
          </TouchableOpacity>
          <View style={styles.divider} />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.switchContainer}>
            <View>
              <Text style={styles.sectionTitle}>Zorunlu Çerezler</Text>
              <Text style={styles.sectionSubtitle}>
                Teknik olarak gerekli ve istatistiksel veriler
              </Text>
            </View>
            <Switch
              value={mandatoryCookies}
              onValueChange={value => setMandatoryCookies(value)}
              style={[
                styles.switch,
                {transform: [{scaleY: 0.8}, {scaleX: 0.8}]},
              ]}
            />
          </View>
          <Text style={styles.description}>
            Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri
            topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini
            kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini,
            kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz
            etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de
            topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır
            ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek
            için kullanılır.
          </Text>
          <TouchableOpacity onPress={handleShowStaticDataModal}>
            <Text style={styles.readMore}>Devamını Oku {'>'}</Text>
          </TouchableOpacity>
          <View style={styles.switchContainer}>
            <View>
              <Text style={styles.sectionTitle}>İsteğe Bağlı Çerezler</Text>
              <Text style={styles.sectionSubtitle}>Pazarlama</Text>
            </View>
            <Switch
              value={optionalCookies}
              onValueChange={value => setOptionalCookies(value)}
              style={[
                styles.switch,
                {transform: [{scaleY: 0.8}, {scaleX: 0.8}]},
              ]}
            />
          </View>
          <Text style={styles.description}>
            Kişisel verilerinizi, size ilgi alanlarınıza uygun
            kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla
            pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda
            israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer
            ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de
            kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da
            kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz.
            Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil
            oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş
            olursunuz...
          </Text>
          <TouchableOpacity onPress={handleShowMarketingModal}>
            <Text style={styles.readMore}>Devamını Oku {'>'}</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigationToSignIn}>
            <Text style={styles.buttonText}>Hepsine İzin Ver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigationToSignIn}>
            <Text style={styles.buttonText}>Seçime İzin Ver</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StaticDataModal
        visible={staticDataModalVisible}
        onClose={() => setStaticDataModalVisible(false)}
      />
      <MarketingModal
        visible={marketingModalVisible}
        onClose={() => setMarketingModalVisible(false)}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    gap: 10,
  },
  closeIconContainer: {
    alignSelf: 'flex-end',
  },
  divider: {
    width: '100%',
    borderColor: '#DADADA',
    borderWidth: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#00000080',
    marginBottom: 10,
    marginTop: 10,
  },
  readMore: {
    color: '#66AE7B',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  switch: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    gap: 15,
  },
  button: {
    backgroundColor: '#66AE7B',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EntryModal;
