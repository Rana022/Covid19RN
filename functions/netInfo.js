import NetInfo from '@react-native-community/netinfo';

export default function netConnection() {
    return NetInfo.fetch().then(state => {
        return state.isConnected;
      });
}

  