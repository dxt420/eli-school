### Project Requirements
    node: v16.13.0
    npm: v8.1.3
    ionic: v6.18.0
    cordova: 10.0.0
### Build Apk
    Debug: `ionic cordova run android --prod` OR `ionic cordova build android --prod`
    Release: `ionic cordova build android --prod --release --buildConfig=build.json` OR `ionic cordova build android --prod --release --buildConfig=build.json -- -- --packageType=bundle`