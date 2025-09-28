import { Inngest } from "inngest";

// This client is configured for LOCAL DEVELOPMENT
export const inngest = new Inngest({
  id: "finura",
  name: "Finura",

  // This key is read from your .env file
  eventKey: process.env.INNGEST_EVENT_KEY,

  // This flag tells the client to connect to your local Inngest server
  dev: true,
});
