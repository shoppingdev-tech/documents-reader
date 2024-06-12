# How to run
- yarn
- if you want to run the app on android `yarn android`
- For iOS:
  - Install the cocoapods `sudo gem install cocoapods`
  - run the `pod install` first on your ios project folder.
  - `yarn ios`
  
# How to make build
- Generating Signed APK `cd android && ./gradlew assembleRelease`
- Generating the release APK for Publishing to Google Play Store `cd android && ./gradlew bundleRelease`
