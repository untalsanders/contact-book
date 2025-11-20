let fakeCache: Record<string | number, boolean> = {}

export const fakeNetwork = async (key?: string | number) => {
  if (!key) {
    fakeCache = {}
    return
  }

  if (fakeCache[key]) {
    return
  }

  fakeCache[key] = true

  return new Promise(res => setTimeout(res, Math.random() * 800))
}
