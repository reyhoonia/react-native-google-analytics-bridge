import { Platform } from "react-native";
import FunctionCallTagHandlerAndroid from "./FunctionCallTagHandlerAndroid";
import FunctionCallTagHandlerIOS from "./FunctionCallTagHandlerIOS";
const FunctionCallTagHandler = Platform.select({
    ios: FunctionCallTagHandlerIOS,
    android: FunctionCallTagHandlerAndroid
});
export default FunctionCallTagHandler;
