import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
    reporter: 'html',
    testMatch: "*.spec.ts",
    timeout: 30000,
    retries: 0,
    use: {
        headless : false,
        screenshot : 'on',
        trace : 'on',
        video: "on",
        viewport: null,
        //launchOptions to open the browser in full screen
        launchOptions: {
            args: ['--start-maximized'], 
        },
    },
};

export default config;