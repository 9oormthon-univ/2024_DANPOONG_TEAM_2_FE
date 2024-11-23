export default interface IProjectInfo {
  storeId: number | undefined;
  name: string | undefined;
  profileImg: string | undefined;
  caption: string | undefined;
  fundingTarget: number;
  fundingCurrent: number;
  images?: string[] | undefined;
  content: string | undefined;
  address: string;
  x: number;
  y: number;
  certifiedType: string[] | undefined;
  fundedCount: number;
  likeCount: number;
}
