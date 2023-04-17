export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isLaunched: boolean;
  coverImage: string;
  urls: {
    appStore: string | null;
    playStore: string | null;
    web: string | null;
  };
};
