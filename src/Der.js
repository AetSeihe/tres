import React, { useState} from 'react';
import {
  View
} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { WebView } from 'react-native-webview';

export default function Der() { return (<WebView source={{ uri: 'https://tree-life.site/admin/derevo_mob.php' }} />); };

