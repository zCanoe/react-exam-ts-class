import ztRequest from "@/service";

export function getBanner() {
  return ztRequest.get<any>({
    url: "/banner",
  });
}

export function getHotRecommend(limit = 8) {
  return ztRequest.get({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbum() {
  return ztRequest.get({
    url: "/album/newest",
  });
}

export function getRankingList(id: number) {
  return ztRequest.get({
    url: "playlist/detail",
    params: {
      id,
    },
  });
}

export const getArtistList = (limit = 30) =>
  ztRequest.get<{ artists: any[] }>({
    url: "/artist/list",
    params: {
      limit,
    },
  });
