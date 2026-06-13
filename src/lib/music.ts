import { wedding } from '../data/wedding.ts';

type Listener = (playing: boolean) => void;

class MusicController {
  private audio: HTMLAudioElement | null = null;
  private listeners = new Set<Listener>();

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(wedding.music);
      this.audio.loop = true;
      this.audio.preload = 'none';
      this.audio.addEventListener('play', () => this.notify(true));
      this.audio.addEventListener('pause', () => this.notify(false));
    }
    return this.audio;
  }

  async play(): Promise<void> {
    const audio = this.getAudio();
    try {
      await audio.play();
    } catch {
      // bloqueado por el navegador o sin gesto del usuario
    }
  }

  pause(): void {
    this.audio?.pause();
  }

  toggle(): void {
    const audio = this.getAudio();
    if (audio.paused) this.play();
    else this.pause();
  }

  isPlaying(): boolean {
    return this.audio ? !this.audio.paused : false;
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    fn(this.isPlaying());
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify(playing: boolean): void {
    this.listeners.forEach((fn) => fn(playing));
  }
}

export const music = new MusicController();
