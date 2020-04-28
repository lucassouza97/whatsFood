import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ItemCatalog = styled.View`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  background-color: #FFF;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  padding: 20px;
  margin-right: 10px;
`;

export const TextOrder = styled.Text`
  font-size: 18px;
  color: #fff;
  padding-bottom: 10px;
  font-weight: bold;
`;

export const TextCatalog = styled.Text`
  font-size: 18px;
  text-align: justify;
  font-weight: bold;
`;

export const TextValue = styled.Text`
  font-size: 18px;
  color: green;
  font-weight: bold;

`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const TouchableOpacity = styled.TouchableOpacity`

`;

export const SubItemCatalog = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ItemHeader = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ItemDescription = styled.Text`
  font-size: 14px;
  font-weight: 200;
`;

export const ViewDescription = styled.View`
  flex: 1;
  padding: 2px;
`;


export const ViewItem = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ViewButtons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 4px;
  margin-bottom: 6px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  border-radius: 6px;
  height: 28px;
  width: 160px;
  text-align: center;
  border-color: #fff;
  border-width: 1.5px;
  font-weight: bold;
  color: #fff;
`;

export const ViewInitial = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ViewCart = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TextCart = styled.Text`
  font-size: 18px;
  color: green;
  padding-bottom: 10px;
  font-weight: bold;
`;
