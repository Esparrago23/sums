export function log(message: string): void {
  console.log(message);
}

export function fatal(message: string): never {
  console.error(message);
  process.exit(1);
}