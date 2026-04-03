export interface Track {
  id: number;
  title: string;
  cover: string;
  type: 'EP' | 'Single';
  spotifyUrl?: string;
  appleMusicUrl?: string;
  soundcloudUrl?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
