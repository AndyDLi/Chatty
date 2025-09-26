import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
import { ENV } from "../lib/env.js"; // load environment variables

// arcjet instance for bot detection, filtering, and rate limiting
const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    // shield protects your app from common attacks e.g. SQL injection
    shield({ mode: "LIVE" }),
    // create a bot detection rule
    detectBot({
      mode: "LIVE", // blocks requests. Use "DRY_RUN" to log only
      // block all bots EXCEPT the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        // Uncomment to allow these other common bot categories
        // See the full list at https://arcjet.com/bot-list
        //"CATEGORY:MONITOR", // Uptime monitoring services
        //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
      ],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    slidingWindow({
        mode: "LIVE",
        max: 100, // max 100 requests
        interval: 60 // per 60 seconds
    }),
  ],
});

export default aj;