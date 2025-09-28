import { inngest } from "@/lib/inngest/client";
import {
  checkBudgetAlert,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/lib/inngest/function"; // <-- Important: We import your function
import { serve } from "inngest/next";

// This serves all of your functions to the Inngest dev server
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlert,
    triggerRecurringTransactions,
    processRecurringTransaction,
    generateMonthlyReports, // <-- Important: Your function is listed here
    // If you create more functions, add them here too
  ],
});
