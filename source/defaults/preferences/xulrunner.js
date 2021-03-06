// general preference
pref("layout.spellcheckDefault", 2);
pref("toolkit.defaultChromeURI", "chrome://echofon/content/window.xul");
pref("toolkit.defaultChromeFeatures", "dialog=no,width=440,height=640,centerscreen=yes,resizable=yes");
pref("toolkit.singletonWindowType", "Echofon:main");

pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);
pref("geo.wifi.protocol", 0);
pref("geo.wifi.uri", "https://www.google.com/loc/json");

pref("intl.locale.matchOS", true);


// Whether or not app updates are enabled
pref("app.update.enabled", true);

// This preference turns on app.update.mode and allows automatic download and
// install to take place. We use a separate boolean toggle for this to make
// the UI easier to construct.
pref("app.update.auto", true);

// Defines how the Application Update Service notifies the user about updates:
//
// AUM Set to:        Minor Releases:     Major Releases:
// 0                  download no prompt  download no prompt
// 1                  download no prompt  download no prompt if no incompatibilities
// 2                  download no prompt  prompt
//
// See chart in nsUpdateService.js.in for more details
//
pref("app.update.mode", 1);

// If set to true, the Update Service will present no UI for any event.
pref("app.update.silent", false);

// Update service URL:
// You do not need to use all the %VAR% parameters. Use what you need, %PRODUCT%,%VERSION%,%BUILD_ID%,%CHANNEL% for example
pref("app.update.url", "https://echofonads.appspot.com/xulrunner/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%CHANNEL%/update.xml");

// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "http://www.echofon.com/");

// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "http://www.echofon.com/changes/windows");

// User-settable override to app.update.url for testing purposes.
//pref("app.update.url.override", "http://10.1.10.15:8081/xulrunner/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/update.xml");

// Interval: Time between checks for a new version (in seconds)
//           default=1 day
pref("app.update.interval", 86400);

// Interval: Time before prompting the user to download a new version that
//           is available (in seconds) default=1 day
pref("app.update.nagTimer.download", 86400);

// Interval: Time before prompting the user to restart to install the latest
//           download (in seconds) default=30 minutes
pref("app.update.nagTimer.restart", 1800);

// Interval: When all registered timers should be checked (in milliseconds)
//           default=5 seconds
pref("app.update.timer", 600000);

// Whether or not we show a dialog box informing the user that the update was
// successfully applied. This is off in Firefox by default since we show a
// upgrade start page instead! Other apps may wish to show this UI, and supply
// a whatsNewURL field in their brand.properties that contains a link to a page
// which tells users what's new in this new update.
pref("app.update.showInstalledUI", true);

// 0 = suppress prompting for incompatibilities if there are updates available
//     to newer versions of installed addons that resolve them.
// 1 = suppress prompting for incompatibilities only if there are VersionInfo
//     updates available to installed addons that resolve them, not newer
//     versions.
pref("app.update.incompatible.mode", 0);

pref("signon.rememberSignons", false);