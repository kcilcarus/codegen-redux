type Actions = {
  name: string;
  reducer?: boolean;
  saga?: boolean;
};

type FileDocs = {
  dir: string;
  fileName: string;
  actions: any[];
};
