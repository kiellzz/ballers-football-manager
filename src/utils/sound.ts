const audioCache = new Map<string, HTMLAudioElement>();

export function playSound(src: string, volume = 0.3) {
  let audio = audioCache.get(src);

  if (!audio) {
    audio = new Audio(src);
    audio.preload = "auto";
    audioCache.set(src, audio);
  }

  const clone = audio.cloneNode() as HTMLAudioElement;
  clone.volume = volume;

  clone.play().catch(() => {
    // evita erro caso o navegador bloqueie reprodução automática
  });
}

let lastHover = 0;

export function playHover(src: string, volume = 0.12) {
  const now = Date.now();

  if (now - lastHover < 120) return;

  lastHover = now;
  playSound(src, volume);
}