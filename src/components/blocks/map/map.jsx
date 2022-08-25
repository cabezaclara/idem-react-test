import React, {useState} from "react";
import {YMaps, ZoomControl, Placemark, Button } from "@pbe/react-yandex-maps";
import {StyledTitle, StyledYandexMap} from "./styles";
import {TitleLevel} from "../../ui/title/title";
import myIcon from "../../../assets/map-marker.svg";
const mapState = { center: [55.75, 37.617], zoom: 12};
const placemarkOptions = { 
  iconLayout: 'default#image',
  iconImageHref: myIcon,
  iconImageSize: [44, 44],
  iconImageOffset: [-22, -22]
};

function Map({mapData}) {
  const [selectAllBtn, setSelectAllBtn] = useState(true);
  const [selectPersonBtn, setSelectPersonBtn] = useState(false);
  const [selectJuridicBtn, setSelectJuridicBtn] = useState(false);
  const [pins, setPins] = useState(mapData);
  const showJuridicalPersons = () => {
    let juridicalPins = [];
    let newArr = mapData.slice();
    for (let i = 0; i < newArr.length; i++) {
      if(newArr[i].isJuridicalPerson) {
        juridicalPins.push(newArr[i]);
      }
    }
    setPins(juridicalPins);
    setSelectJuridicBtn(true);
    setSelectAllBtn(false);
    setSelectPersonBtn(false);
  };
  const showNormalPersons = () => {
    let normalPins = [];
    let newArr = mapData.slice();
    for (let i = 0; i < newArr.length; i++) {
      if(!newArr[i].isJuridicalPerson) {
        normalPins.push(newArr[i]);
      }
    }
    setPins(normalPins);
    setSelectPersonBtn(true);
    setSelectAllBtn(false);
    setSelectJuridicBtn(false);
  };
  const showAll = () => {
    setPins(mapData);
    setSelectAllBtn(true);
    setSelectJuridicBtn(false);
    setSelectPersonBtn(false);
  };

  return (
    <YMaps >
      <StyledTitle level={TitleLevel.H2}>география </StyledTitle>
      <StyledYandexMap  defaultState={mapState} options={{suppressMapOpenBlock: true }}> 
        {pins &&
        pins.length &&
        pins.map((placemark) => (
          <Placemark 
            geometry={placemark.geometry}
            options={placemarkOptions}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={{
              hintContent: placemark.hint,
              balloonContent: placemark.balloon
            }}
          />
        ))}
        <ZoomControl options={{
            size: "small",
            position: {
            right: "14px",
            bottom: "32px",
            }
          }}
        />
        <Button options={{
            maxWidth: 144,
            float: 'none',
            position: {left: '24px', bottom: '126px'}
          }} data={{
            content: 'юрлица'
          }} defaultState={{
            selected: false
          }} 
          state={{
            selected: selectJuridicBtn
          }} 
          onClick={showJuridicalPersons}
        />
        <Button options={{
            maxWidth: 144,
            float: 'none',
            position: {left: '24px', bottom: '75px'}           
          }} data={{
            content: 'физлица'
          }} defaultState={{
            selected: false
          }} 
          state={{
            selected: selectPersonBtn
          }} 
          onClick={showNormalPersons}
        />
        <Button options={{
            maxWidth: 144,
            float: 'none',
            position: {left: '24px', bottom: '24px'}            
          }} data={{
            content: 'показать всё'
          }} defaultState={{
            selected: true
          }} 
          state={{
            selected: selectAllBtn
          }} 
          onClick={showAll}
        />
      </StyledYandexMap> 
    </YMaps>
  );
}

export default Map;