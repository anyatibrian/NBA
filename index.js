
import { AppRegistry } from 'react-native';
import AppNavigatior from './src/routes'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigatior);
