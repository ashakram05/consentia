type LogLevel = "info" | "error" | "warn" | "debug" | "action";

export class Logger {
  private context: string;
  private isServer: boolean;

  constructor(context: string) {
    this.context = context;
    this.isServer = typeof window === "undefined";
  }

  private getTimestamp(): string {
    return new Date().toISOString();
  }

  private getColorCode(level: LogLevel): string {
    if (!this.isServer) return "";
    const colors: Record<LogLevel, string> = {
      info: "\x1b[34m",
      error: "\x1b[31m",
      warn: "\x1b[33m",
      debug: "\x1b[90m",
      action: "\x1b[35m",
    };
    return colors[level];
  }

  private reset = "\x1b[0m";

  private formatMessage(level: LogLevel, message: string, data?: unknown): string {
    const timestamp = this.getTimestamp();
    const env = this.isServer ? "[SERVER]" : "[CLIENT]";
    const colorCode = this.getColorCode(level);
    const baseMessage = `${colorCode}[${timestamp}] ${env} [${this.context}] ${message}${this.reset}`;
    if (data) return `${baseMessage} ${JSON.stringify(data)}`;
    return baseMessage;
  }

  info(message: string, data?: unknown): void {
    if (this.isServer) console.log(this.formatMessage("info", message, data));
  }

  error(message: string, error?: unknown): void {
    if (this.isServer) {
      if (error instanceof Error) {
        console.error(this.formatMessage("error", message, {
          name: error.name, message: error.message, stack: error.stack,
        }));
      } else {
        console.error(this.formatMessage("error", message, error));
      }
    }
  }

  warn(message: string, data?: unknown): void {
    if (this.isServer) console.warn(this.formatMessage("warn", message, data));
  }

  debug(message: string, data?: unknown): void {
    if (this.isServer) console.debug(this.formatMessage("debug", message, data));
  }

  action(message: string, data?: unknown): void {
    if (this.isServer) console.log(this.formatMessage("action", message, data));
  }
}
