interface Id {
  id: string | number | symbol;
};

type ById<T extends Id> = Record<T['id'], T>;

interface NormalizedData<T extends Id> {
  byId: ById<T>,
  allIds: Array<T['id']>;
};


export const normalizeData = <T extends Id>(unnormalizedData: Array<T>): NormalizedData<T> => {
    const obj: NormalizedData<T> = {byId: {} as ById<T>, allIds: []}
    return unnormalizedData.reduce((acc, cur) => {
      const id = cur.id as T['id'];
      if (!(id in acc.byId)) {
        acc.byId[id] = cur;
        acc.allIds.push(id);
      }
      return acc
    }, obj);
};