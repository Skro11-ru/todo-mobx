import React from 'react';
import './ButtonSvg.scss';

interface IProps {
  nameImg: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  optionalStyles?: React.CSSProperties;
}
const ButtonSvg = ({ nameImg, onClick, optionalStyles }: IProps) => {
  const getImage = () => {
    return (
      <img
        className="button-svg__icon"
        src={require(`../../../assets/icons/${nameImg}.svg`)}
        alt={nameImg}
      />
    );
  };
  return (
    <button style={optionalStyles} onClick={onClick} className="button-svg" type="button">
      {getImage()}
    </button>
  );
};

export default ButtonSvg;
