export default interface IProjectInfo {
  id: number | undefined;
  name: string | undefined;
  profileImg: string | undefined;
  caption: string | undefined;
  fundingTarget: number | 0;
  fundingCurrent: number | 0;
  images?: string[] | undefined;
  content: string | undefined;
  address: string;
  x: number;
  y: number;
  certifiedType: string[] | undefined;
  fundedCount: number | 0;
  likeCount: number | 0;
}
