import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "livereload-bug",
  bundledWebRuntime: true,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
  // server: {
  //   //  android simulator treats the host machine's ip as 10.0.2.2
  //   url: "http://10.0.0.2:3000",
  //   cleartext: true,
  // },
};

export default config;
