# PGB-Example-Core-Splashscreen

PGB Example Core using the Cordova 'Splashscreen' plugin

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-splashscreen


## Android config.xml

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
 
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>

### Preferences

    <preference name="AutoHideSplashScreen" value="true" />
    <preference name="SplashScreenDelay" value="3000" />

**Note** also that this value used to be seconds, and not milliseconds, so values less than 30 will still be treated as seconds. ( Consider this a deprecated patch that will disapear in some future version. )

To disable the splashscreen add the following preference to config.xml:

    <preference name="SplashScreenDelay" value="0"/>

### [Android Quirks](https://www.npmjs.com/package/cordova-plugin-splashscreen#android-quirks)

    <preference name="SplashMaintainAspectRatio" value="true|false" />
    <preference name="SplashShowOnlyFirstTime" value="true|false" />
    <preference name="SplashScreenSpinnerColor" value="white" />

## Methods

* splashscreen.show()
* splashscreen.hide()
