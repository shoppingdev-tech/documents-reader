package com.bucket.list;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SettingsModule extends ReactContextBaseJavaModule {

    public SettingsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "SettingsModule";
    }

    @ReactMethod
    public void openManageAllFilesAccessSettings() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            Intent intent = new Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION, Uri.parse("package:" + getReactApplicationContext().getPackageName()));
            getReactApplicationContext().startActivity(intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
        }
    }
}