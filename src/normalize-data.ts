  interface Post {
  id: string,
  title: string,
  body: string
}

type ById = Record<Post['id'], Post>;

interface NormalizedPost {
  byId: ById,
  allIds: Array<Post['id']>;
}


export const normalizeData = (unnormalizedData: Array<Post>): NormalizedPost => {
    const obj: NormalizedPost = {byId: {}, allIds: []}
    return unnormalizedData.reduce((acc, cur) => {
      if (!acc.byId.hasOwnProperty(cur.id)) {
        acc.byId[cur.id] = cur;
        acc.allIds.push(cur.id);
      }
      return acc
    }, obj);
};