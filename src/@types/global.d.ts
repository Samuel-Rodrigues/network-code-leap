declare type FireStoreResponse = {
  docs: any[];
};

declare type CareersFetchResponse = {
  count: number;
  next: string;
  previous?: string;
  results: Career[];
};
