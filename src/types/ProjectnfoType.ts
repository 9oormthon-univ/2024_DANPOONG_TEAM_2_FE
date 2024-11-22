import IAddress from "./AddressType";
export default interface IProjectInfo {
  id: number;
  name: string;
  profileImg?: string;
  caption: string;
  fundingTarget: number;
  fundingCurrent: number;
  images?: string[];
  content: string;
  address: IAddress;
  certifiedType: string[];
  fundedCount: number | 0;
  likeCount: number | 0;
}
