import styled from "styled-components";
import backgroundImage from "../image/side6.jpg";

export const ContentWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const PageHeaderContent = styled.div`
  width: 100%;
  display: inline-flex;
`;

export const HeaderWrapper = styled.div`
  /* background-color: rgb(122, 240, 185); */
  width: 50%;
  align-items: left;
  text-align: left;
  /* background-image: linear-gradient(
    rgb(35, 204, 153),
    rgb(55, 180, 211),
    rgb(23, 125, 221)
  ); */
`;
export const HeaderSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;
export const HeaderContent = styled.div`
  text-align: left;
  position: relative;
  left: 12%;
  margin-top:100px;
`;
export const SideImage = styled.img`
  width: 100%;
  /* height: 180px; */
  height: 50vh;
  position: relative;
  left: 2%;
  opacity: 90%;
`;
export const ContactContentWrapper = styled.div`
  text-align: right;
  position: relative;
  right: 80px;
  bottom: 6px;
`;
export const BackContentWrapper = styled.div`
  text-align: left;
  position: relative;
  top: 35px;
  left:35px;
`;
export const FirstHeaderWrapper = styled.div`
  width: 50%;
`;
export const FirstHeaderPartition = styled.div`
  width: 100%;
  height:300px;
  /* background-image:url(${backgroundImage});
  background-repeat:no-repeat; */
  background-image: linear-gradient(
    rgb(35, 204, 153),
    rgb(55, 180, 211),
    rgb(23, 125, 221)
  );
`;
export const BackRestaurantContentWrapper = styled.div`
  text-align: left;
  position: relative;
  top: 50px;
  left :50px;
`;
export const FiltersWrapper = styled.div`
  display: inline-flex;
  padding: 15px;
  /* background-color: rgb(122, 240, 185); */
  width: 90%;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  background-image: linear-gradient(
    rgb(35, 204, 153),
    rgb(55, 180, 211),
    rgb(23, 125, 221)
  );
`;

export const SelectWrapper = styled.select`
  width: 100px;
  height: 20px;
`;
export const RestaurantCardSideWrapper = styled.div`
  /* background-color: rgb(122, 240, 185); */
  border-radius: 5px;
  padding: 15px;
  width: 15%;
  height: 50%;
  text-align: center;
  position: absolute;
  left: 5%;
  background-image: linear-gradient( 
    rgb(35, 204, 153),
    rgb(55, 180, 211),
    rgb(23, 125, 221)
  );
`;
export const RestaurantsPartition = styled.div`
  width: 100%;
  display: inline-flex;
`;
export const RestaurantsGridWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: 7px;
  grid-row-gap: 27px;
  position: absolute;
  left: 25%;
  width: 75%;
`;
