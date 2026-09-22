package com.snoopyscloset.lifeos.offscript2027;

import android.graphics.Color;
import android.os.Bundle;

import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Keep the WebView below the Android status/navigation bars. Without this,
        // Android 15 edge-to-edge behavior can place the sticky header and install
        // banner underneath the system status bar.
        WindowCompat.setDecorFitsSystemWindows(getWindow(), true);
        getWindow().setStatusBarColor(Color.rgb(15, 23, 42));
        getWindow().setNavigationBarColor(Color.rgb(250, 247, 240));

        WindowInsetsControllerCompat controller =
                WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        controller.setAppearanceLightStatusBars(false);
        controller.setAppearanceLightNavigationBars(true);
    }
}
