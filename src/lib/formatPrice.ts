/**
 * Shared price/timestamp formatters for use in client and server code.
 * No server-only or fetch logic; safe to import from client components.
 */

export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      return "Just now";
    }
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  } catch {
    return "Just now";
  }
}

export function formatChange(change: number, changePercent: number): string {
  const sign = change >= 0 ? "+" : "";
  const formattedChange = formatUSD(Math.abs(change)).replace("$", "");
  return `${sign}${change >= 0 ? "" : "-"}$${formattedChange} (${sign}${changePercent.toFixed(2)}%)`;
}
