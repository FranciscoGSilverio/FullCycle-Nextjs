import styled from "styled-components";
import { Button, Box } from "@radix-ui/themes";

export const InformationBox = styled(Box)`
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
`;

export const StyledSearchButton = styled(Button)`
  width: 100%;
`;

export const StyledPlacesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MapContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;
