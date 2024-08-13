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
