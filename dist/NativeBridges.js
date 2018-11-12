import { NativeModules } from "react-native";
const { GoogleTagManagerBridge, GoogleAnalyticsBridge, GoogleAnalyticsSettings } = NativeModules;
if (!GoogleTagManagerBridge ||
    !GoogleAnalyticsBridge ||
    !GoogleAnalyticsSettings) {
    console.error("Something went wrong initializing the native react-native-google-analytics-bridge module.\nPlease check your configuration.\nDid you forget to run 'react-native link' or install your node_modules?");
}
const AnalyticsBridge = GoogleAnalyticsBridge;
const TagManagerBridge = GoogleTagManagerBridge;
const AnalyticsSettings = GoogleAnalyticsSettings;
export { TagManagerBridge };
export { AnalyticsBridge };
export { AnalyticsSettings };
