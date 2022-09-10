import Reactotron, { networking } from 'reactotron-react-native';

type TronLogType = (value: string) => void;

declare global {
  interface Console {
    tron: { log: TronLogType; warn: TronLogType };
  }
}

if (__DEV__) {
  Reactotron.configure()
    .use(
      networking({
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      }),
    )
    .connect();

  console.tron = Reactotron as any;
}
