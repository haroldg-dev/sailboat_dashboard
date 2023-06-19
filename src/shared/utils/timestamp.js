export default function timestamp() {
  return new Date().getTime();
}

export function timestampCreated() {
  return { created_at: new Date().getTime() };
}

export function timestampUpdated() {
  return { updated_at: new Date().getTime() };
}
