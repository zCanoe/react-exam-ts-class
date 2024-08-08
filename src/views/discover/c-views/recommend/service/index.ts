import ztRequest from "@/service";

export function getBanner() {
  return ztRequest.get<any>({
    url: "/banner",
  });
}
