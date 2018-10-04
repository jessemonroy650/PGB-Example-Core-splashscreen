# PGB-Example-Core-Splashscreen
PGB Example Core using the Cordova 'Splashscreen' plugin

This app uses the Cordova 'Device' & Splashscreen' plugin.

The app uses the 'Device' and 'Splashscreen' plugins. As well as BOM (Browser Object Model) Objects available on Android' Webview. 

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-splashscreen

**Note** Android apps are not required to have splashscreens or to have all sizes. However, professional developers should encourage clients to have a more professional appearance. See *Android Developer Documentation* [App startup time](https://developer.android.com/topic/performance/vitals/launch-time) and [User Interface & Navigation](https://developer.android.com/guide/topics/ui/)

## Android config.xml

[Docs: App Icon and Splash Screen Sizes](https://github.com/phonegap/phonegap/wiki/App-Splash-Screen-Sizes)

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

### Splash Screen Sizes

**Portrait**

* LDPI: 200x320px
* MDPI: 320x480px
* HDPI: 480x800px
* XHDPI: 720px1280px
* XXHDPI: 960px1600px
* XXXHDPI: 1280px1920px

**Landscape**

* LDPI: 320x200px
* MDPI: 480x320px
* HDPI: 800x480px
* XHDPI: 1280x720px
* XXHDPI: 1600x960px
* XXXHDPI: 1920x1280px

### Preferences

 [Docs](https://www.npmjs.com/package/cordova-plugin-splashscreen#preferences)

    <preference name="AutoHideSplashScreen" value="true" />
    <preference name="SplashScreenDelay" value="3000" />

**Note** also that this value used to be seconds, and not milliseconds, so values less than 30 will still be treated as seconds. ( Consider this a deprecated patch that will disapear in some future version. )

To disable the splashscreen add the following preference to config.xml:

    <preference name="SplashScreenDelay" value="0"/>

### Android Quirks

 [Docs](https://www.npmjs.com/package/cordova-plugin-splashscreen#android-quirks)

    <preference name="SplashMaintainAspectRatio" value="true|false" />
    <preference name="SplashShowOnlyFirstTime" value="true|false" />
    <preference name="SplashScreenSpinnerColor" value="white" />

## Methods

 [Docs](https://www.npmjs.com/package/cordova-plugin-splashscreen#methods)

* splashscreen.show()
* splashscreen.hide()
