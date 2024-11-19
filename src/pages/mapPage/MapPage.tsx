import styled from "styled-components";
import Maps from "../../components/map/Maps";

export default function MapPage() {
  return (
    <Page>
      <Maps />
    </Page>
  );
}

const Page = styled.div`
  width: 360px;
  height: 640px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
