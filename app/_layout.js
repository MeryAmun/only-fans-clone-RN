import { Stack } from "expo-router";
import { Amplify } from "aws-amplify";
import awsConfig from '../src/aws-exports'
import  { Authenticator } from '@aws-amplify/ui-react-native'
Amplify.configure(awsConfig)
export default function RootLayout(){
    console.log("app is running")
return (
    <Authenticator.Provider>
        <Authenticator>
        <Stack screenOptions={{headerShown:false}}/>
        </Authenticator>
    </Authenticator.Provider>
)
}